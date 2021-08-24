import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/pt-br';

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: esLocale,
    height: 'auto',
    events: [{
        date: '2021-08-23',
        classNames: "disponivel",
        color: '#006F17'
      },
      {
        date: '2021-08-24',
        classNames: "indisponivel",
        color: '#A90000'
      },
      {
        date: '2021-08-25',
        classNames: "manutencao",
        color: '#00A6D7'
      },
      {
        date: '2021-08-26',
        classNames: "instabilidade",
        color: '#FCEE21'
      },
      {
        date: '2021-08-07',
        classNames: "indisponivel",
        color: '#A90000'
      },
    ]
  };

}
