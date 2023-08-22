import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };


  nameButton = "Enviar";
  dados = {
      nome: "",
      sobrenome: "",
      cpf:"",
      idade:"",
      endereco:""

  };
  


  //  Injeção de dependencia - é quando nossa aplicação depende de uma ferramenta para realizar alguma tarefa
  // Para fazer a injeção de dependencia precisamos do construtor
  // Boa prática - usar o construtor somente para injeção de dependencia


  constructor(private leo_Voyage:HttpClient){}

    /*Método de cadastro */
    cadastro(form:any){


      this.leo_Voyage.post('http://localhost:3000/clientes', form.value, this.httpOptions).subscribe();
    
    
    
    }
}

