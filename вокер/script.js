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
let r = 0;
let q = 0;
let w = 0;
let e = 0;



function events () {
  quas.addEventListener('click', () => {
    q++;
    skills();
  });
    wex.addEventListener('click', () => {
      w++;
      skills();
    });
      exort.addEventListener('click', () => {
        e++;
        skills();
      });
invoke.addEventListener('click', ()=> {
  r++;
  skills();
  zero();
});

}

events();

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
        setTimeout(cSDisplaynone, 2000);
 } else if (q === 1 && w ===1  && e===1 && r===1){
   definingBlast.style.display = 'block';
    setTimeout(dBDisplaynone, 2000);
  } else if (q===2 && w===1 && r===1){
    ghostWalck.style.display = 'block';
    setTimeout(gWDisplaynone, 2000);
  } else if (q===2 && e===1 && r===1){
    iceWall.style.display = 'block';
    setTimeout(iWDisplaynone, 2000);
  }else if ( w===3 && r===1){
    emp.style.display = 'block';
    setTimeout(empDisplaynone, 2000);
  }else if (q===1 && w===2 && r===1){
    tornado.style.display = 'block';
    setTimeout(tornadoDisplaynone, 2000);
  }else if (w===2 && e===1 && r===1){
    alacrity.style.display = 'block';
    setTimeout(alacrityDisplaynone, 2000);
  }else if (e===3 && r===1){
    sunStrike.style.display = 'block';
    setTimeout(sSDisplaynone, 2000);
  }else if (e===2 && q===1 && r===1){
    forgeSpirit.style.display = 'block';
    setTimeout(fSDisplaynone, 2000);
  }else if (e===2 && w===1 && r===1){
    chaosMetior.style.display = 'block';
    setTimeout(cMDisplaynone, 2000);
  }
 }
