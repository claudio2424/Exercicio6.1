import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nome: string = ''
  sobrenome: string = ''
  username:string =''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  complemento: string = ''
  senha: string = ''
  confirmaSenha: string = ''

  validarSenha(s1: any ,s2: any): boolean {
    return !(s1 === s2)

  }

  submit(): void{
    console.log(`Name = ${this.nome}`)
    console.log(`Lastame = ${this.sobrenome}`)
    console.log(`Username = ${this.username}`)
    console.log(`cpf = ${this.cpf}`)
    console.log(`Telefone = ${this.telefone}`)
    console.log(`endereco = ${this.endereco}`)
    console.log(`compelento = ${this.complemento}`)
    console.log(`senha = ${this.senha}`)
    console.log(`confirmaSenha = ${this.confirmaSenha}`)
  }
  
  
}


