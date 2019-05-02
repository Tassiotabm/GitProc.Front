import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {

  processos : any[];

  constructor() { }

  ngOnInit() {
    this.processos = [
      {
        'number' : '0006042-25.2012.8.19.0007',
        'smallInfo' : '	processamento meta 2 32',
        'comarca' : '	Cartório da 2ª Vara Cível',
        'smallDate' : '2 meses atras',
      },
      {
        'number' : '0002470-26.2011.8.19.0030',
        'smallInfo' : 'Procedimento Sumário (CADASTRO OU CONVOLAÇÃO ATÉ 17.03.2016)',
        'comarca' : 'Cartório da Vara Única',
        'smallDate' : '4 meses atras',
      },
      {
        'number' : '0271903-60.2010.8.19.0001',
        'smallInfo' : 'Em fase de encaminhamento ao arquivo',
        'comarca' : 'Central de Arquivamento do 1º Núcleo Regional',
        'smallDate' : '1 mes atras',
      },
      {
        'number' : '0103847-61.2010.8.19.0002',
        'smallInfo' : '	Aguardando Movimentação',
        'comarca' : 'Central de Arquivamento -Nur 2',
        'smallDate' : '2 anos atras',
      }
    ]
  }

}
