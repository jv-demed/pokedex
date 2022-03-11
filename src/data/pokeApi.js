const pokeApi = {
    pokeList: 'https://pokeapi.co/api/v2/pokemon?limit=151',
    pokeListObj: {
        results: []
    },
    pokeObj: {
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