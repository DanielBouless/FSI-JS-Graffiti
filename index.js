
// Select some elements...
let rotation = 0
let blurLvl = 0
let invertLvl = 0
let pageHeader = document.querySelector('#page-header')


pageHeader.style.textAlign = 'left'
pageHeader.style.backgroundColor = 'crimson'

let bgcolor = document.querySelector('body')
bgcolor.style.backgroundColor= 'gold'
let dogImages = document.querySelectorAll('.dog-image')

for(let i=0; i< dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
    let rotationMulti = i*90
    rotation = 'rotate'+'('+rotationMulti.toString()+'deg)'
    dogImages[i].style.transform = rotation
    let blurMulti = i*3
    blurLvl = 'blur'+'('+blurMulti.toString()+'px)'
    dogImages[i].style.filter = blurLvl
    let invertMulti = i*33
    invertLvl = 'invert'+'('+invertMulti.toString()+'%)'
    dogImages[i].style.filter = invertLvl
}


