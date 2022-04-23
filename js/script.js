const addCard1 = document.querySelector(".card-principal");
const addCatalogo = document.querySelector(".catalogo");
const btnBusca = document.querySelector("#btn-buscar")
const buscarInput = document.querySelector("#input-buscar")
const urlBase ="http://www.omdbapi.com/?apikey=3a308d66&";



const getMovie = async (movie = "Batman") => {
    const response = await fetch(`${urlBase}s=${movie}`);
    const data = await response.json();
    console.log(data);
    
    addCard1.innerHTML +=`
        <div class="add-card-principal"> 
            <div class="imagem-card-principal">
            <img id="imagem-card-principal"src="${data.Search[0].Poster}" atl="${movie.Title}"> 
            <img id="imagem-card-principal"src="${data.Search[1].Poster}" atl="${movie.Title}"> 
            </div>

            <div class="cat">
            
            
            <h1 class="titulo-card-principal"> Catalogo ${movie} </h1>
            <p>     Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Sapien in monti palavris qui num significa nadis i pareci latim.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.

            </p>
            <a><button class="btn-card-principal">Assista agora</button></a>
            </div>
        </div>
        `
        

        data.Search.map((item) => {
        addCatalogo.innerHTML +=
        `<div class="card-catalogo-adicionado">
                <div class="imagem-catalogo">
                <img src="${item.Poster}" atl="${item.Title}"> 
                </div>
                <div><h1 class="tiulo-catalogo">${item.Title}</h1>
                     <p> </p>
                     <a href="#">
                     <button type="" class="saiba-mais-catalogo">
                     Saiba Mais</button></a>
                </div>
            </div> `  
    });
       
};

getMovie();

const clearHTML = () => {
    addCard1.innerHTML=``;
    addCatalogo.innerHTML = ``;
}

btnBusca.addEventListener("click", (event) => {
    event.preventDefault();
    const buscar = buscarInput.value;

    clearHTML();
    
    console.log(buscar)
    getMovie(buscar);

});


// const clearHTML = () => {
//     addCard1.innerHTML = "";
//     console.log("limpou car1");
//     addCatalogo.innerHTML = "";
//     console.log("limpou catalogo");
// }

// const clearHTML = () => {
//     addCard1.innerHTML = `<div class="erro-card1"> Adicionar um filme de sua escolha!</div>`;
//     console.log("limpou car1");
//     addCatalogo.innerHTML = `<div class="erro-catalogo">Adicionar um filme de sua escolha!</div>`;
//     console.log("limpou catalogo");
// }

