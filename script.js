const galeria = document.querySelector(".galeria-imagens");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const btnFechar = document.querySelector(".fechar");

//codigo para maximizar as imagens

 galeria.addEventListener("click", (e) => {      //event para quando clickar dentro da galeria 
    if (e.target.tagName === "IMG") {            //SE target do event tiver tag === IMG
        modal.style.display = "flex";                //modal usa o flex 
        const imgSource = e.target.getAttribute("src"); //target do event (click) vai buscar o source da imagem e da a const
        modalImg.src = imgSource; //atribui a source dada a const ao modal
    }
});

modal.addEventListener("click", (e) => { //funcao para fechar o modal ao clickar
    modal.style.display = "none";
});

btnFechar.addEventListener("click", (e) => {
    modal.style.display = "none";
});

modalImg.addEventListener("click", (e) => {
    e.stopPropagation();
});



