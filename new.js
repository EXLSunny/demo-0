<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
var count_e = 0;
var count_p = 0;
var count_b = 0;
$("input:radio[name=group-essentials]").click(function() {
    $('#essentials_price_m').html($(this).val());
    if (count_e == 0 && $(this).val() == "$6.67/month"){
      $('#essentials_price_y').html("you'll pay $80/year");
      $("#essentials_yearly").css("border", "1.4px solid");
      $("#essentials_yearly").css("border-color", "#1464dc");
      $("#essentials_monthly").css("border", "2px transparent");
      $("#essentials_yearly").css("background-color", "#eff3f9");
      $("#essentials_monthly").css("background-color", "#f2f2f2");
      $("#essentials-y-label").css("background-color", "#eff3f9");
      $("#essentials-m-label").css("background-color", "#f2f2f2");
      count_e = count_e + 1;
    } else if ($(this).val() == "$8/month") {
      $('#essentials_price_y').html("to save $16/year, join annual!");
      $("#essentials_monthly").css("border", "1.4px solid");
      $("#essentials_monthly").css("border-color", "#1464dc");
      $("#essentials_yearly").css("border", "2px transparent");
      $("#essentials_monthly").css("background-color", "#eff3f9");
      $("#essentials_yearly").css("background-color", "#f2f2f2");
      $("#essentials-m-label").css("background-color", "#eff3f9");
      $("#essentials-y-label").css("background-color", "#f2f2f2");
      count_e=0;
    }
})
$("input:radio[name=group-professional]").click(function() {
    $('#professional_price_m').html($(this).val());
if (count_p == 0 && $(this).val() == "$25/month"){
      $('#professional_price_y').html("you'll pay $300/year");
      $("#professional_yearly").css("border", "1.4px solid");
      $("#professional_yearly").css("border-color", "#1464dc");
      $("#professional_monthly").css("border", "2px transparent");
      $("#professional_yearly").css("background-color", "#eff3f9");
      $("#professional_monthly").css("background-color", "#f2f2f2");
      $("#professional-y-label").css("background-color", "#eff3f9");
      $("#professional-m-label").css("background-color", "#f2f2f2");
      count_p = count_p + 1;
    } else if ($(this).val() == "$30/month") {
      $('#professional_price_y').html("to save $60/year, join annual!);
      $("#professional_monthly").css("border", "1.4px solid");
      $("#professional_monthly").css("border-color", "#1464dc");
      $("#professional_yearly").css("border", "2px transparent");
      $("#professional_monthly").css("background-color", "#eff3f9");
      $("#professional_yearly").css("background-color", "#f2f2f2");
      $("#professional-m-label").css("background-color", "#eff3f9");
      $("#professional-y-label").css("background-color", "#f2f2f2");
      count_p=0;
    }
})
$("input:radio[name=group-business]").click(function() {
    $('#business_price_m').html($(this).val());
if (count_b == 0 && $(this).val() == "$166.67/month"){
      $('#business_price_y').html("you'll pay $2000/year");
      $("#business_yearly").css("border", "1.4px solid");
      $("#business_yearly").css("border-color", "#1464dc");
      $("#business_monthly").css("border", "2px transparent");
      $("#business_yearly").css("background-color", "#eff3f9");
      $("#business_monthly").css("background-color", "#f2f2f2");
      $("#business-y-label").css("background-color", "#eff3f9");
      $("#business-m-label").css("background-color", "#f2f2f2");
      count_b = count_b + 1;
    } else if ($(this).val() == "$200/month"){
      $('#business_price_y').html("to save $400/year, join annual!");
      $("#business_monthly").css("border", "1.4px solid");
      $("#business_monthly").css("border-color", "#1464dc");
      $("#business_yearly").css("border", "2px transparent");
      $("#business_monthly").css("background-color", "#eff3f9");
      $("#business_yearly").css("background-color", "#f2f2f2");
      $("#business-m-label").css("background-color", "#eff3f9");
      $("#business-y-label").css("background-color", "#f2f2f2");
      count_b=0;
    }
})
})
</script>