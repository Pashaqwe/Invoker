"use strict";

const quas = document.querySelector('.centerContainer-buttons__quas');
const wex = document.querySelector('.centerContainer-buttons__wex');
const exort = document.querySelector('.centerContainer-buttons__exort');
const definingBlast = document.querySelector('.centerContainer-skills__definingBlast');
const coldSnap = document.querySelector('.centerContainer-skills__coldSnap');
// const r = document.querySelector('.centerContainer-buttons__r');
// let invoke = 0;
let q = 0;
let w = 0;
let e = 0;


function qqq() {
  quas.addEventListener('click', () => {
    function cSDisplaynone() {
      coldSnap.style.display = 'none';
    }
    q++;
    if (q === 3) {
      coldSnap.style.display = 'block';
      let qwe = setTimeout(cSDisplaynone, 2000);
      q = 0;
    }
    return q;
  });
}
qqq();

// function qwe() {
//   quas.addEventListener('click', () => {
//     // function definingBlastDisplaynone() {
//     //   definingBlast.style.display = 'none';
//     // }
//     q++;console.log(q , w ,e);
//   });
//     wex.addEventListener('click', () => {
//
// console.log(q , w ,e);
//       w++;
//     });
//
//       exort.addEventListener('click', () => {
//         e++;
//         console.log(q , w ,e);
//       });
//
//     if (q === 2  || e===1) {
//       definingBlast.style.display = 'block';
//       // let qwe = setTimeout(definingBlastDisplaynone, 2000);
//     //   q = 0;
//     //   w=0;
//     //   e=0;
//     // return q,w,e;
//
//   }
// }
// qwe();
