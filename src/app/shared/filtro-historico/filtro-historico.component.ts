import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filtro-historico',
  templateUrl: './filtro-historico.component.html',
  styleUrls: ['./filtro-historico.component.scss']
})
export class FiltroHistoricoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  anos: any = [
    {value: 'ano-0', viewValue: '2021'},
    {value: 'ano-1', viewValue: '2020'},
    {value: 'ano-2', viewValue: '2019'}
  ];

  meses: any = [
    {value: 'mes-0', viewValue: 'Janeiro'},
    {value: 'mes-1', viewValue: 'Fevereiro'},
    {value: 'mes-2', viewValue: 'Março'},
    {value: 'mes-3', viewValue: 'Abril'},
    {value: 'mes-4', viewValue: 'Maio'},
    {value: 'mes-5', viewValue: 'Junho'},
    {value: 'mes-6', viewValue: 'Julho'},
    {value: 'mes-7', viewValue: 'Agosto'},
    {value: 'mes-8', viewValue: 'Setembro'},
    {value: 'mes-9', viewValue: 'Outubro'},
    {value: 'mes-10', viewValue: 'Novembro'},
    {value: 'mes-11', viewValue: 'Dezembo'}
  ];

}
