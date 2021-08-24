import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { TituloComponent } from './titulo/titulo.component';
import { DescricaoPaginaComponent } from './descricao-pagina/descricao-pagina.component';
import { AvisosComponent } from './avisos/avisos.component';
import { LegendaComponent } from './legenda/legenda.component';
import { AlertaComponent } from './alerta/alerta.component';
import { FiltroPainelComponent } from './filtro-painel/filtro-painel.component';
import { PainelSistemasComponent } from './painel-sistemas/painel-sistemas.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { FiltroHistoricoComponent } from './filtro-historico/filtro-historico.component';
import { ListaSistemasComponent } from './lista-sistemas/lista-sistemas.component';

//Modules
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

//Plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    TituloComponent,
    DescricaoPaginaComponent,
    AlertaComponent,
    AvisosComponent,
    LegendaComponent,
    FiltroPainelComponent,
    PainelSistemasComponent,
    CalendarioComponent,
    CheckStatusComponent,
    FiltroHistoricoComponent,
    ListaSistemasComponent
  ],
  exports: [
    TituloComponent,
    DescricaoPaginaComponent,
    AlertaComponent,
    AvisosComponent,
    LegendaComponent,
    FiltroPainelComponent,
    PainelSistemasComponent,
    CalendarioComponent,
    FiltroHistoricoComponent,
    ListaSistemasComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    FullCalendarModule,
    MatIconModule
  ]
})
export class SharedModule { }
