export class Escritorio {
    Name : string;
    CNPJ: string;
    Endereco : string;
    EscritorioId : string;
    constructor(name,cnpj,endereco,id){
        this.EscritorioId = id;
        this.Name = name;
        this.CNPJ = cnpj;
        this.Endereco = endereco;
    }
}