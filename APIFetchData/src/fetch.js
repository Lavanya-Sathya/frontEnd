// fetch data
let gridElement = document.getElementById("grid")

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then((data) => {
        data.forEach((x) => {
            const ListElement = document.createElement("div");
            ListElement.innerHTML = `<div class="items">
                    <h4>Name: ${x.name}</h4>
                    <p><strong>Email: </strong> ${x.email}</p>
                    <p><strong>Comments: </strong>${x.body}</p>
                    </div>`
            gridElement.append(ListElement)
        })

    })
    .catch((err) => console.log(err));