//Scroll .small-preview
//If image at centered from .samll-preview
//This image will add priperty transform scale()

let smallPreview = document.querySelector('.small-preview');
let smallCards = document.querySelectorAll('.small-card');
// Function at .small-preview
zoomAtScrol(smallPreview, smallCards, .25, 'zoom');

//Function at .big-preview
let bigPreview = document.querySelector('.big-preview');
let bigCards = document.querySelectorAll('.big-card');
zoomAtScrol(bigPreview, bigCards, .6, 'big-zoom');

function zoomAtScrol(parent, childs, widthChild, add) {
  parent.addEventListener('scroll', function(ev) {
  
    let widthOfParent = Math.round(parent.getBoundingClientRect().width);
      
    let widthOfChild = widthOfParent * widthChild;
    
    childs.forEach(card => {
      let fromParent = Math.round(card.getBoundingClientRect().left);
        
      let isCenter = fromParent + widthOfChild / 2;
      let centerFromParent = widthOfParent / 2;
      let rangeZoom = centerFromParent + widthOfChild / 2;
      
      //console.log(` isCenter = ${isCenter} , centerFromParent = ${centerFromParent} rangeZoom = ${rangeZoom}`)
      if (isCenter >= centerFromParent && isCenter <= rangeZoom) {
        childs.forEach(item => item.classList.remove(add));
        card.classList.add(add);
      }
    })
  })
}

//event navbar
let navBoxs = document.querySelectorAll('.nav-box');

navBoxs.forEach( box => {
  box.addEventListener('click', function() {
    let classBox = this.classList;
    
    navBoxs.forEach( box => box.classList.remove('active'));
    this.classList.add('active');
  })
})

//Search bar
let searchBar = document.querySelector('.search-bar');
let input = document.querySelector('.search-bar input');

input.addEventListener('focus', () => {
  searchBar.style.boxShadow = '0 0 2px #FDA719'
})

document.addEventListener('click', function(el) {
  if ( !el.target.classList.contains('input') ){
    searchBar.style.boxShadow = 'none';
  }
})