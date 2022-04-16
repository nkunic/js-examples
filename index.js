// Import stylesheets
import './style.css';

// Write Javascript code! //

/* Napiši JavaScript program koji će u konzuli prikazati preostalo vreme do Nove godine.
U ovakvom formatu: 113 preostalo dana do Nove godine! */

danas=new Date();
var novagodina=new Date(danas.getFullYear(), 12, 31);

if (danas.getMonth()==12 && danas.getDate()>31){
  novagodina.setFullYear(novagodina.getFullYear()+1);
}

var one_day=1000*60*60*24;

console.log(Math.ceil((novagodina.getTime()-danas.getTime())/(one_day))+
" preostalo dana do Nove godine!");