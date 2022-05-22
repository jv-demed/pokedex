export const pokeApi = {
    pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/',
    specieUrl: 'https://pokeapi.co/api/v2/pokemon-species/',
    pokeListObj: {
        results: []
    },
    pokemonObj: {
        name: '',
        types: {
            type: {
                type: {
                    name: ''
                }
            }
        },
        sprites: {
            other: {
                'official-artwork': {
                    front_default: ''
                }
            }
        }
    },
    specieObj: {
        flavor_text_entries: [{
            flavor_text: ''
        }]
    }
}

export default pokeApi;