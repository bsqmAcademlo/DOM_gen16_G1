{
    // const title = document.querySelector("h1");
    // const clase = document.querySelector(".show");
    // const id = document.querySelector("#box");
    // const obj = { titulo: title, una_clase: clase, "un id": id };
    // console.log(obj);
}

{
    // const allH2 = document.querySelectorAll(".content_h2 > h2");
    // for (let i = 0; i < allH2.length; i++) {
    //     const element = allH2[i];
    //     console.log(element);
    // }
}

{
    // const h1Name = document.querySelector("#name");
    // let name = "";
    // while (true) {
    //     name = prompt("ingresa tu nombre");
    //     console.log(name);
    //     if (name) {
    //         break;
    //     }
    // }
    // h1Name.textContent = name;
}

{
    // innerHMTL => insertar html
    // textContent => texto
    // const contenido = document.getElementById("contenido");
    // contenido.innerHTML = "<p>Hola mundo</p>";
}

{
    //     console.log(sinDeclarar);
    // console.log(window.sinDeclarar);
}

{
    // window.addEventListener("click", function (element) {
    //     console.log((element.target.textContent = "gato"));
    // });
}

{
    // console.log(padre.firstElementChild);
    // console.log(padre.lastElementChild);
    // console.log(padre.children.length);
    // console.log(li);
    // console.log(li.previousElementSibling);
    // console.log(li.nextElementSibling);
    // console.log(li.parentElement);
    // console.log(ul_padre.parentElement);
}

{
    // const id_img = document.getElementById("id_img");
    // id_img.attributes.src.value =
    //     "https://www.cinemascomics.com/wp-content/uploads/2020/08/goku-dragon-ball-super-ultra-instinto.jpg";
    // id_img.attributes.alt.value = "imagen goku";
    // // id_img.removeAttribute("src");
    // console.log(id_img.hasAttribute("src"));
    // console.log(id_img.hasAttribute("srcaaa"));
}

{
    // const buttons = content_button.children;
    // for (let i = 0; i < buttons.length; i++) {
    //     console.log(buttons[i].textContent.split(" ")[1]);
    //     console.log(buttons[i].dataset.value);
    // }
}

{
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    // printButtons(numbers);
    // const pares = document.getElementById("pares");
    // pares.addEventListener("click", function () {
    //     const arrayAux = [];
    //     for (let i = 0; i < numbers.length; i++) {
    //         const element = numbers[i];
    //         if (element % 2 === 1) {
    //             arrayAux.push(element);
    //         }
    //     }
    //     printButtons(arrayAux);
    // });
    // function printButtons(array) {
    //     let html = "";
    //     for (let i = 0; i < array.length; i++) {
    //         const element = array[i];
    //         html += `<button class='btn'>${element}</button>`;
    //     }
    //     content_button_dinamic.innerHTML = html;
    // }
}

{
    // const caja = document.querySelector(".caja");
    // btn.addEventListener("click", function () {
    //     console.log(caja.style["background-color"] === "rgb(0, 0, 0)");
    //     if (caja.classList.contains("verde")) {
    //         caja.style.backgroundColor = "#000";
    //         caja.style.height = "50px";
    //         caja.style.width = "50px";
    //         caja.classList.remove("verde");
    //     } else {
    //         caja.style.backgroundColor = "#ff0000";
    //         caja.style.height = "100px";
    //         caja.style.width = "100px";
    //         caja.classList.add("verde");
    //     }
    // });
}

{
    // const caja = document.querySelector(".caja");
    // const parrafo = document.querySelector(".caja > p");
    // btn.addEventListener("click", function () {
    //     caja.classList.toggle("caja_color")
    //         ? (parrafo.textContent = "Negro")
    //         : (parrafo.textContent = "Rojo");
    //     // if (caja.classList.toggle("caja_color")) {
    //     //     parrafo.textContent = "Negro";
    //     // } else {
    //     //     parrafo.textContent = "Rojo";
    //     // }
    // });
}

{
    // const user = [
    //     {
    //         name: "Brayan stiven munoz quiroz",
    //         age: "22 años",
    //         hobbies: [
    //             "Jugar futbol",
    //             "Salir a comer",
    //             "Trotar",
    //             "Aprender",
    //             "Programar",
    //         ],
    //         question: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, quis quas laborum consequuntur corrupti
    //             accusamus vel nihil iusto tempora quos, fugiat harum omnis. Eligendi molestiae minima inventore
    //             aspernatur
    //             illum quibusdam.`,
    //     },
    //     {
    //         name: "Eleazar Geneste",
    //         age: 34,
    //         hobbies: ["Programar", "Praticar con familia y amigos"],
    //         question:
    //             "Me gusta crear , imaginar, al aprender a programar es una forma de aterizar mis ideas.",
    //     },
    //     {
    //         name: "Francis Martinez",
    //         age: 32,
    //         hobbies: ["Teatro", "Programar", "Leer"],
    //         question: "Quiero tener un empleo que me permita hacer magia,",
    //     },
    //     {
    //         name: "Oscar Nicolas Stella",
    //         age: 56,
    //         hobbies: [
    //             "escuchar musica",
    //             "informatica",
    //             "caminar",
    //             "ver peliculas",
    //         ],
    //         question: "Por que siempre me han gustado las computadoras",
    //     },
    // ];
    // const container = document.querySelector(".container");
    // let html = `<h1>${user[0].name}</h1>
    //     <h3>Edad: ${user[0].age}</h3>
    //     <h3>Mis hobbies</h3>
    //     <ul>
    //         ${printHobbbies(user[0].hobbies)}
    //     </ul>
    //     <h3>Por que quiero ser programador</h3>
    //     <div>
    //         <p>${user[0].question}</p>
    //     </div>`;
    // function printHobbbies(array) {
    //     let html = "";
    //     for (let i = 0; i < array.length; i++) {
    //         const element = array[i];
    //         html += `<li>${element}</li>`;
    //     }
    //     return html;
    // }
    // container.innerHTML = html;
}
