let prix1=document.getElementById('prix-produit1')
let qtep1=document.getElementById('qteProduit1')
let G1=document.getElementById('galerie1')

let prix2=document.getElementById('prix-produit2')
let qtep2=document.getElementById('qteProduit2')
let G2=document.getElementById('galerie2')

let prix3=document.getElementById('prix-produit3')
let qtep3=document.getElementById('qteProduit3')
let G3=document.getElementById('galerie3')


let h1=document.getElementById('heart1')
let h2=document.getElementById('heart2')
let h3=document.getElementById('heart3')

let total=document.getElementById('total')

function heart1(){
  if(h1.style.color=='red'){
    h1.style.color='black'
  }
  else{
    h1.style.color='red'
  }
}
function heart2(){
    if(h2.style.color=='red'){
      h2.style.color='black'
    }
    else{
      h2.style.color='red'
    }
  }
  function heart3(){
    if(h3.style.color=='red'){
      h3.style.color='black'
    }
    else{
      h3.style.color='red'
    }
  }
function inc1(){
  qtep1.innerHTML=+qtep1.innerHTML+1
  prix1.innerHTML=+prix1.innerHTML+520;
  total.innerHTML=+total.innerHTML+520
}
function inc2(){
    qtep2.innerHTML=+qtep2.innerHTML+1
    prix2.innerHTML=+prix2.innerHTML+430;
    total.innerHTML=+total.innerHTML+430
}
function inc3(){
    qtep3.innerHTML=+qtep3.innerHTML+1
    prix3.innerHTML=+prix3.innerHTML+650;
    total.innerHTML=+total.innerHTML+650
}

function dec1(){
  if(qtep1.innerHTML==0){
    qtep1.innerHTML=qtep1.innerHTML
    total.innerHTML=+total.innerHTML
    prix1.innerHTML=prix1.innerHTML
  }
  else{  qtep1.innerHTML=+qtep1.innerHTML-1
    total.innerHTML=+total.innerHTML-520
    prix1.innerHTML=+prix1.innerHTML-520}

}
function dec2(){
    if(qtep2.innerHTML==0){
      qtep2.innerHTML=qtep2.innerHTML
      total.innerHTML=+total.innerHTML
      prix2.innerHTML=prix2.innerHTML
    }
    else{  qtep2.innerHTML=+qtep2.innerHTML-1
      total.innerHTML=+total.innerHTML-430
      prix2.innerHTML=+prix2.innerHTML-430}
  
  }
  function dec3(){
    if(qtep3.innerHTML==0){
      qtep3.innerHTML=qtep3.innerHTML
      total.innerHTML=+total.innerHTML
      prix3.innerHTML=prix3.innerHTML
    }
    else{  qtep3.innerHTML=+qtep3.innerHTML-1
      total.innerHTML=+total.innerHTML-650
      prix3.innerHTML=+prix3.innerHTML-650}
  
  }



function remove1(){
G1.style.display='none'
total.innerHTML=+total.innerHTML-prix1.innerHTML
}

function remove2(){
G2.style.display='none'
total.innerHTML=total.innerHTML-prix2.innerHTML
}

function remove3(){
G3.style.display='none'
total.innerHTML=total.innerHTML-prix3.innerHTML
}