export class SistemaAutenticao {
    static login (autenticavel, senha){
        if (SistemaAutenticao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}
