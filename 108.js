$(document).ready(function () {
  // Need Back button
  function isBackButton(int) {
    if (109 > int && int > 1) {
      $(".back").css({ opacity: 1, visibility: "visible" });
    } else {
      $(".back").css({ opacity: 0, visibility: "hidden" });
    }
  }
  // Home button
  $(".logo").on("click", function () {
    $(".bow-wrap").fadeOut(500, "linear");
    $(".cover-wrap").delay(500).fadeIn(500, "linear");
  });

  // Ending Page
  function isEnding(int) {
    if (int === 109) {
      $("h3").html(":)");
      $("h4").html("수고하셨습니다. 좋은 하루되세요!");
    }
    if (int === 110) {
      $(".bow-wrap").fadeOut(500, "linear");
      $(".cover-wrap").hide();
      $(".cover-wrap").delay(500).fadeIn(500, "linear");
    }
  }

  // Let's bow button - page turn over
  $(".next").on("click", function () {
    $(".cover-wrap").fadeOut("slow");
    $(".bow-wrap").fadeOut();
    $(".bow-wrap").delay(200).fadeIn("slow");

    $.getJSON("108.json", function (json) {
      int = 0;
      let numbering = String(int + 1).padStart(3, "0");
      $("h3").html(numbering);
      $("h4").html(json.data[int]);
      isBackButton(int);
      int++;
    });
  });

  // Button click Event
  $(".bow-wrap").on("click", function (e) {
    $(".bowing-contents").fadeOut(500, "swing", function () {
      const click = e.target.dataset.click === "back";

      $.getJSON("108.json", function (json) {
        if (click) {
          // page turn over - go back
          --int;
          isBackButton(int);
          let numbering = String(int).padStart(3, "0");
          $("h3").html(numbering);
          $("h4").html(json.data[int]);
        } else {
          // page turn over - go forward page
          ++int;
          let numbering = String(int).padStart(3, "0");
          $("h3").html(numbering);
          $("h4").html(json.data[int]);
          isBackButton(int);
          isEnding(int);
        }
      });
    });

    $(".bowing-contents")
      .delay(500)
      .fadeIn("slow", function () {
        // color change
        let colors = [
          "#8d98c7",
          "#ffcd7b",
          "#9ccccf",
          "#F7F5EB",
          "#3C6255",
          "#61876E",
          "#A6BB8D",
          "#EAE7B1",
          "#A75D5D",
          "#D3756B",
          "#D3756B",
          "#F0997D",
          "#FFC3A1",
          "#1C315E",
          "#227C70",
          "#EAC7C7",
          "#A0C3D2",
          "#65647C",
          "#8B7E74",
          "#C7BCA1",
          "#CCD6A6",
          "#181D31",
          "#EF9A53",
          "#3C2317",
          "#FFCACA",
          "#FFE9A0",
        ];
        let random = colors[Math.floor(Math.random() * colors.length)];
        $(".bow-wrap").css("background", random);
        $("h3").css("color", random);
      });
  });
});
