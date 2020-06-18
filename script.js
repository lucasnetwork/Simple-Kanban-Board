const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card=>{
    card.addEventListener('dragstart',dragstart)
    card.addEventListener('drag',drag)
    card.addEventListener('dragend',dragend)
})

function dragstart(){
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
    
    this.classList.add('is-dragging')
    
    // console.log('Card:start dragging')
}

function drag(){
    // console.log('Card is dragging')
}

function dragend(){
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
    // console.log('Card:end dragging')
}
/*place where we will drop cards*/

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter',dragenter)
    dropzone.addEventListener('dragover',dragover)
    dropzone.addEventListener('dragleave',dragleave)
    dropzone.addEventListener('drop',drop)
})

function dragleave(){
    this.classList.remove('over')
//  console.log("dropzone: leave drag")
}

function dragenter(){

//  console.log("dropzone: enter drag")
}

function dragover(){
    //this = dropzone
    this.classList.add('over')

    //get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
//  console.log("dropzone: over drag")
}

function drop(){
    this.classList.remove('over')
//  console.log("dropzone: drop zone")
}