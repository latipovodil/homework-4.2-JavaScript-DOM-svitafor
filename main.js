let elSpan1 = document.querySelector(".span1")
let elSpan2 = document.querySelector(".span2")
let elSpan3 = document.querySelector(".span3")
let odam2 = document.querySelector(".odam2")


let green = 'rgb(0, 128, 0 , 0.096)'
let yellow = 'rgb(255, 255, 0, 0.096)'
let red = 'rgb(255, 0, 0, 0.096)'

let i = 1;

setInterval(() => {
  elSpan1.style.backgroundColor = 'green';
  elSpan3.style.backgroundColor = red 
  odam2.style.backgroundColor = 'red'
}, 2000)

setInterval(() => {
  elSpan2.style.backgroundColor = 'yellow'
}, 2500)
setInterval(() => {
  elSpan2.style.backgroundColor = yellow
}, 3500)

setInterval(() => {
  elSpan1.style.backgroundColor = green
  elSpan3.style.backgroundColor = 'red' 
  odam2.style.backgroundColor = 'green'
}, 4000)







