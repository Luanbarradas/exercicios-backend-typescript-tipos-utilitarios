type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: "credito" | "Debito";
  cartao: Cartao;
};

type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type NovoCarrinho = Omit<Carrinho, "tipoTransacao"> & {
  endereco: Endereco;
  tipoTransacao: Lowercase<"credito" | "Debito">;
};

// type NovoCarrinho = {
//     item: Item,
//     qtd: number,
//     desconto: number,
//     frete: number,
//     tipoTransacao: Lowercase<'credito' | 'Debito'>,
//     cartao: Cartao
//     endereco: Endereco
// }

const venda: NovoCarrinho = {
  item: {
    nome: "blusa",
    descricao: "camisa azul",
    valor: 123,
  },
  qtd: 3,
  desconto: 12,
  frete: 100,
  tipoTransacao: "debito",
  cartao: {
    numero: 123,
    validade: "11/35",
    nome: "joao da silva",
    cvv: 123,
  },
  endereco: {
    cep: "12345678",
    rua: "dos bobos",
    bairro: "lugar nenhum",
    cidade: "inexistente",
    estado: "OO",
  },
};
