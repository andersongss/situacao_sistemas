import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.scss']
})
export class CheckStatusComponent implements OnInit {

  // @Output() public emmitChecked: EventEmitter<Event> = new EventEmitter();

  // @Output() eventClicked = new EventEmitter<any>();
  @Output() emitter:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  // public ultimosDias(event: { checked: boolean; }){
  //   // console.log(event.checked)
  //   this.eventClicked.emit(event.checked);

  // }


  public ultimosDias(event: { checked: boolean; }){
    this.emitter.emit(event.checked);
  }

}
