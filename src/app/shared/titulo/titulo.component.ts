import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public titulo:string = "Situação atual dos serviços digitais do TSE";

}
