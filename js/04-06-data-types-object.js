/*****  OBJECT *****/
var grad = {
 ime: 'Beograd',
 brojStanovnika: 2000000,
 reke: ['Dunav', 'Sava'],
};
console.log(grad.ime);
console.log(grad.ime + "ima" + grad.brojStanovnika + "stanovnika");
console.log(grad.reke[0]);
grad.staroIme = 'Singidunum';
console.log(grad);
console.log(grad["ime"]);

var knjiga = {
	ime : "JavaScript",
	pisac : {
		ime : "Danilo",
		prezime : "Vesović"
	}
}
console.log(knjiga.pisac.ime);