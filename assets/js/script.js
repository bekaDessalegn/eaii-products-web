const nav = document.querySelector('#header')
fetch('header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

const footer = document.querySelector('.footer')
fetch('footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})