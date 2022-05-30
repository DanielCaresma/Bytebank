export class Funcionario {
    constructor(nome, slario, cpf) {
        this._nome = nome;
        this._salario = slario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    get senha() {
        return this._senha;
    }
        //senha cadastrada
        cadastrarSenha(senha) {
        this._senha = senha;
    } 

}
