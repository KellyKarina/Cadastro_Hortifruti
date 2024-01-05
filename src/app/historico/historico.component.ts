import { Component } from '@angular/core';
import { HistoricoService } from './historico.service';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent {
  historico: string[] = [];
  

  constructor(private historicoService: HistoricoService) {
    this.historico = this.historicoService.retornarHistorico();
  }

  removerDoHistorico(index: number): void {
    this.historicoService.removerDoHistorico(index);
    this.historico.splice(index,0);
  }

  limparHistorico(): void {
    this.historicoService.limparHistorico();
    this.historico = [];
  }

}
