// Import stylesheets
import './style.css';

// Write Javascript code!

function askUserForHoroscopeSign() {
  /* User name */
  var userName = prompt('Unesite vaše ime!');
  console.log(userName);

  /* User horoscope sign */
  var userHoroscopeSign = prompt('Unesite vaš horoskopski znak!');
  console.log(userHoroscopeSign);

  /* Horoscope signs description */
  var lionDescription =
    'Lav je egocentričan, voli sjaj, voli da se prikazuje, potrebno mu je uvažavanje i obožavanje. U redu, ali ima tu i mnogo više od toga. Lavovi su posvećeni i odani prijatelji, veoma darežljivi i širokogrudi kad treba da pomognu bliskoj osobi, čak i na svoju štetu. I on to ne radi da bi dobio pohvalu i poštovanje, to se prosto spontano dešava.';
  var libraDescription =
    'Kad imate posla sa Vagom, ponekad ćete videti kako njen napor da postigne ravnotežu i osvoji lepe i pozitivne stvari u životu postaje očajanje kad ne dobije ono što želi, i kako se zatim preusmerava na novi cilj. Vaga je međutim, vrlo promišljena i sve radi sa namerom. Teško joj je da se prepusti u potpunosti, ne zato što se plaši ili nema kapacitete, već zato što želi da donese najbolju moguću odluku. Zato će uzeti koliko god joj vremena treba, da bi bila sigurna da radi pravu stvar.';

  if (userHoroscopeSign === 'lav') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        lionDescription
    );
  } else if (userHoroscopeSign === 'vaga') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        libraDescription
    );
  }
}

askUserForHoroscopeSign();
