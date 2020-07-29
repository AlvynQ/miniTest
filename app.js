

let textAera = "";
let selectOperation = "";

//detecte un clique sur le bouton qui a comme id btPunch
//et ensuite lance la fonction
    btPunch.addEventListener("click", appuiBoutonPunch);



// quand on appuis sur le bouton on arrive ici 
function appuiBoutonPunch(){
    console.log("l'appui a bi etait fait et la fonctio appuiBoutonPunch a bien etait appelé");
    //on cible les element sur lequel on va agir.

    //je cible le plus et moins grace a sont id qui et operation.
    selectOperation = document.getElementById("operation").value;

    //je cible ou je vais ecrire le texte par ont id qui et intitule.
    textAera = document.getElementById("intitule").value;



    //si j'ai mis plus  (on met "+"avec les guillemet comme c'est un text).
    if (selectOperation === "+"){
        //alors je vais dans la fontion plus 
        //(pour aller dans une autre fontion ont met le nom e la fonction avec des parenthèse a la fin exemple plus(); ).
        console.log("plus a bien etait selectionner");
        plus();
    }

    else if (selectOperation === "-"){
        //alors je vais dans la fontion moins
        console.log("moins a bien etait selectionner");
        moins();
    }
}


function plus(){

         console.log("je suis bien rentré dans la fonction plus");

        //je cible l'endroit ou écrire le text dans un paragaphe grace a sont id ici l'id et siPlus
        //et a la fin je met innerhtml a la fin pour que ca modifie le texte 
        //je rajoute un = et le nom de la variable ou le texte (la valeur) et stocker
       

        document.getElementById("siPlus").innerHTML = textAera;

        //style.color sert a changer la couleur du texte ici on a ciblé le h2 avec l'id textColor
        document.getElementById("textColor").style.color = "Red";



}

function moins(){

        console.log("je suis bien rentré dans la fonction moins");
    
        // cible l'endroit pour mettre le texte moins et ajoute la variable qui stock la valeur du texte



        // changer la couleur du h2 qui a l'id textColor en vert

}