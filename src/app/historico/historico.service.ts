import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HistoricoService {
  historico: string[] = [];


  adicionarRegistro(registro: string): void {
    const data = new Date().toLocaleString();
    this.historico.unshift(`${data}: ${registro}`);
    
  }

  removerDoHistorico(index: number): void {
    this.historico.splice(index, 1);
  }

  limparHistorico(): void {
    this.historico = [];
  }

  retornarHistorico(): string[] {
    return this.historico;
  }


}


