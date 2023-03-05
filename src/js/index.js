const pokemonsAEscolher = document.querySelectorAll('.pokemon')

//pokemons
const pikachu = document.getElementById("pikachu")
const bulbasaur = document.getElementById("bulbasaur")
const charmander = document.getElementById("charmander")
const gyarados = document.getElementById("gyarados")
const gengar = document.getElementById("gengar")
const dragonite = document.getElementById("dragonite")



pikachu.addEventListener("click", () =>{
    ocultarPokemon()
    const pikachu = document.querySelector(".tipo-eletrico") 
    pikachu.classList.add("aberto")
})

bulbasaur.addEventListener("click", () =>{
    ocultarPokemon()
    const bulba = document.querySelector(".tipo-grama") 
    bulba.classList.add("aberto")
})

charmander.addEventListener("click", () =>{
    ocultarPokemon()
    const charmander = document.querySelector(".tipo-fogo")
    charmander.classList.add("aberto")
})

gyarados.addEventListener("click", () =>{
    ocultarPokemon()
    const gyarados = document.querySelector(".tipo-agua")
    gyarados.classList.add("aberto")
})

gengar.addEventListener("click", () =>{
    ocultarPokemon()
    const gengar = document.querySelector(".tipo-trevas")
    gengar.classList.add("aberto")
})

dragonite.addEventListener("click", () =>{
    ocultarPokemon()
    const dragonite = document.querySelector(".tipo-dragao")
    dragonite.classList.add("aberto")
})

function ocultarPokemon(){
    const pokemonSelected = document.querySelector(".aberto")
    pokemonSelected.classList.remove("aberto")
}

pokemonsAEscolher.forEach(function(pokemons){
    pokemons.addEventListener("click", function(){
        const trocarPokemon = document.querySelector(".ativo")
        trocarPokemon.classList.remove("ativo")

        pokemons.classList.add("ativo")

        
    })
})  
