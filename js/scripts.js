$(document).ready(function() {
  $("h3").click(function() {
    $(this).next().toggleClass("hide");
  });
});
