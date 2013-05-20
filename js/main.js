function setLinks() {
  $(".link-impressum").attr('href', 'javascript: loadToMainDiv("impressum.html", "Impressum")');
  $(".link-home").attr('href', 'javascript: loadToMainDiv("home.html", "Milan Oberkirch");');
}

function loadToMainDiv(href, title) {
  var div = $("#main-content");
  div.fadeOut("fast", function() {
  document.title = title;
  div.load(href, function () {
    setLinks();
    div.fadeIn("fast");}
          );
  });
}

$(document).ready(function(){
  setLinks();
  $("#main-content").fadeIn("slow");
})
