import { 
    Funcionario 
} from "./funcionario";

export class Diretor extends Funcionario {
    constructor() {
        super(nome, salario, cpf);
        this._bonificacao = 2;
    }
}
