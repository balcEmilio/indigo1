


// let btnRecargaCSS = document.getElementById("recargaCSS");
// btnRecargaCSS.addEventListener("click", fRecargarCSS);

function fRecargarCSS(){
    const link = document.getElementById("estilos");
  link.href = "estilo.css?v=" + new Date().getTime();
}


// let btnCargarJSON = document.getElementById("cargarJSON");
// btnCargarJSON.addEventListener("click", cargarJSON);


//Para cargar la infromacion a la ventana grande:

let productos=[];


function encontrarObjetivoCard() {
    
let cards = document.querySelectorAll(".miniCardProducto");

let idAux;

let carouselContenedor = document.getElementById("carouselContenedor")


cards.forEach(card => {

    card.addEventListener("click", () => {

        // console.log("Click en card");
        // console.log(card.id);
        // idAux = parseInt(card.id);
        // console.log(idAux);
        // console.log(typeof(idAux));


            let idProducto = Number(card.id);

            let producto = productos.find(
                p => p.id === idProducto
            );

            console.log(idProducto);
   
        cargarCardGrande(producto);

    });

});


 
}




async function cargarCardGrande(producto){
       
       
       try {
           
           let carouselContenedor = document.getElementById("carouselContenedor");
           let br = document.createElement("br");

   carouselContenedor.innerHTML="";
   let carouselIndcators = document.getElementById("carouselIndcators");
   carouselIndcators.innerHTML="";
        let contador=0;

        let tituloGrande = document.getElementById("tituloGrande");
        tituloGrande.innerHTML = producto.titulo;

        let descripcionGrande = document.getElementById("descripcionGrande");

    
        descripcionGrande.innerHTML =`
    
                                    ${producto.descripcion}
                                    <br>
                                    <strong>Precio: $${producto.precio}</strong>
                                    `;
    
         producto.imagenes.forEach(element => {

        
           
                     let carouselItem = document.createElement("div");
                    carouselItem.classList.add("carousel-item");
                    if(contador==0){
                    carouselItem.classList.add("active");
                        
                    }

                    let imgCarousel = document.createElement("img");
                    imgCarousel.setAttribute("src", element);
                    // imgCarousel.classList.add("w-100");
                    imgCarousel.classList.add("img-fluid");
                    imgCarousel.classList.add("d-block");
imgCarousel.classList.add("mx-auto");

                    carouselItem.appendChild(imgCarousel);
                    carouselContenedor.appendChild(carouselItem);

                    let botonSlide = document.createElement("button");
                    botonSlide.setAttribute("type","button");
                    botonSlide.setAttribute("data-bs-target","#carouselExampleIndicators");
                    botonSlide.setAttribute("data-bs-slide-to",contador);
                    botonSlide.setAttribute("aria-label",`Slide ${contador+1}`);
                                
                    if(contador==0){
                       
                         botonSlide.classList.add("active");
                         botonSlide.setAttribute("aria-current","true");
                         botonSlide.setAttribute("aria-label",`Slide 1`);
                    
                         
                    }
                //    console.log(contador);
                    carouselIndcators.appendChild(botonSlide);
                    contador++;
          
            
            
         });
    } catch (error) {
        console.error(error);
    }


}







//para llenar las minicard



async function cargarJSON() {
  try {
    const response = await fetch("./productos2026.json");
    const data = await response.json();

   // console.log(data);
    let contenedorCards = document.getElementById("contenidoVistaChica");

    data.productos.forEach(element => {
     //   console.log(element);

        let divMiniCard = document.createElement("div");
        divMiniCard.classList.add("container");
        divMiniCard.classList.add("col-sm-6");
        divMiniCard.classList.add("col-md-6");
        divMiniCard.classList.add("col-lg-4");
        divMiniCard.classList.add("col-xl-4");
        divMiniCard.classList.add("miniCardProducto");
        divMiniCard.setAttribute("id",element.id);
     
        let divMiniCardProductoImg = document.createElement("div");
        divMiniCardProductoImg.classList.add("miniCardProductoImg");
        divMiniCardProductoImg.classList.add("col");
        


        let divMiniCardProductoDescripcion = document.createElement("div");
        divMiniCardProductoDescripcion.classList.add("miniCardProductoDescripcion");
        divMiniCardProductoDescripcion.classList.add("col");


         let etiquetaImg = document.createElement("img");
        let h5 = document.createElement("h5");
        h5.classList.add("titulo");


        let pDescripcion = document.createElement("p");
        pDescripcion.setAttribute("id","pDescripcionChica");
      //  pDescripcion.classList.add("descripcion");


        let pCategorias = document.createElement("p");
        pCategorias.setAttribute("id","pCategorias");
     
         etiquetaImg.setAttribute("src", element.imagen1);
etiquetaImg.classList.add("d-block");
        etiquetaImg.classList.add("img-fluid");
        etiquetaImg.classList.add("mx-auto");

    divMiniCardProductoImg.appendChild(etiquetaImg);

    
        
        h5.innerHTML = element.titulo;

        pDescripcion.innerHTML = element.descripcion;

        element.categorias.forEach(element => {
            pCategorias.textContent += element + " ";
        });


        
        divMiniCardProductoDescripcion.appendChild(h5);
        // divMiniCardProductoDescripcion.appendChild(pDescripcion);
      //  divMiniCardProductoDescripcion.appendChild(pCategorias);


        divMiniCard.appendChild(divMiniCardProductoImg);
        divMiniCard.appendChild(divMiniCardProductoDescripcion);
        
        contenedorCards.appendChild(divMiniCard);

    });



    productos = data.productos;
  encontrarObjetivoCard();

  } catch (error) {
    console.error(error);
  }
}


document.addEventListener("click", (e) => {
    console.log(e.target);


});





//funcion inicial
async function init() {
  
  await cargarJSON();
 

  

}

init();


