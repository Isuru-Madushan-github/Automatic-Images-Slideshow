const slides=document.querySelectorAll('.slide');
let index=0;
showSlides();

function showSlides(){
    for(let a=0; a<slides.length; a++){
        slides[a].style.display="none";
    }
    index++;
    if(index>slides.length){
        index=1;
    }

    slides[index-1].style.display="block";
    setTimeout(showSlides,2000);
}
