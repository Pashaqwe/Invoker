"use strict";

const quas = document.querySelector('.centerContainer-buttons__quas');
const wex = document.querySelector('.centerContainer-buttons__wex');
const exort = document.querySelector('.centerContainer-buttons__exort');
const definingBlast = document.querySelector('.centerContainer-skills__definingBlast');
const ghostWalck = document.querySelector('.centerContainer-skills__ghostWalck');
const iceWall = document.querySelector('.centerContainer-skills__iceWall');
const emp = document.querySelector('.centerContainer-skills__emp');
const tornado = document.querySelector('.centerContainer-skills__tornado');
const alacrity = document.querySelector('.centerContainer-skills__alacrity');
const sunStrike = document.querySelector('.centerContainer-skills__sunStrike');
const forgeSpirit = document.querySelector('.centerContainer-skills__forgeSpirit');
const chaosMetior = document.querySelector('.centerContainer-skills__chaosMetior');
const coldSnap = document.querySelector('.centerContainer-skills__coldSnap');
const invoke = document.querySelector('.centerContainer-buttons__r');
const start = document.querySelector('.start');
const centerContainer = document.querySelector('.centerContainer');
const score = document.querySelector('.score');
let timer = document.querySelector('.timer');
let r = 0;
let q = 0;
let w = 0;
let e = 0;
let i=30;
let m=0;

start.addEventListener('click', ()=>{
score.innerHTML=0;
  start.style.display='none';
  function startShow(){
    start.style.display='block';
  }
  timerFunc();
centerContainer.style.display='block';
setTimeout(startShow, 30000);
setTimeout(hideCenterContainer, 30000);
});

function hideCenterContainer() {
  centerContainer.style.display='none';
}

function timerFunc(){
  timer.textContent=i;
  const interval = setInterval(timelost,1000);
  function timelost() {
    i--;
    timer.textContent=i;
    if(i===0){
      clearInterval(interval);
      i=30;
    }

  }

}

function events (quas,wex,exort) {

  quas.addEventListener('click', () => {
    q++;
    skills();
    if(q>3){
      q--;
    }
  });
    wex.addEventListener('click', () => {
      w++;
      skills();
      if(w>3){
        w--;
      }
    });
      exort.addEventListener('click', () => {
        e++;
        skills();
        if(e>3){
          e--;
        }
      });

invoke.addEventListener('click', ()=> {
  r++;
  skills();
  zero();
});

}

events(quas,wex,exort);


function zero(){
 q=0;
 w=0;
 e=0;
 r=0;
}



 function skills() {
   function cSDisplaynone() {
     coldSnap.style.display = 'none';
   }
   function dBDisplaynone() {
     definingBlast.style.display = 'none';
   }
   function gWDisplaynone() {
     ghostWalck.style.display = 'none';
   }
   function iWDisplaynone() {
     iceWall.style.display = 'none';
   }
   function empDisplaynone() {
     emp.style.display = 'none';
   }
   function tornadoDisplaynone() {
     tornado.style.display = 'none';
   }
   function alacrityDisplaynone() {
     alacrity.style.display = 'none';
   }
   function sSDisplaynone() {
     sunStrike.style.display = 'none';
   }
   function fSDisplaynone() {
     forgeSpirit.style.display = 'none';
   }
   function cMDisplaynone() {
     chaosMetior.style.display = 'none';
   }
 if (q === 3&& r===1) {
   coldSnap.style.display = 'block';
   m++;
        setTimeout(cSDisplaynone, 2000);
 } else if (q === 1 && w ===1  && e===1 && r===1){
   definingBlast.style.display = 'block';
   m++;
    setTimeout(dBDisplaynone, 2000);
  } else if (q===2 && w===1 && r===1){
    ghostWalck.style.display = 'block';
 m++;
    setTimeout(gWDisplaynone, 2000);
  } else if (q===2 && e===1 && r===1){
    iceWall.style.display = 'block';
     m++;
    setTimeout(iWDisplaynone, 2000);
  }else if ( w===3 && r===1){
    emp.style.display = 'block';
     m++;
    setTimeout(empDisplaynone, 2000);
  }else if (q===1 && w===2 && r===1){
    tornado.style.display = 'block';
     m++;
    setTimeout(tornadoDisplaynone, 2000);
  }else if (w===2 && e===1 && r===1){
    alacrity.style.display = 'block';
     m++;
    setTimeout(alacrityDisplaynone, 2000);
  }else if (e===3 && r===1){
    sunStrike.style.display = 'block';
     m++;
    setTimeout(sSDisplaynone, 2000);
  }else if (e===2 && q===1 && r===1){
    forgeSpirit.style.display = 'block';
     m++;
    setTimeout(fSDisplaynone, 2000);
  }else if (e===2 && w===1 && r===1){
    chaosMetior.style.display = 'block';
     m++;
    setTimeout(cMDisplaynone, 2000);
  }
  score.innerHTML=m;
 }
