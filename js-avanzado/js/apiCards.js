let cards = document.querySelector("#cardsConteiner");
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(resp => resp.json())
    .then(data => {
        col = document.crea
        data.forEach(element => {
            let col = document.createElement("div");
            col.classList.add("col-md-4");
            col.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${element.url}" class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                </div>
            </div>`
            cards.appendChild(col);
        });
    });