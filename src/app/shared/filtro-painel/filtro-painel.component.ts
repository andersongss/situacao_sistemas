import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'filtro-painel',
  templateUrl: './filtro-painel.component.html',
  styleUrls: ['./filtro-painel.component.scss']
})
export class FiltroPainelComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  categorias: any = [
    {value: 'categoria-0', viewValue: 'Categoria 1'},
    {value: 'categoria-1', viewValue: 'Categoria 2'},
    {value: 'categoria-2', viewValue: 'Categoria 3'}
  ];

}

