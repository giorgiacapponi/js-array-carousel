// aggiungere img dinamicamente quindi
// creare array img 
// estrai img da array 
// aggiungi img in html nell item

const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const sliderContainer = document.querySelector('.slider');

for (let i = 0; i < imgArray.length; i++) {
    const img = imgArray[i];
    const elementSlider = ` <div class="item">
                            <img src="${img}" alt="">
                            </div>`

    sliderContainer.innerHTML += elementSlider;

}

// devo mettere prima img visibile
// mi servono elementi class item di html per modificare le classi

const itemsClass = document.getElementsByClassName('item');
console.log(itemsClass);
let indexItem=0;
itemsClass[indexItem].classList.add("active")
console.log(itemsClass[indexItem]);

// al click su up-arrow devo togliere l img precedente e mettere la successiva
// rimuovo
// incremento
// aggiungo
const next = document.getElementById('up-arrow');
next.addEventListener('click', function () {
    // parto da indice 0
 if (indexItem < ((itemsClass.length)-1)){
    itemsClass[indexItem].classList.remove("active");
    indexItem++;
    itemsClass[indexItem].classList.add("active");
    }else{
        itemsClass[indexItem].classList.remove("active");
       indexItem=0;
       itemsClass[indexItem].classList.add("active")
      }
   
})


// uguale su down-arrow
const prev = document.getElementById('down-arrow');
prev.addEventListener('click', function () {

    if(indexItem>0){
    itemsClass[indexItem].classList.remove("active");
    indexItem--;
    itemsClass[indexItem].classList.add("active");

    }else{
        itemsClass[indexItem].classList.remove("active");
        indexItem=itemsClass.length-1
        itemsClass[indexItem].classList.add("active");

    }
    
    
 
})



