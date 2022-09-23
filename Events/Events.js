// События


function clickMe(event) {
    // event.preventDefault();  предотвращает оригинальное действие элемента
    event.stopPropagation(); // запрещает распростанения нажатия кнопки родителям
    console.log(event);
}

const button = document.getElementById('index');
// button.onclick = function() {
//     clickMe();
// }

button.addEventListener("click", clickMe);

// Element.removeEventListener();  удаляет событие


//Всплытие

