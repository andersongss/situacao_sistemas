import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'painel-sistemas',
  templateUrl: './painel-sistemas.component.html',
  styleUrls: ['./painel-sistemas.component.scss']
})
export class PainelSistemasComponent implements OnInit {

  public CheckedUltimosDias: boolean = false;
  
  constructor(
  ) {}

  ngOnInit(): void {

  }

  checked!: boolean;

  send(checked: boolean){
    this.checked = checked;
  }

}
