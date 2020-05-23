$(window).on("load", function () {
  // pagescroll to id
  $("a[rel='mPageScroll2id']").mPageScroll2id();

  // Vide background vide.js
  $("#header").vide("./video/goldengate", {
    bgColor: "№447257",
  });
});
