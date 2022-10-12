// This function toggle the answer button to show or hide answer.
function showAnswer(abc) {
  var x = document.getElementById("description" + abc);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// This function show mcqs

const show_data = (mcqs, subject = "none", chapter = "none") => {
  let count = 1;
  for (mcq in mcqs) {
    if (
      (mcqs[mcq][0].subject_name == subject &&
        mcqs[mcq][0].chapter_name == chapter) ||
      (mcqs[mcq][0].subject_name == subject && chapter == "all")
    ) {
      document.write(
        "<p class='question'>  Question " +
          count +
          ":" +
          mcqs[mcq][0].question +
          "</p> "
      );
      document.write(
        "<p> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_one'/> A: " +
          mcqs[mcq][0].option_one +
          "</p>"
      );
      document.write(
        "<p> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_two'/> B: " +
          mcqs[mcq][0].option_two +
          "</p>"
      );
      document.write(
        "<p> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_three'/> C: " +
          mcqs[mcq][0].option_three +
          "</p>"
      );
      document.write(
        "<p> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_four'/> D: " +
          mcqs[mcq][0].option_four +
          "</p>"
      );
      document.write(
        "<button id='" +
          mcqs[mcq][0].id +
          "' onclick='showAnswer(this.id)'> Show Answer </button>"
      );
      document.write(
        "<div class='hidden' id='description" + mcqs[mcq][0].id + "'>"
      );
      document.write(
        "<p class='answer'> Answer:" + mcqs[mcq][0].answer + "</p>"
      );
      document.write(
        "<p class='description'> Description" +
          mcqs[mcq][0].explaination +
          "</p>"
      );
      document.write("</div>");
      count++;
    } else {
      console.log("false");
    }
  }
};

// This function will get the values from URL.
// for the return from this function use the following
// const value=get_url_values();
  //  console.log(value.chapter);

function get_url_values() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  return params;
}
