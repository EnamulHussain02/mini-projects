$(document).ready(function() {
  $(".mainButton").click(function() {
    if ($(this).text() == "Follow") {
      $(this).text("Unfollow");
    } else {
      $(this).text("Follow");
    }
  });
});
