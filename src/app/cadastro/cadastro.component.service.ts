import { HistoricoService } from "../historico/historico.service";
import { IcadastroFrutas } from "../model/Icadastro-frutas";
import { IcadastroLegumes } from "../model/Icadastro-legumes";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CadastroService {

   constructor(private historicoService: HistoricoService) { }

    //Tabela Frutas
    frutas: IcadastroFrutas[] = [{
        nome: "maça",
        quantidade: 5
    },
    {
        nome: "pera",
        quantidade: 9
    }]
    
    adicionar(nomeRecebido: string, quantidadeRecebida: number): void {
        if (nomeRecebido && /^[a-zA-Z]/.test(nomeRecebido) && quantidadeRecebida > 0) {
            let novaFruta: IcadastroFrutas = {
                nome: nomeRecebido,
                quantidade: quantidadeRecebida,
                
            }
            this.frutas.push(novaFruta)
            this.historicoService.adicionarRegistro(`Fruta "${nomeRecebido}" adicionada com a quantidade ${quantidadeRecebida}`);
        } else if (!nomeRecebido && !quantidadeRecebida) {
            alert('Os campos nome e quantidade são obrigatorios');

        } else if (nomeRecebido && !/^[a-zA-Z]/.test(nomeRecebido) && !quantidadeRecebida) {
            alert('Digite um valor válido para os campos nome e quantidade');
        }
        else if (nomeRecebido && !quantidadeRecebida || quantidadeRecebida < 1) {
            alert('Digite um valor maior que 0 para o campo quantidade');

        } else {
            alert('Digite um valor válido para o campo nome');
        }
    }

    excluir(index: number): void {
        console.log('Chamando método excluir do serviço');
        this.frutas.splice(index, 1);
    }
    
    editar(frutas: IcadastroFrutas, novoNome: String, novaQuantidade: number): void {
        console.log('Chamando método editar do serviço');
        frutas.nome = novoNome;
        frutas.quantidade = novaQuantidade;
        this.historicoService.adicionarRegistro(` Campo Nome: Fruta editada para "${novoNome}" e quantidade para ${novaQuantidade}`);
    }


    // Tabela Legumes

    legumes: IcadastroLegumes[] = [{
        nome: "abobrinha",
        quantidade: 5
    },
    {
        nome: "xuxu",
        quantidade: 9
    }]

    adicionar1(nomeRecebido: string, quantidadeRecebida: number): void {
        if (nomeRecebido && /^[a-zA-Z]/.test(nomeRecebido) && quantidadeRecebida > 0) {
            const novoLegume: IcadastroLegumes = {
                nome: nomeRecebido,
                quantidade: quantidadeRecebida
            }
            this.legumes.push(novoLegume);
            this.historicoService.adicionarRegistro(`Legume "${nomeRecebido}" adicionada com a quantidade ${quantidadeRecebida}`);

        } else if (!nomeRecebido && !quantidadeRecebida) {
            alert('Os campos nome e quantidade são obrigatorios');

        } else if (nomeRecebido && !/^[a-zA-Z]/.test(nomeRecebido) && !quantidadeRecebida) {
            alert('Digite um valor válido para os campos nome e quantidade');

        }
        else if (nomeRecebido && !quantidadeRecebida || quantidadeRecebida < 1) {
            alert('Digite um valor maior que 0 para o campo quantidade');


        } else {
            alert('Digite um valor válido para o campo nome');

        }
    }

    editar1(legumes: IcadastroLegumes, novoNome: String, novaQuantidade: number): void {
        legumes.nome = novoNome;
        legumes.quantidade = novaQuantidade
        this.historicoService.adicionarRegistro(` Campo Nome: Legumes editado para "${novoNome}" e quantidade para ${novaQuantidade}`);
    }

    excluir1(index: number): void {
        this.legumes.splice(index, 1);

    }


}
