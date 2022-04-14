/***** LOOPS *****/
/* While */
var count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

/* Do while */
//???
var count = 0;
do {
  count++;
  console.log(count);
} while (count < 15);

/* For */
for(var count = 0; count < 18; count++){
  console.log(count);
}

var a = [1,2,3,4,5,6,7,8];
for(var i = 0; i < a.length; i++) {
	 console.log(a[i]); 
}

/* For in */
var obj = { 
  name: "Samsung",
  model: "Note7" 
}
  
for(var prop in obj) {
  console.log(obj[prop]);   // "Samsung", "Note7"	
}
