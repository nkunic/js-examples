/* Napiši JavaScript program koji će odštampati trenutnu stranicu, pozivom štampača na dugme. */

/*
  <p>Klikni na dugme kako bi ištampao stranicu</p>
  <button onclick="stampaj()">Štampaj</button>
  <button id="print">Štampaj</button>
*/

document.getElementById('print').addEventListener('click', function stampaj() {
  window.print();
});
