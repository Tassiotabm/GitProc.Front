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

  processos: any[];
  processosAdvogado:  any[];
  modalRef: BsModalRef;
  showModal: boolean = true;
  processForm: FormGroup;
  sucesso: boolean = true;
  erro: boolean = true;

  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder, private processService: ProcessService) { }

  ngOnInit() {

    this.processForm = this.formBuilder.group({
      processo: ['', Validators.required],
    });

    this.getProcess();

    //mock
    this.processos = [
      {
        'number': '0006042-25.2012.8.19.0007',
        'smallInfo': '	processamento meta 2 32',
        'comarca': '	Cartório da 2ª Vara Cível',
        'smallDate': '2 meses atras',
      },
      {
        'number': '0002470-26.2011.8.19.0030',
        'smallInfo': 'Procedimento Sumário (CADASTRO OU CONVOLAÇÃO ATÉ 17.03.2016)',
        'comarca': 'Cartório da Vara Única',
        'smallDate': '4 meses atras',
      },
      {
        'number': '0271903-60.2010.8.19.0001',
        'smallInfo': 'Em fase de encaminhamento ao arquivo',
        'comarca': 'Central de Arquivamento do 1º Núcleo Regional',
        'smallDate': '1 mes atras',
      },
      {
        'number': '0103847-61.2010.8.19.0002',
        'smallInfo': '	Aguardando Movimentação',
        'comarca': 'Central de Arquivamento -Nur 2',
        'smallDate': '2 anos atras',
      }
    ]
  }

  getProcess(){
    this.processService.getProcess(localStorage.getItem('UserId')).subscribe(
      value => {
        this.processosAdvogado = value;
      },
      err => {
      },
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { backdrop: 'static', keyboard: false });
  }

  closeModal(){
    this.modalRef.hide();
  }

  onSubmit() {
    this.sucesso = true;
    this.erro = true;

    if (this.processForm.invalid) {
      return;
    }
 
    this.processService.createProcess(this.processForm.controls.processo.value).subscribe(
      value => {
        this.sucesso = false;
      },
      err => {
        this.erro = false;
      },
    );
  }

}
