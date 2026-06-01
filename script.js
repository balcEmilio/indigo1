document.addEventListener("click", (e) => {
    console.log(e.target);
});




let cards =
    document.querySelectorAll(".miniCardProducto");

console.log(cards);



cards.forEach(card => {

    card.addEventListener("click", () => {

        console.log("Click en card");


        // Obtener información de la card
    let imagen = card.querySelector("img").src;

    let titulo =
        card.querySelector(".titulo").textContent;

    let descripcion =
        card.querySelector(".descripcion").textContent;

    // Pasar info a la card grande
    document.getElementById("imgGrande").src =
        imagen;

    document.getElementById("tituloGrande").textContent =
        titulo;

    document.getElementById("descripcionGrande").textContent =
        descripcion;




    });

});











/*
let card = document.querySelector(".miniCardProducto");
let imgCard = document.querySelector(".miniCardProductoImg");
let descripcionCard = document.querySelector(".miniCardProductoDescripcion");


card.addEventListener("click", () => {

    // Obtener información de la card
    let imagen = imgCard.querySelector("img").src;

    let titulo =
        descripcionCard.querySelector(".titulo").textContent;

    let descripcion =
        descripcionCard.querySelector(".descripcion").textContent;

    // Pasar info a la card grande
    document.getElementById("imgGrande").src =
        imagen;

    document.getElementById("tituloGrande").textContent =
        titulo;

    document.getElementById("descripcionGrande").textContent =
        descripcion;

    console.log("click");

});

*/