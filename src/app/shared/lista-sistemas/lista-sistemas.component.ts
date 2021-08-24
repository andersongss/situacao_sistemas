import { Component, OnInit, Input } from '@angular/core';
import { ReadingjsonService } from 'src/app/service/readingjson.service';

@Component({
  selector: 'lista-sistemas',
  templateUrl: './lista-sistemas.component.html',
  styleUrls: ['./lista-sistemas.component.scss']
})
export class ListaSistemasComponent implements OnInit {

  public getAllEmployees: any;
  @Input()
  checked!: boolean;
  
  constructor(
    private readingjsonService: ReadingjsonService,
    ) {}

    ngOnInit(): void {
      this.readingjsonService.getEmployees().subscribe(
        (res: any) => {
          this.getAllEmployees = res;
        }
        );
        
      }

}
