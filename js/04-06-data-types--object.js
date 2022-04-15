/*****  OBJECT *****/
var grad = {
  ime: 'Beograd',
  brojStanovnika: 2000000,
  reke: ['Dunav', 'Sava'],
};
console.log(grad.ime); // Beograd
console.log(grad.ime + 'ima' + grad.brojStanovnika + 'stanovnika'); // Beogradima2000000stanovnika
console.log(grad.reke[0]); // Dunav
grad.staroIme = 'Singidunum';
console.log(grad); // {ime: "Beograd", brojStanovnika: 2000000, reke: Array[2], staroIme: "Singidunum"…}
console.log(grad['ime']); // Beograd

var knjiga = {
  ime: 'JavaScript',
  pisac: {
    ime: 'Danilo',
    prezime: 'Vesović',
  },
};
console.log(knjiga.pisac.ime); // Danilo
