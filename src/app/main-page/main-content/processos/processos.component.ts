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
    this.modalRefProcss = this.modalService.show(template, { backdrop: 'static', keyboard: false });
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
