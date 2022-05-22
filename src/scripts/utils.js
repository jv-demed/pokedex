export function countPokeList(list, txt){
    return list.filter((poke) => poke.name.includes(txt.toLowerCase())).length;
}

export function firstUpperCase(str){
    return !str ? '' : str[0].toUpperCase() + str.substr(1);
}