import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { IcadastroFrutas } from '../model/Icadastro-frutas';
import { IcadastroLegumes } from '../model/Icadastro-legumes';
import { raceWith } from 'rxjs';
import { HistoricoService } from '../historico/historico.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {
  listafrutas!: IcadastroFrutas[]
  listalegumes!: IcadastroLegumes[]
  editorFrutas: IcadastroFrutas | '' = ''
  editorLegumes: IcadastroLegumes | '' = '';

  constructor(private CadastroService: CadastroService, private historicoService: HistoricoService) {
    this.listafrutas = this.CadastroService.frutas
    this.listalegumes = this.CadastroService.legumes
  }
  excluirFrutas(index: number): void {
    const frutaExcluida = this.listafrutas[index];

    if (frutaExcluida) {
      this.CadastroService.excluir(index);
      this.historicoService.adicionarRegistro(
        `Fruta "${frutaExcluida.nome}" excluída com a quantidade ${frutaExcluida.quantidade}`
      );
    } else {
      alert('Tentativa de excluir uma fruta inexistente.');
    }
  }

  editarFrutas(frutas: IcadastroFrutas):void{
    if(this.editorFrutas == frutas){
      if(frutas.nome && frutas.quantidade < 1){
        alert('Digite um valor maior que 0 paro o campo quantidade')

      }else if(!frutas.nome || !frutas.quantidade){
        alert('Preencha os campos nome e quantidade antes de salvar')
      }
      else if( !/^[a-zA-Z]/.test(frutas.nome.trim())){
        alert('Digite um valor válido para o campo nome')
      }else{
        this.CadastroService.editar(frutas, frutas.nome, frutas.quantidade);
        this.editorFrutas = ''
      }

    }else{
      this.editorFrutas = frutas
    }

  }

  botaoEditorFrutas(frutas: IcadastroFrutas): string {

    return this.editorFrutas == frutas ? 'Salvar' : 'Editar';

  }


  //legumes

  excluirLegumes(index: number): void {
    const legumeExcluido = this.listalegumes[index];

    if (legumeExcluido) {
      this.CadastroService.excluir1(index);
      this.historicoService.adicionarRegistro(`Fruta "${legumeExcluido.nome}" excluída com a quantidade ${legumeExcluido.quantidade}`);
    } else {
      alert('Tentativa de excluir uma fruta inexistente.');
    }
  }

  editarLegumes(legume: IcadastroLegumes): void {
    if (this.editorLegumes === legume) {
      if (legume.nome && legume.quantidade < 1) {
        alert('Digite um valor maior que 0 paro o campo quantidade')

      }else if (!legume.nome || !legume.quantidade) {
        alert('Preencha os campos nome e quantidade antes de salvar')

      }else if (!/^[a-zA-Z]/.test(legume.nome.trim())) {
        alert('Digite um valor válido para o campo nome')

      }else {
        this.CadastroService.editar1(legume, legume.nome, legume.quantidade);
        this.editorLegumes = ''
      }

    } else {
      this.editorLegumes = legume
    }

  }

  botaoEditorLegumes(legumes: IcadastroLegumes): string {
    return this.editorLegumes == legumes ? 'Salvar' : '';
  }

}