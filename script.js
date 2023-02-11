let nav = document.querySelector('nav ul');

document.addEventListener('click',(e)=> {
    if (e.target.className == 'burger') {
        nav.classList.add('active');
        document.body.classList.add('dark')
    }
    else {
        nav.classList.remove('active')
        document.body.classList.remove('dark')

    }
})

/*####################*/

let featureImg = document.querySelector('.Features img');
let text = document.querySelectorAll('.Features .text');
let featureNav = document.querySelectorAll('.Features ul li') ;



featureNav.forEach((e,index)=>{

    e.addEventListener('click',(target)=> {
        featureNav.forEach((e)=> {
            e.classList.remove('active')
        })
        text.forEach((e)=> {
            e.classList.remove('active')
        })
        e.classList.add('active')
        text[index].classList.add('active')
        featureImg.src=target.target.dataset.src;
    })

})


let qst = document.querySelectorAll('.Frequently .text');
let hidden = document.querySelectorAll('.Frequently .hidden-text');
let arrow = document.querySelectorAll('.Frequently img')

qst.forEach((e,index)=> {

    
    
    e.addEventListener('click',()=>  {
        hidden[index].classList.toggle('active')
        arrow[index].classList.toggle('active')
    })
})