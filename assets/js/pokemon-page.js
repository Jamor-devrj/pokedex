const pokemonPage = document.querySelector('#pokemonPage')
const pokedex = document.querySelector('#pokedex')
const pName = document.querySelector('#pName')
const pNumber = document.querySelector('#pNumber')
const api = 'https://pokeapi.co/api/v2/'


function getPokemon(pokemon) {
    const response = fetch(`${api}pokemon/${pokemon}`)
    const data = response.json()
        pokemonPage.innerHTML = `
            <section class="content-stats ${pokemon.name}" id="pokemonInfo">
                <div class="pokemon-top">
                    <a href="index.html"><span class="material-symbols-outlined">arrow_back</span></a>
                    <span class="material-symbols-outlined">favorite</span>
                </div>

                <div class="pokemon-name name">
                    <span>${pokemon.name}</span>
                    <span>#${pokemon.number}</span>
                </div>

                <div class="details">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>

                <div class="pokemon-image">        
                <img src="${pokemon.photo}" alt=${pokemon.name}>    
                </div>
            </section>

            <div class="pokemon-stats" id="pokemonStats">
                <nav>
                    <ul>
                        <li class="active">About</li>
                        <li>Base Stats</li>
                        <li>Evolution</li>
                        <li>Moves</li>
                    </ul>
                </nav>

                <div class="info-table">
                    <table>
                        <tr>
                            <td class="item">Species</td>
                            <td class="description">${getPokemonsSpecies(data.id, 'specie')}</td>
                        </tr>
                        <tr>
                            <td class="item">Height</td>
                            <td class="description">${data.height/10} m</td>
                        </tr>
                        <tr>
                            <td class="item">Weight</td>
                            <td class="description">${data.weight/10} Kg</td>
                        </tr>
                        <tr>
                            <td class="item">Abilities</td>
                            <td class="description">${data.abilities.map((ability) => ability.ability.name).join(', ')}</td>
                        </tr>
                        <th>Breeding</th>
                            <tr>
                                <td class="item">Gender</td>
                                <td class="description gender">
                                    <span class="material-symbols-outlined male">
                                        male
                                    </span> ${getPokemonsSpecies(data.id, ' ', 'male')}
                                    <span class="material-symbols-outlined female">
                                        female
                                    </span> ${getPokemonsSpecies(data.id, ' ', 'female')}
                                </td>
                            </tr>
                            <tr>
                                <td class="item">Egg Groups</td>
                                <td class="description">${getPokemonsSpecies(data.id,   'egg_groups')}</td>
                            </tr>
                    </table>
                </div>
            </div>
            `
     
}