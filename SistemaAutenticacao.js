export class SistemaAutenticao {
    static login (funcionario, senha){
              //senha cadastrada     //senha no login
        return funcionario.senha == senha;
    }
}
