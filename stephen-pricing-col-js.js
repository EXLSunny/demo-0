<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
var count_e = 0;
var count_p = 0;
var count_b = 0;
$("input:radio[name=group-essentials]").click(function() {
    $('#essentials_price').html($(this).val());
    if (count_e == 0){
      $("#essentials_yearly").css("border", "1px solid");
      $("#essentials_yearly").css("border-color", "#1464dc");
      $("#essentials_monthly").css("border", "2px transparent");
      count_e = count_e + 1;
    } else {
      $("#essentials_monthly").css("border", "1px solid");
      $("#essentials_monthly").css("border-color", "#1464dc");
      $("#essentials_yearly").css("border", "2px transparent");
      count_e=0;
    }
})
$("input:radio[name=group-professional]").click(function() {
    $('#professional_price').html($(this).val());
if (count_p == 0){
      $("#professional_yearly").css("border", "1px solid");
      $("#professional_yearly").css("border-color", "#1464dc");
      $("#professional_monthly").css("border", "2px transparent");
      count_p = count_p + 1;
    } else {
      $("#professional_monthly").css("border", "1px solid");
      $("#professional_monthly").css("border-color", "#1464dc");
      $("#professional_yearly").css("border", "2px transparent");
      count_p=0;
    }
})
$("input:radio[name=group-business]").click(function() {
    $('#business_price').html($(this).val());
if (count_b == 0){
      $("#business_yearly").css("border", "1px solid");
      $("#business_yearly").css("border-color", "#1464dc");
      $("#business_monthly").css("border", "2px transparent");
      count_b = count_b + 1;
    } else {
      $("#business_monthly").css("border", "1px solid");
      $("#business_monthly").css("border-color", "#1464dc");
      $("#business_yearly").css("border", "2px transparent");
      count_b=0;
    }
})
})
</script>