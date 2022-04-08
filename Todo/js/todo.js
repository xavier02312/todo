/**
 * TODO LIST
 */

/**
 * Notes :
 * ---
 * Un élément ajouté à la liste devra systématiquement posséder ce code HTML :
 * 
 * 
 * 
 *//*Etape #1*/
//*Ecouter l' envoi du formulaire
//
//*Insérer cette valeur dans le tableau "todos"
//*Bonus : Remettre le champs du formulaire à "zéro"
/**
 * Etape #2
 * Crée un fichier "fonction.js"
 * crée une fonction permettant d'afficher les éléments du
 * tableau dans la "ul" du fichier HTML en respectant le code
 * HTML fourni plus haut
 */
/**Etape #3
 * Appeler la fonction précédente dans l'évènement du formulaire
 * après
 */

// Contiendra les éléments de notre liste à cocher
let todos = [];

// Récupère le formulaire
const form = document.querySelector("form");

// Ajoute un écouteur d'évènement sur le formulaire
form.addEventListener("submit", (event) => {
    // Annule rechargement de page provoqué par le formulaire
    event.preventDefault();
    
    // Récupère le champs texte
    const input = document.querySelector("#element");

    // Ajoute la valeur en fin de tableau
    todos.push(input.value);

    // Vide le champs texte
    input.value = "";

    //console.log(todos);
    viewTodo(todos);
    
});















