$(document).ready(function () {
  $("#botaoMenuMobile").on("click", () => {
    $("#menuMobile").toggleClass("active");
    $("#botaoMenuMobile").find("i").toggleClass("fa-x");
  });
});
