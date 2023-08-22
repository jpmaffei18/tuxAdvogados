import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../model/pessoas.model';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  usuarios:Pessoas[] = [];
  
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<Pessoas[]>('http://localhost:3000/clientes').subscribe(results => this.usuarios = results );
  }

  obterUsuariosMaisVelhos() {
    return this.usuarios.filter (cliente => cliente.idade);
  }
}
