const pokeApi = {
    pokeList: 'https://pokeapi.co/api/v2/pokemon?limit=493', /*493 */
    pokeListObj: {
        results: []
    },
    pokeObj: {
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
    }
}

export { pokeApi };