console.log("hello world")

let form;

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded")

    form = document.getElementsByTagName('form')[0]
    console.log(form)

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        let hobbyType = document.getElementById('hobbyAuswahl').value;
        let inputValue = document.getElementById('neuesHobby').value;
        let list;
        switch (hobbyType) {
            case "Sport":
                list = document.getElementById('Sport');
                break;
            case "Alle Hobbies":
                list = document.getElementById('Alle Hobbies')
                break;
        }

        if (inputValue) {
            var li = document.createElement("li");
            li.innerText = inputValue
            list.appendChild(li);
            document.getElementById('neuesHobby').value = "";
        } else {
            alert("No Input given")
        }
    })
})
