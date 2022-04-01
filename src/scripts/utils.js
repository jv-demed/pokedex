function countPokeList(list, txt){
    //console.log(list);
    return list.filter((poke) => poke.name.includes(txt.toLowerCase())).length;
}

function firstUpperCase(str){
    return str[0].toUpperCase() + str.substr(1);
}

export {countPokeList, firstUpperCase}