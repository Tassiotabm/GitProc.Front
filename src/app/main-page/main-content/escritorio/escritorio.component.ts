import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {


  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.editForm = this.formBuilder.group({
      email: ['', Validators.required],
      nomeCompleto: ['', Validators.required],
      oab: ['', Validators.required],
      endereco: ['', Validators.required]
    });
  }


  onSubmit(){
    //to be added
  }
}
