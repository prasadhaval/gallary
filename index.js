let cl = console.log;

const form = document.getElementById('form')
const openBtn = document.getElementById('open')
const backdroup = document.getElementById('backdroup')
const formContainer = document.getElementById('form-container')
const name = document.getElementById('name')
const img = document.getElementById('img')
const reating = document.getElementById('reating')
const submit = document.getElementById('submit')
const row = document.querySelector('.row')
const cancelBtn = [...document.querySelectorAll('.cancelBTn')]

let database = []

function templating(array) {
    let result=``
    array.forEach((ele)=>{
        result+=`
        <div class="col-4" id="col">
                <div class="card">
                    <div class="card-body">
                        <img src="${ele.img}" alt="">
                        <h4>${ele.name}</h4>
                        <span> Reating / ${ele.reating}</span>
                    </div>
                </div>
            </div>
        `
    })
    row.innerHTML = result
}

const toggleFun = () => {
    backdroup.classList.toggle('d-none')
    formContainer.classList.toggle('d-none')
}


cancelBtn.forEach((ele) => {
    ele.addEventListener('click', toggleFun)
})

const submitForm = (e) => {
    e.preventDefault()
    let obj = {
        name: name.value,
        img: img.value,
        reating: reating.value
    }
    database.push(obj)
    templating(database)
    toggleFun()
}

openBtn.addEventListener('click', toggleFun)
backdroup.addEventListener('click', toggleFun)
form.addEventListener('submit', submitForm)
