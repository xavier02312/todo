/**
 * Fonction JS
 */

/**
 * Permet d' afficher les éléments dans notre liste
 */
const viewTodo = (todos) => {

    //Récupère la liste dans notre HTML
    const ul = document.querySelector("ul");

    //vide la liste avant de la remplir
    ul.innerText = "";

    //Boucle sur le tableau contenant les éléments de notre liste
    //--
    //item : la valeur de l'élément du tableau en cours
    //index : l'index de l'élément du tableau en cours
    todos.forEach((item, index) => {
        
        //création d'une "li"
        //<li class="list-group-item d-flex justify-content-between">An item</li>
        const li = document.createElement("li");

        li.classList.add("list-group-item", "d-flex", "justify-content-between");

        li.innerText = item;

        //Création d'un lien hypertext
        //<a href="#" class="deleteItem"></a>
        const a = document.createElement("a");
        a.id = `item-${index}`;
        a.href = "#";
        a.classList.add("deleteItem");

        //Création d'une "image"
        //<img src="imgs/trash.svg" alt="Delete item" class="icon-delete">
        const img = document.createElement("img");          
        img.setAttribute("src","imgs/trash.svg");           // ou img.src = "imgs/trash.svg"
        img.setAttribute("alt", "Delete item");             // ou img.alt="Delete item"
        img.classList.add("icon-delete");  
        
        //Inclure l'image dans le lien hypertext
        a.append(img);

        //Inclure le lien hypertext dans la "li"
        li.appendChild(a);

        //Ajoute la "li" en fin de liste
        ul.appendChild(li);
    });
    //Applique les écouteurs d'évènements sur les liens de suppression
    eventslink(todos);

    //Applique les écouteurs d'évènement sur les li
    strikeOutItem();
}
/**
 * Applique un écouteur d'évènement sur tous les lien de suppression
 */
const eventslink = (todos) => {

    //Récupère tous les boutons de suppression
const links = document.querySelectorAll(".deleteItem");

//Ajoute un écouteur d'évènement sur les boutons de suppression

links.forEach(link => {
    link.addEventListener("click",() => {
        removeItem(link.id, todos);
    });
});
}
/**
 * Supprimer un élément de la liste et du tableau
 *  
 */
const removeItem = (id, todos) => {
    

   //Extraire le numéro de la chaîne
const index = id.split("item-");
console.log(index[1]);

    //Supprimer un élément du tableau todos
    todos.splice(index[1], 1);

    //Rafraichit la liste 
    viewTodo(todos);
}

/**
 *  Permet de rayer un élément de la liste
 */
const strikeOutItem = () => {

    const item = document.querySelectorAll("li");
    item.forEach(item => {
        item.addEventListener("click", () => {
            item.style.textDecoration = "line-through";         //boucle à l'intèrieure pour effectuer une action
        });
    })
}