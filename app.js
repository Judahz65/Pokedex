// setTimeout(()=>{alert("Mom I am programming 🎉")}, 2000) ;


document.addEventListener('DOMContentLoaded',()=>{
    const random=idPoke(1, 151)
    fetchData(random);
})

function idPoke(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


const fetchData = async (id)=>{
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data= await res.json()
        pintarCard(data)
    } catch(error){
        console.log(error);
    }
}

function pintarCard(pokemon){
    console.log(pokemon);
    const principal= document.getElementById('ppal')
    const template= document.getElementById('templateCard')
    const clone= template.cloneNode(true)
    const fragment= document.createDocumentFragment()

    clone.querySelector('.cardImg').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    clone.querySelector('.cardTitle').innerHTML= `${pokemon.name} <span>#${pokemon.id}</span>`
    clone.querySelector('#bExp').textContent = pokemon.stats[0].base_stat
    clone.querySelector('.cardText').textContent= pokemon.types[0].type.name
    clone.querySelector('#peso').textContent = pokemon.weight + ' Kg'
    clone.querySelector('#attack').textContent = pokemon.stats[1].base_stat

    fragment.appendChild(clone)
    principal.appendChild(fragment)

    var tipo= clone.querySelector('.cardText').textContent= pokemon.types[0].type.name
    console.log(tipo);
    if(tipo== 'water'){
        console.log('Sos el mas teso');
    }
}
