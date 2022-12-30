'use strict';

const unos = document.querySelector('.unos');
const knToEUR = document.getElementById('knToEUR');
const EURToKN = document.querySelector('#EURToKN');
const rezultat = document.querySelector('.rezultat');

const kunaUEURO = function (cijena) {
  return cijena / 7.5435;
};
const EUROuKN = function (cijena) {
  return cijena * 7.5435;
};

knToEUR.addEventListener('click', (e) => {
  e.preventDefault();
  let total = kunaUEURO(unos.value).toFixed(2);
  if (unos.value === '') {
    return;
  } else {
    rezultat.textContent = `=${total} €`;
  }
});
EURToKN.addEventListener('click', (e) => {
  e.preventDefault();
  let total = EUROuKN(unos.value).toFixed(2);
  if (unos.value === '') {
    return;
  } else {
    rezultat.textContent = `=${total} HRK`;
  }
});
