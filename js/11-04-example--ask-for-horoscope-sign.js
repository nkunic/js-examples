/* Zadatak: Napraviti program koji pita korisnika koji je horoskopski znak i ispisati određeni tekst za taj horoskopski znak u konzoli. */

function askUserForHoroscopeSign() {
  /* User name */
  var userName = prompt('Unesite vaše ime!');
  console.log(userName);

  /* User horoscope sign */
  var userHoroscopeSign = prompt('Unesite vaš horoskopski znak!');
  console.log(userHoroscopeSign);

  /* Horoscope signs description */
  var ariesDescription =
    'Ovnovi važe za žestoke, aktivne, pa čak i agresivne, sklone takmičenju i neumorne u odgovaranju na izove. Ali, ispod sve te borbenosti, strasti i ljubavi prema pobedi i priznanjima, leže skrivene dubine velikog i osetljivog srca. Ono što Ovan stvarno želi i za čim tajno žudi, jeste velika i prava ljubav – da vole i da se osećaju voljeno.';
  var bullDescription =
    'Bikovi su poznati kao najtvrdoglaviji znak u horoskopu, što potvrđuje činjenica da umeju da budu jako naporni odbijajući svaki argument protiv svog ubeđenja. Ipak, Bikovi su jako osetljivi i mili i najradije bi stalno bili takvi, samo što ih je život naučio da se to ne isplati. To znači da će Bik biti drag i ljubazan kad god mu drugi to omogućavaju, odnosno, kad su i sami pristojni i ljubazni, ali će zato pokazati snagu svoje tvrdoglavosti i protivljenja, ako pokušate da mu stanete na put.';
  var twinDescription =
    'Smatraju ih površnim, dvoličnim i nepromišljenim osobama, koje stalno menjaju mišljenje i idu iz veze u vezu. Ali Blizanci su fantastični prijatelji i za bliske ljude će uraditi bilo šta – sve što treba i više od toga. Ako ostavlja utisak da samo jurca i radi trista stvari odjednom, to ne znači da je Blizanac dezorganizovan i nehajan, nego da pokušava svima da ugodi.';
  var cancerDescription =
    'I same Rakove više izluđuje da slušaju o tome kako su emotivni, jer to negde znači i neuračunljivi i nestabilni, a Rakovi su zapravo mnogo jači nego što izgleda. Rakovi koriste svoje emocije da bi popravili svoju situaciju, a ne da bi je pogoršali i ispoljavaju svoje emocije kako bi ih sagledali i shvatili šta treba da rade. Rak ne beži od osećanja i u tome je puno pametniji od mnogih.';
  var lionDescription =
    'Lav je egocentričan, voli sjaj, voli da se prikazuje, potrebno mu je uvažavanje i obožavanje. U redu, ali ima tu i mnogo više od toga. Lavovi su posvećeni i odani prijatelji, veoma darežljivi i širokogrudi kad treba da pomognu bliskoj osobi, čak i na svoju štetu. I on to ne radi da bi dobio pohvalu i poštovanje, to se prosto spontano dešava.';
  var virgoDescription =
    'Analitične, ozbiljne, sitničave i hladne Device takođe važe za egocentrične i naporne osobe. Ali, Devica je jedan od najbrižnijih i najpažljivijih znakova u horoskopu. Ona se iskreno i predano brine o ljudima u svom životu, samo što tu brigu ne izražava na emotivan, nego na mnogo praktičniji i logičniji način. Devica je tu da pruži svaku podršku i da vas iznenadi svojom lojalnošću i razumevanjem.';
  var libraDescription =
    'Kad imate posla sa Vagom, ponekad ćete videti kako njen napor da postigne ravnotežu i osvoji lepe i pozitivne stvari u životu postaje očajanje kad ne dobije ono što želi, i kako se zatim preusmerava na novi cilj. Vaga je međutim, vrlo promišljena i sve radi sa namerom. Teško joj je da se prepusti u potpunosti, ne zato što se plaši ili nema kapacitete, već zato što želi da donese najbolju moguću odluku. Zato će uzeti koliko god joj vremena treba, da bi bila sigurna da radi pravu stvar.';
  var scorpioDescription =
    'Škorpije nose etiketu teških mračnjaka, a svojim ponašanjem je i zaslužuju – ali to je test hrabrosti. Ko ima petlje da priđe bliže i pogleda dublje, otkriće najromantičniju i najzanimljiviju osobu koju je ikada upoznao. Za Škorpiju, život je prekratak, da bi ga traćila na bilo šta što ne angažuje njenu strastvenost i posvećeneost. Ona je intenzivna – na najbolji način.';
  var sagittariusDescription =
    'Dragi, veseli, pozitivac, okružen masom ljudi, duša zabave – to je Strelac kako ga drugi vide. Iznutra, on je dubok i promišljen i često ne pokazuje svoja osećanja jer se plaši odbijanja, a kad se nekome otvori, to znači da se uverio da će biti shvaćen i prihvaćen takav kakav je. Strelac ima velike snove i bujnu maštu i specifične stavove o svetu koji ga okružuje, i ako sa nekim to podeli, želi da bude poštovan i shvaćen.';
  var capricornDescription =
    'Sposobni i vredni Jarac deluje ograničen svojim visokim standardima i kriterijumima – fokusiran, organizovan i ambiciozan, Jarac ne skreće pogled sa cilja i svi mu se sklanjaju s puta, nastojeći da mu ne smetaju, ubeđeni da to što bi oni hteli da podele, Jarčevima uopšte nije ni važno, ni zanimljivo. Jarčevi bi voleli kad bi ljudi oko njih razumeli njihovu osetljivost, ali oni prosto ne mogu da je pokažu i rizikuju da ne dobiju to razumevanje i podršku, koji su im potrebni. Da bi se Jarac otvorio, potrebno mu je da ima potpuno povrenje u vas.';
  var aquariusDescription =
    'Ekscentrična, zamišljena i malo otkačena Vodolija uopšte nije takav čudak koji postoji van sveta, kako ponekad izgleda. Ona je tip osobe koja najviše postiže u miru i samoći – Vodolija mora da ima kvalitetne periode samoće, da bi mogla da funkcioniše. Istovremeno je nezavisna i emotivna, a svoje probleme voli da rešava sama, razmišljajući, otkrivajući, povezujući i procesuirajući. Vratiće se bližnjima uvek – ali mora da ima dovoljno vremena za sebe.';
  var piscesDescription =
    'Pošto većina ljudi misli da je snaga u sposobnosti da svoja osećanja sakriješ i iskontrolišeš, Ribe važe za preterane dramatičare. Ali, Ribe potpuno drugačije misle i pronalaze snagu i vitalnost u izražavanju svoje emotivnosti. One imaju zalihe unutrašnje snage, sa kojom idu kroz život prelazeći hrabro preko najvećih prepreka.';

  if (userHoroscopeSign === 'ovan') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        ariesDescription
    );
  } else if (userHoroscopeSign === 'bik') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        bullDescription
    );
  } else if (userHoroscopeSign === 'blizanac') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        twinDescription
    );
  } else if (userHoroscopeSign === 'rak') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        cancerDescription
    );
  } else if (userHoroscopeSign === 'lav') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        lionDescription
    );
  } else if (userHoroscopeSign === 'devica') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        virgoDescription
    );
  } else if (userHoroscopeSign === 'vaga') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        libraDescription
    );
  } else if (userHoroscopeSign === 'škorpija') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        scorpioDescription
    );
  } else if (userHoroscopeSign === 'strelac') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        sagittariusDescription
    );
  } else if (userHoroscopeSign === 'jarac') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        capricornDescription
    );
  } else if (userHoroscopeSign === 'vodolija') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        aquariusDescription
    );
  } else if (userHoroscopeSign === 'ribe') {
    console.log(
      userName +
        ' ' +
        userHoroscopeSign +
        ' je super znak. Opis: ' +
        piscesDescription
    );
  }
}

askUserForHoroscopeSign();
