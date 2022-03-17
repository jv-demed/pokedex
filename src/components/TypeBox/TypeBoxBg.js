function typeBoxBg(type){
    switch(type){
        case 'Bug': return ({ theme }) => theme.types.bug;
        case 'Dark': return ({ theme }) => theme.types.dark;
        case 'Dragon': return ({ theme }) => theme.types.dragon;
        case 'Electric': return ({ theme }) => theme.types.electric;
        case 'Fairy': return ({ theme }) => theme.types.fairy;
        case 'Fighting': return ({ theme }) => theme.types.fighting;
        case 'Fire': return ({ theme }) => theme.types.fire;
        case 'Flying': return ({ theme }) => theme.types.flying;
        case 'Ghost': return ({ theme }) => theme.types.ghost;
        case 'Grass': return ({ theme }) => theme.types.grass;
        case 'Ground': return ({ theme }) => theme.types.ground;
        case 'Ice': return ({ theme }) => theme.types.ice;
        case 'Normal': return ({ theme }) => theme.types.normal;
        case 'Poison': return ({ theme }) => theme.types.poison;
        case 'Psychic': return ({ theme }) => theme.types.psychic;
        case 'Rock': return ({ theme }) => theme.types.rock;
        case 'Steel': return ({ theme }) => theme.types.steel;
        case 'Water': return ({ theme }) => theme.types.water;
    }
}

function typeBoxColor(type){
    if(type == 'Bug' || type == 'Dark' || type == 'Dragon' 
    || type == 'Fire' || type == 'Fighting' || type == 'Ghost' 
    || type == 'Ground' || type == 'Poison' || type == 'Psychic' 
    || type == 'Rock' || type == 'Water'){
        return true
    }
}

export { typeBoxBg, typeBoxColor };