/* FORM Validation */

<form action="#">
  <input type="text" name="username">
  <button onclick="getData(this.form)">Submit</button>
</form>
<script>
function getData(form){
  var username = form.username.value;
  alert(username);
}
</script>

<form action="#">
<input type="text" name="username">
<button onclick="getData(this.form)">Submit</button>
</form>
<script>
  function getData(form){
    form.username.value = "Prijatan dan!";
  }
</script>


<form action="#">
<input type="text" name="username">
<button type="submit">Submit</button>
</form>
<script>
var forma = document.forms[0];
forma.addEventListener('submit',function(event){
	event.preventDefault();
	// logika nase validacije
  forma.submit();
})
</script>