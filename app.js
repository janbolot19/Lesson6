const block = document.querySelector('.block');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let count = 1;
let currentDiv;



btnNext.onclick = () => {
    count++
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            const div = document.createElement('div');
            div.classList.add('block')

            div.setAttribute('class', 'card');;
            block.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
            `;
            if (currentDiv) {
                block.replaceChild(div, currentDiv);
            } else {
                block.append(div);
            }
            currentDiv = div;
        });
};

btnPrev.onclick = () => {
    if (count > 1) {
        count--;
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then(response => response.json())
            .then(data => {
                const div = document.createElement('div');
                div.setAttribute('class', 'card');
                block.innerHTML = `
                    <h2>${data.title}</h2>
                    <span>${data.id}</span>
                    <h3>${data.completed}</h3>
                `;
                if (currentDiv) {
                    block.replaceChild(div, currentDiv);
                } else {
                    block.append(div);
                }
                currentDiv = div;
            });
    }
};

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })








