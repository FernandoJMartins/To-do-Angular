export class Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;

    constructor(id: number=1, nome: string='', email: string='', senha: string='') {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }


    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getSenha(): string {
        return this.senha;
    }

    public setSenha(senha: string): void {
        this.senha = senha;
    }

    public toString(): string {
        return `Usuario [id=${this.id}, nome=${this.nome}, email=${this.email}, senha=${this.senha}]`;
    }

    public equals(obj: Usuario): boolean {
        return this.id === obj.id;
    }

}
