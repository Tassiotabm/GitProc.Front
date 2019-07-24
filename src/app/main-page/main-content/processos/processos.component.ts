import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcessService } from 'src/app/service/process.service';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {

  processosEscritorio: any[];
  processosAdvogado: any[];
  modalRef: BsModalRef;
  modalRefProcss: BsModalRef;
  showModal: boolean = true;
  processForm: FormGroup;
  sucesso: boolean = true;
  erro: boolean = true;
  erroMessage: string;
  movimento: any[];
  detalhe: any;
  showMovimentos: boolean = true;

  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder, private processService: ProcessService) { }

  ngOnInit() {
    this.processForm = this.formBuilder.group({
      nick: ['', Validators.required],
      processo: ['', Validators.required, this.noWhitespaceValidator],
    });

    this.getProcess();
  }

  noWhitespaceValidator(control: FormGroup) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
  getProcess() {
    this.processService.getProcess(localStorage.getItem('UserId')).subscribe(
      value => {
        this.processosAdvogado = value;
      },
      err => {
      },
    );
    this.processService.getProcessEscritorio(localStorage.getItem('UserId')).subscribe(
      value => {
        this.processosEscritorio = value;
      },
      err => {
      },
    );
  }

  openModalProcess(template: TemplateRef<any>, procData) {
    this.callData(procData)
    this.modalRefProcss = this.modalService.show(template, { class: 'modal-lg', backdrop: 'static', keyboard: false });
  }

  callData(procData) {
    this.processService.getMovimentos(procData.processoMasterId).subscribe(
      value => {
        if (value) {
          let array = [];
          let data = JSON.parse(value.movimentoData);
          let tag = JSON.parse(value.movimentoTag);
          data.forEach((element: any, i: string | number) => {
            array.push({
              titulo: tag[i],
              info: element
            })
          });
          this.movimento = array;
          let procDetails = {
            acao: procData.processoMaster.acao,
            advogados: procData.processoMaster.advogados,
            assunto: procData.processoMaster.assunto,
            bairro: procData.processoMaster.bairro,
            cidade: procData.processoMaster.cidade,
            classe: procData.processoMaster.classe,
            comarca: procData.comarca,
            dataDistribuicao: procData.processoMaster.dataDistribuicao,
            dataVerificacao: procData.processoMaster.dataVerificacao,
            endereco: procData.processoMaster.endereco,
          }
          let procArrayDetails = [];
          Object.keys(procDetails).forEach(function(key) {
            procArrayDetails.push({
              titulo: key,
              info: procDetails[key]
            })
          });
          this.detalhe = procArrayDetails;
        }
      },
      err => {
      },
    );
  }

  closeModalProcess() {
    this.erro = true;
    this.modalRefProcss.hide();
    this.getProcess();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { backdrop: 'static', keyboard: false });
  }

  closeModal() {
    this.modalRef.hide();
    this.getProcess();
  }

  onSubmit() {
    this.sucesso = true;
    this.erro = true;

    if (this.processForm.invalid) {
      return;
    }

    this.processService.createProcess(this.processForm.controls.processo.value, this.processForm.controls.nick.value).subscribe(
      value => {
        this.sucesso = false;
      },
      err => {
        this.erroMessage = err.error.Message;
        this.erro = false;
      },
    );
  }

}
