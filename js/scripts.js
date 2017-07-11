$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["person1", "person2", "noun1", "noun2", "animal"];

    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
  //   $("." + blank).text(userInput);
  // });

      for (var index = 0; index < blanks.length; index += 1) {
        $("." + blanks[index]).text($("input#" + blanks[index]).val());
      }

    $("#story").show();

    event.preventDefault();
  });
});
