
let carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelector(".tmg");
const arrows = document.querySelectorAll(".arrows i");
let isdragstart = false, prevpageX, prevscrollLeft;
    
 let imgWidth = firstImg.clientWidth + 15;
   
 let scrollwidt = carousel.scrollWidth - carousel.clientWidth;
 
    function opacityIncR(){
        if(Math.floor(carousel.scrollLeft) == scrollwidt){
            arrows[1].style.opacity = "0.8";
            console.log("yes, it is working");
        }else{
            arrows[1].style.opacity = "1";
        }
    }
    function opacityIncL() {
        if(carousel.scrollLeft === 0){
            arrows[0].style.opacity = "0.8";
        }else{
            arrows[0].style.opacity = "1";
        }
        
       
    };
 console.log(imgWidth);
arrows.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id=="left"?-imgWidth:imgWidth;
        setTimeout(() => opacityIncL(), 60);
        setTimeout(() => opacityIncR(), 60);
    } )
});

const dragstart = (e) => {
    isdragstart = true;
    prevpageX = e.pageX;
    prevscrollLeft = carousel.scrollLeft;
} 
const dragstop = () => {
    isdragstart = false;
    carousel.classList.remove("dragging");
    }
const dragging = (e) => {
    if (!isdragstart) return;
    let podiff = e.pageX - prevpageX;
   carousel.scrollLeft = prevscrollLeft - podiff;
      carousel.classList.add("dragging");
   e.preventDefault();
   console.log(Math.floor(carousel.scrollLeft));
   console.log(scrollwidt);

};



carousel.addEventListener("mousedown", dragstart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragstop);
