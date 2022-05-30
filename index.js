import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente ("Ricardo", 5000, 12385467601);
gerente.cadastrarSenha("123"); //senha cadastrada

const cliente = new Cliente("Laís", "78945612358", "456");

const estalogado = SistemaAutenticao.login(gerente, "123");
const clientelogado = SistemaAutenticao.login(cliente, "456");

console.log(estalogado);
console.log(clientelogado);