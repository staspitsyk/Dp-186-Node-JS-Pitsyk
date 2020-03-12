export class PokemonView {
  constructor(cbRandom, cbSearch) {
    this.btn = document.querySelector('.btn-poke');
    this.info = document.querySelector('.pokemon-info');
    this.btn.addEventListener('click', cbRandom);

    this.btnSearch = document.getElementsByClassName('search__btn')[0];
    this.btnSearch.addEventListener('click', cbSearch);

    this.ulPokemon = document.getElementsByClassName('search__pokemon-list')[0];
    this.ulItStuff = document.getElementsByClassName('search__it-list')[0];
  }

  renderPokemons(arr) {
    this.info.innerHTML = arr.map(pokemon => this.getSinglePokemon(pokemon)).join('');
  }

  getSinglePokemon({
    name,
    photo
  }) {
    return `<div class="card" style="width: 8rem;">
        <img src="${photo}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
        </div>
      </div>`;
  }

  getName() {
    const input = document.querySelector('#inp');
    const name = input.value.trim().toLowerCase();
    input.value = '';
    return name;
  }

  renderPokemonFromSearch(name) {
    const pokemon = document.createElement('li');
    pokemon.innerHTML = name;
    this.ulPokemon.append(pokemon);
  }

  renderItStuffFromSearch(name) {
    const itSuff = document.createElement('li');
    itSuff.innerHTML = name;
    this.ulItStuff.append(itSuff);
  }

}