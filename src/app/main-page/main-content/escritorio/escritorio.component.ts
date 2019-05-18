import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Escritorio } from 'src/app/model/escritorio.model';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {

  @Input() escritorioDataInput: any;
  editForm: FormGroup;
  sucesso: boolean = null;
  escritorio: Escritorio = new Escritorio(null,null,null,null);
  constructor(private formBuilder: FormBuilder, private userService: UserService) { 
    this.editForm = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      cnpj: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges){

    if(changes.escritorioDataInput){
      this.editForm.setValue({
        'cnpj' : this.escritorioDataInput ? this.escritorioDataInput.cnpj : "teste21212" ,
        'endereco' : this.escritorioDataInput ? this.escritorioDataInput.endereco : "" ,
        'nomeCompleto' : this.escritorioDataInput ? this.escritorioDataInput.name : "" ,
      });
    }
  }

  loadEscritorio() {
    this.escritorio.EscritorioId = this.escritorioDataInput.escritorioId;
    this.escritorio.CNPJ = this.editForm.get('cnpj').value;
    this.escritorio.Endereco = this.editForm.get('endereco').value;
    this.escritorio.Name = this.editForm.get('nomeCompleto').value;
  }

  onSubmit(){
    this.loadEscritorio();
    this.userService.saveEscritorio(this.escritorio).subscribe(
      value => {
        this.sucesso = true;
      },
      err => {
        this.sucesso = false;
      },
    );
  }
}
