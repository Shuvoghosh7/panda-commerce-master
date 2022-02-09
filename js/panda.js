// change color h1 tag
const products = document.getElementsByClassName('product');
for(const product of products){
    product.style.color=' lightblue ';
}
// change bagpack background color
const changeBcolor = document.getElementById('bagpack');
changeBcolor.style.backgroundColor='tomato';
// change card broder 30px
const cardBorder = document.getElementsByClassName('card');
for(const cardB of cardBorder){
    cardB.style.borderRadius = "30px";
}
//function for click handler
function change(){
    document.body.style.backgroundColor='green';
    console.log('Change color when click button')
}

// click by now button and remove 
const pbutton = document.getElementsByClassName('panda-button');
for(const button of pbutton){
    button.addEventListener('click',function(event){
        event.target.parentNode.removeChild(event.target)
    })
}
// disabled submit button and when write email then show
document.getElementById('inputText').addEventListener('keyup',function(event){
    const show = document.getElementById('disabled')
    if(event.target.value == 'email'){
        show.removeAttribute('disabled')
    }else{
        show.setAttribute('disabled',true)
    }
})

// chenge color when dobule click in mouse

const changeColor = document.getElementById('Subscrib');
changeColor.addEventListener('dblclick',function(){
    changeColor.style.backgroundColor='tomato';
})

// change picture when mouseenter and call function
function changepicture(){
    document.getElementById('changeP').src = "images/shoes/shoe-3.png"
}
//another way change picture without call function
const changePicture = document.getElementById('changeP')
changePicture = document.addEventListener('onmouseover',function(){
    changePicture.src = "images/shoes/shoe-3.png";
})
