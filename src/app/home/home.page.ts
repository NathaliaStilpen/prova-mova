import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  opcaoSelecionada: any;
  filtroSelecionado:any;
  resultado: any;
  labelSelecionada: any;
  dadosPais: any;
  habilitaBotao: boolean = false;
  mostraListaPaises: boolean = false;
  constructor(
    private http:HttpClient,
    private router:Router
    ) {}

  customPopoverOptions: any = {
    header: 'Escolha uma Opção',
  };

  async carregaOpcoes(){

   await this.http.get(`https://restcountries.eu/rest/v2/${this.opcaoSelecionada}/${this.filtroSelecionado}`).subscribe((data) => {
   
    this.resultado = data;
    this.mostraListaPaises = true;
    console.log(this.resultado);
    
    });
    
  }

  nomeiaLabel(){
    if(this.opcaoSelecionada == 'lang'){
      return 'Línguagem'
    }else if(this.opcaoSelecionada == 'region'){
      return 'Região'
    }else if(this.opcaoSelecionada == 'capital'){
      return 'Capital'
    }else if(this.opcaoSelecionada == 'callingcode'){
      return 'Codigo de Ligação'
    }else if(this.opcaoSelecionada == 'name'){
      return 'País'
    }
  }


  redirecionaPaisSelecionado(name){

    this.router.navigateByUrl(`paises/${name}`)
  }
  previousPage(){
    window.location.reload()
  }
}
