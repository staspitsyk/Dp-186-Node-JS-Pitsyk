export class PokemonModel {
    constructor() {
        this.link = 'https://pokeapi.co/api/v2/pokemon/';
        this.base = [];
        this.pokemonMax = 807;
    }

    getRandomPokemon() {
        const id = Math.floor(Math.random() * this.pokemonMax + 1);
        return fetch(`${this.link}${id}`)
            .then(response => response.json())
            .then(data => {
                this.base.push({
                    id,
                    name: data.name,
                    photo: data.sprites.front_default
                });
                return this.base;
            });
    }

    async getPokemonByName(name) {
        try {
            console.log(name);
            const response = await fetch(`${this.link}${name}`);

            if (response.ok) {
                const data = await response.json();

                return data.name;
            } else {
                return [name];
            }

        } catch (e) {
            console.log(e);
        }

    }
}