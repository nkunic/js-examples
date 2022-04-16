/* Napiši JavaScript program koji će u konzuli prikazati preostalo vreme do Nove godine.
U ovakvom formatu: 113 preostalo dana do Nove godine! */

/* Date today */
var today = new Date(); // Today date: Sat Apr 16 2022 16:36:27 GMT+0200 (Central European Summer Time)
console.log("Today date: " + today);

/* This year */
var year = today.getFullYear(); // 2022
console.log("This year: " + year);



/* This month */
var month = today.getMonth(); // 3
console.log("This month: " + month);

/* This day */
var day = today.getDate(); // 16
console.log("This day: " + day);

/* One day in seconds*/
var oneDay=1000*60*60*24; // 86400000
console.log("One day in seconds: " + oneDay);

/* Next year */
var newYear = new Date(year, 12, 31); // 2023-01-30T23:00:00.000Z
console.log(newYear);

/* Next year */
var nextYear = newYear.getFullYear(); // 2023
console.log("Next year: " + nextYear);

if (month==12 && day>31){
  newYear.setFullYear(nextYear+1);
}

var secondsNextYear = newYear.getTime();
console.log(secondsNextYear);

var secondsThisYear = today.getTime();
console.log(secondsThisYear);

console.log(Math.ceil((secondsNextYear-secondsThisYear)/(oneDay))+
" preostalo dana do Nove godine!");