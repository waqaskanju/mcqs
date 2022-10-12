var My_marks=0;
var count=1;

function show_marks()
{

  alert(My_marks +' out of ' + (count-1));
}

// This function toggle the answer button to show or hide answer.
function showAnswer(abc) {
  var x = document.getElementById("description" + abc);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function calculateMarks(currentelement,increment_value){

 // let marks=0;
  let mcqs=[];

  if(mcqs.includes(currentelement)){
  }
  else{
    mcqs.push(currentelement);
    My_marks=My_marks+increment_value;
  }

}

function handleChange(id){
 

  // this will extrackt number only from the given id. 
   let matches = id.match(/(\d+)/);

   let only_match =matches[0];

   // create id to select the answer
 let new_id_ans =  matches[0]+'ans';
 // select div of full question
 let new_id_q='q'+matches[0];

let answerText = document.getElementById(new_id_ans);
let answerTextValue=answerText.innerText[8];


let id_q = document.getElementById(new_id_q);
// as answer is the 8th digit select its value



// select the current selection
currentValue=document.getElementById(id).value;

if(currentValue==answerTextValue){

  calculateMarks(only_match,1);
  id_q.style.backgroundColor ='#3ec700';

}
else {
   calculateMarks(only_match,0);
  id_q.style.backgroundColor ="#e7b5b5";
}


}

// This function show mcqs

const show_data = (mcqs, subject = "none", chapter = "none") => {
  // let count = 1;
  for (mcq in mcqs) {
    if (
      (mcqs[mcq][0].subject_name == subject &&
        mcqs[mcq][0].chapter_name == chapter) ||
      (mcqs[mcq][0].subject_name == subject && chapter == "all")
    ) {

      document.write(
        "<div class='mcq' id='q"+mcqs[mcq][0].id+"'><div class='question_container'>  <p class='question'>  Question " +
          count +
          ":" +
          mcqs[mcq][0].question +
          " </p> </div>"
      );
      document.write(
        "<div class='options'><p> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_one' value='A' id='"+mcqs[mcq][0].id+"A' onchange='handleChange(this.id)'/> A: " +
          mcqs[mcq][0].option_one +
          " </p>"
      );
      document.write(
        "<p> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_two' value='B' id='"+mcqs[mcq][0].id+"B' onchange='handleChange(this.id)'/> B: " +
          mcqs[mcq][0].option_two +
          "  </p>"
      );
      document.write(
        "<p> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_three' value='C' id='"+mcqs[mcq][0].id+"C' onchange='handleChange(this.id)'/> C: " +
          mcqs[mcq][0].option_three +
          "  </p>"
      );
      document.write(
        "<p> <input type='radio' name='optionsof" +
          mcqs[mcq][0].id +
          "'class='option_four' value='D' id='"+mcqs[mcq][0].id+"D' onchange='handleChange(this.id)'/> D: " +
          mcqs[mcq][0].option_four +
          " </p></div> "
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
        "<p class='answer' id='"+mcqs[mcq][0].id+"ans'> Answer:" + mcqs[mcq][0].answer + "</p>"
      );
      document.write(
        "<p class='description'> Description: " +
          mcqs[mcq][0].explaination +
          "</p>"
      );
      document.write("</div></div>");
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
