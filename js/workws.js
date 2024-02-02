// let elems = document.body.children
// for (let elem of elems){
//     console.log(elem)
// }

// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.lastElementChild.previousElementSibling)
// console.log(document.body.lastElementChild.parentElement)

// let elem = document.getElementById('num')
// elem.style.color = 'red';
// console.log(elem)

// let elems = document.querySelectorAll('.item')
// for (let elem of elems) {
//     console.log(elem)
// }

// let elem2 = document.querySelector('.list')
// elem2.firstElementChild.style.color = 'blue'
// console.log(elem2.firstElementChild)

// let elem = document.querySelector('.list')
// let item = elem.querySelector('.item4')
// console.log(item)

// let elem = document.getElementById('num')
// console.log(elem.closest('.item4'))

// let elem = document.getElementsByClassName('list')
// console.log(elem)

// let elem = document.getElementById('num')
// elem.style.color = 'red';
// elem.innerHTML = '<h1>Numbers</h1>';
// console.log(elem.innerHTML)

// let item = document.querySelector('.item4')
// item.outerHTML = '<h4>New text</h4>'
// console.log(item)

// console.log(document.body.firstChild.data)
// item.innerHTML = document.body.firstChild.data;

// let item = document.querySelector('.item4')
// item.textContent = '<h2>My text</h2>'

// let elem = document.querySelector('p')
// setTimeout(() => elem.hidden = false, 1500);

// elem.remove()
// document.querySelector('ul').insertAdjacentHTML('beforeend',
// `
//     <div class="alert">
//         <strong>Hello</strong> I love JavaScript
//     </div>
// `
// )
// let item = document.querySelector('ul').cloneNode(true);
// // console.log(item)
// item.style.background = 'yellow'
// document.querySelector('h1').after(item)

// let elem = document.querySelector('p').nextElementSibling
// elem.style.cssText = `padding: 15px;
//                             border: 1px solid #d6e9c6;
//                             border-radius: 4px;
//                             color: #3c4c2f;
//                             background-color: #e5eedd;
//                             `
// let elem2 = document.querySelector('.alert')
// console.log(elem2.className)
// setInterval(() => {
//     elem2.classList.toggle('new');
//     elem2.innerHTML = 'I love Python'
// }, 2000)

// elem2.classList.remove('.alert')
// let size = getComputedStyle(elem2, '::before').fontsize

// console.log(parseInt(size))
// size = parseInt(size)
// elem2.style.marginTop = size*3

// let link = document.querySelector('.link');
// let input = document.querySelector('.input');

// console.log(link.href)
// link.value = 'Vasya'
// console.log(input.value)

// let elem = document.createElement('input');
// elem.setAttribute('class', 'alert')
// elem.setAttribute('placeholder', 'Age')
// elem.setAttribute('name', 'Age')
// document.querySelector('.alert').before(elem)
// console.log(elem)
// console.log(elem.hasAttribute('placeholder'))

let users = [
    {id: 1, name: 'Vasya', surname: 'Ivanov', grade: '5B'},
    {id: 2, name: 'Petya', surname: ' Ivanov', grade: '7B'},
    {id: 3, name: 'Sasha', surname: 'Petrov', grade: '5B'},
    {id: 4, name: 'Sogdiyar', surname: 'Pupkin', grade: 'detskie sad'},
    {id: 5, name: 'Ilya', surname: 'Hohryakov', grade: '1kurs'},]

let win = [1,3]
let elem = document.querySelector('.list')
for (let user of users){
    elem.insertAdjacentHTML('beforeend',
    `
        <div class="card" id="${user.id}" onclick="check_card(${user.id})">
            <h4 class="name">${user.name}</h4>
            <p class="surname">${user.surname}</h4>
            <p class="grade">${user.grade}</p>
        </div>
    `
    )
}

function check_card(id){

        if (win.includes(id)){
            alert('You Win!')
        } else {
            alert('You lose!')
        }
}

function hello(id){
    document.getElementById(id).hidden = true
    // alert('Hello', users[i].name)
}

