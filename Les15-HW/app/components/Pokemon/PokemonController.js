import { PokemonModel } from "./PokemonModel.js";
import { PokemonView } from "./PokemonView.js";

export class PokemonController {
    constructor() {
        this.model = new PokemonModel();

        this.view = new PokemonView(this.handleClickRandomPokemon.bind(this), this.handleClickIsItPokemon.bind(this));

    }

    handleClickRandomPokemon() {
        this.model.getRandomPokemon()
            .then(arr => this.view.renderPokemons(arr));
    }

    handleClickIsItPokemon() {
        const name = this.view.getName();
        this.model.getPokemonByName(name)
            .then(data => {
                console.log(data)
                if (typeof data === 'string') {
                    this.view.renderPokemonFromSearch(data);
                } else {
                    this.view.renderItStuffFromSearch(data[0]);
                }
            });
    }
}