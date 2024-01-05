import { Component } from '@angular/core';
import { IcadastroLegumes } from '../model/Icadastro-legumes';
import { IcadastroFrutas } from '../model/Icadastro-frutas';
import { CadastroService } from '../cadastro/cadastro.component.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  nome!: string;
  quantidade!: number;
  frutas!: IcadastroFrutas[];
  legumes!: IcadastroLegumes[];
  tipoItem: 'frutas' | 'legumes' = 'frutas'; 

  constructor(private CadastroService: CadastroService) {
    this.frutas = this.CadastroService.frutas;
    this.legumes = this.CadastroService.legumes;
  }

  adicionarItem(): void {
    if (this.tipoItem === 'frutas') {
      this.CadastroService.adicionar(this.nome, this.quantidade);
    } else if (this.tipoItem === 'legumes') {
      this.CadastroService.adicionar1(this.nome, this.quantidade);
    }

    this.nome = '';
    this.quantidade = 0;
  }
}
