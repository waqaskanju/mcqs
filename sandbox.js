var My_marks = 0;

// It counts the number of question in a page, initially it is one becuase the first mcq number will be 1.
var count = 1;

// Add the id of mcqs for marks and check if this id is there or not.
let mcqs = [];
// This function will show marks when the button is clicked
const show_marks = () => alert(My_marks + " out of " + (count - 1));

// This function toggle the answer button to show or hide answer and description.
const showAnswer = (abc) => {
  let x = document.getElementById("description" + abc);
  if (x.style.display !== "block") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

// This function will calculate marks based on each click.
const calculateMarks = (currentelement, increment_value) => {
  // mcqs will be added to this array when the person click on it.
  
  console.log(mcqs);
  // donot count an mcq if its marks are already added.
  if (mcqs.includes(currentelement)) {
    console.log('already included');
  } else {
    mcqs.push(currentelement);
    My_marks = My_marks + increment_value;
    console.log('Not there, so added.'+ currentelement);
  }
};

function handleChange(id) {
  // this will extract number only from the given id.

  // for example 2A will return 2
  let matches = id.match(/(\d+)/);

  //because it return an array we need it 0 index value.
  let only_match = matches[0];

  // Create an id for selection of answer.
  let new_id_ans = matches[0] + "ans";

  
  // create id for question
  let new_id_q = "q" + matches[0];

  // select the answer element
  let answerText = document.getElementById(new_id_ans);

  // Extract the actual answer value
  // For Example "Answer:D"
  // As D is the 8th  Character.
  let answerTextValue = answerText.innerText[8];

  // Select the question element
  let radio = document.getElementById(id);

  // select the current selection
  currentValue = document.getElementById(id).value;

  let parent = document.getElementById(id).parentElement;

  //check if the answer is equal to the selected checkbox value.
  if (currentValue == answerTextValue) {
    // call this function to increment the marks value by 1 if answer is correct.
    calculateMarks(only_match, 1);

    //change the color when the answer is correct
    parent.style.backgroundColor = "blue";
  } else {
    calculateMarks(only_match, 0);
    parent.style.backgroundColor = "red";
  }
}

// This function show mcqs
const show_data = (mcqs, subject, chapter) => {
  // let count = 1;
  for (mcq in mcqs) {
    if (
      (mcqs[mcq][0].subject_name == subject &&
        mcqs[mcq][0].chapter_name == chapter) ||
      (mcqs[mcq][0].subject_name == subject && chapter == "all")
    ) {
      document.write(
        "<div class='mcq' id='q" +
          mcqs[mcq][0].id +
          "'><div class='question_container'>  <p class='question'>  Question " +
          count +
          ": " +
          mcqs[mcq][0].question +
          " </p> </div>"
      );

      document.write("<div class='options'> ");

      document.write(
        " <div class='option' id='div_" +
          mcqs[mcq][0].id +
          "_a'> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_one' value='A' id='" +
          mcqs[mcq][0].id +
          "A' onchange='handleChange(this.id)'/>  <p>  A: " +
          mcqs[mcq][0].option_one +
          " </p> </div>"
      );
      document.write(
        " <div class='option'> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_two' value='B' id='" +
          mcqs[mcq][0].id +
          "B' onchange='handleChange(this.id)'/>  <p>  B: " +
          mcqs[mcq][0].option_two +
          " </p> </div>"
      );
      document.write(
        " <div class='option'> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_three' value='C' id='" +
          mcqs[mcq][0].id +
          "C' onchange='handleChange(this.id)'/>  <p>  C: " +
          mcqs[mcq][0].option_three +
          " </p> </div>"
      );
      document.write(
        " <div class='option'> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_four' value='D' id='" +
          mcqs[mcq][0].id +
          "D' onchange='handleChange(this.id)'/>  <p>  D: " +
          mcqs[mcq][0].option_four +
          " </p> </div>"
      );
      document.write(
        "<button class='showbutton noprint' id='" +
          mcqs[mcq][0].id +
          "' onclick='showAnswer(this.id)'> Show Answer </button>"
      );
      document.write(
        "<div class='hidden' id='description" + mcqs[mcq][0].id + "'>"
      );
      document.write(
        "<p class='answer' id='" +
          mcqs[mcq][0].id +
          "ans'> Answer:" +
          mcqs[mcq][0].answer +
          "</p>"
      );
      document.write(
        "<p class='description'> <b>Description:</b> " +
          mcqs[mcq][0].explanation +
          "</p>"
      );
      document.write("</div></div></div>");
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
