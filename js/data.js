$(document).ready(function() {
  var template = $("#template").html();
  Mustache.parse(template);


  var rendered = Mustache.render(template, {
    user: {
      name: "Corey",
      age: 30
    }
  })
  $("target").html(rendered);
});
