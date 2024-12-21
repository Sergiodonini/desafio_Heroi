class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque padrão';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Criando instâncias de heróis
const mago = new Heroi('Gandalf', 2000, 'Mago');
const guerreiro = new Heroi('Conan', 30, 'Guerreiro');
const monge = new Heroi('Ryu', 35, 'Monge');
const ninja = new Heroi('Hattori Hanzo', 40, 'Ninja');

// Chamando o método atacar()
mago.atacar(); // Saída: O Mago Gandalf atacou usando magia
guerreiro.atacar(); // Saída: O Guerreiro Conan atacou usando espada
monge.atacar(); // Saída: O Monge Ryu atacou usando artes marciais
ninja.atacar(); // Saída: O Ninja Hattori Hanzo atacou usando shuriken