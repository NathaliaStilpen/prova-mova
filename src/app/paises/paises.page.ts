import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage implements OnInit {
  pais:any;
  resultado: any;
  paisSelecionado: any = {borders: []};
  vizinhos:any;
  vizinhoSelecionado: any[] = [];

  variavel: {} = {item1: 'item 1',
                  item2:['item 1', 'item 2'],
                  item3: 37                      
};
  arrayTeste: any[] = ['item 1', 'item 2'];
  

  constructor(private router: Router,
    private http:HttpClient,
    private route: ActivatedRoute,) { }

  async ngOnInit() {
    this.pais = this.router.url.split("/")[2];
    this.carregaPais();
  }

  carregaPais(){

    return new Promise((resolve, reject) => {

      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      this.http.get(
        `https://restcountries.eu/rest/v2/name/${this.pais}`,
      ).subscribe((resposta) => {

          resolve(resposta);
      }, (erro) => {
          reject(erro);
      });
  }).then(async (resposta) => {
    
    
    this.paisSelecionado = await resposta[0];
    console.log(this.paisSelecionado);
    for (const pais of this.paisSelecionado.borders) {
      this.carregaVizinhos(pais);
    }

  });


  }

  carregaVizinhos(pais){

    return new Promise((resolve, reject) => {
      // Mando o Cabeçalho
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      // Consultando API
      
      this.http.get(
        `https://restcountries.eu/rest/v2/name/${pais}`,
      ).subscribe((resposta) => {

          resolve(resposta);
      }, (erro) => {
          // Finalizando o carregamento
         
          reject(erro);
      });
  }).then(async (resposta) => {

    this.vizinhoSelecionado.push(resposta[0]);

  });

  }

  nextpage(name){

    this.router.navigateByUrl(`paises/${name}`)
  }

  
  previousPage(){
    this.router.navigateByUrl(`home`)
  }

}
