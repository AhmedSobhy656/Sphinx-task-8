/*
 Author : Ahmed Sobhy
 Date : Fri 8.4.2022

*/



//*************************************************************************************************/

{//------ --------------     Part Sliding sections 
  var btn_next = document.getElementById("btn-next");   
  var btn_previous = document.getElementById("btn-previous");   
  var section_one = document.getElementById("section-one");    
  var section_two = document.getElementById("section-two");
  
  btn_next.onclick = function next(){
      if(section_two.style.display == "none")
        {
          section_one.style.display = "none"
          section_two.style.display = "flex"
          document.getElementById("page-number").innerHTML = "2 of 2";
          btn_showAnswer.style.display = "none"  // this button is declared in section Part to show Answer 
          btn_showAnswer_two.style.display = "block"
        }
        else{
          section_one.style.display = "none"
          section_two.style.display = "flex"
          document.getElementById("page-number").innerHTML = "2 of 2";
          btn_showAnswer.style.display = "none"
          btn_showAnswer_two.style.display = "block"
        }
  }

  btn_previous.onclick = function previous(){
      if(section_one.style.display == "none")
        {
          section_two.style.display = "none"
          section_one.style.display = "flex"
          document.getElementById("page-number").innerHTML = "1 of 2";
          btn_showAnswer.style.display = "Block"
          btn_showAnswer_two.style.display = "none"
        }
        else{
          section_two.style.display = "none"
          section_one.style.display = "flex"
          document.getElementById("page-number").innerHTML = "1 of 2";
          btn_showAnswer.style.display = "Block"
          btn_showAnswer_two.style.display = "none"
        }
  }
}//----------------------End Part Sliding Section -----------------------------------------

//*************************************************************************************************/

{//---------------------This Part for Select photo ------------------------------------------
  var choose_one_a = document.getElementById("choose-one-a");
  var choose_one_b = document.getElementById("choose-one-b");
  var choose_two_a = document.getElementById("choose-two-a");
  var choose_two_b = document.getElementById("choose-two-b");

  var wrong_answer_one = document.getElementById("wrong-answer-one");
  var wrong_answer_two = document.getElementById("wrong-answer-two");

  choose_one_a.onclick = function chooseAnswer(){ 
    true_answer_one.style.visibility = "visible";
    choose_one_b.style.filter = `contrast(${0.5})`;  
 }
  choose_one_b.onclick = function chooseAnswer(){ 
   wrong_answer_one.style.visibility = "visible";
   choose_one_b.style.filter = `contrast(${0.5})`;  
 }

  choose_two_a.onclick = function chooseAnswer(){ 
    wrong_answer_two.style.visibility = "visible";
    choose_two_a.style.filter = `contrast(${0.5})`;  
  }
  choose_two_b.onclick = function chooseAnswer(){ 
    true_answer_two.style.visibility = "visible";
    choose_two_a.style.filter = `contrast(${0.5})`;  
  }

 
}//---------------------End Part to Select photo ------------------------------------------

//*************************************************************************************************/

{//------------------------Part to show Answer True ---------------------------------------------- 
  var btn_showAnswer = document.getElementById("btn-shwo-answer");   
  var btn_showAnswer_two = document.getElementById("btn-shwo-answer-two");   
  var true_answer_one = document.getElementById("true-answer-one");
  var true_answer_two = document.getElementById("true-answer-two");
  
  btn_showAnswer.onclick = function trueAnswer(){
          true_answer_one.style.visibility = "visible";
          choose_one_b.style.filter = `contrast(${0.5})`;  
  }

  btn_showAnswer_two.onclick = function trueAnswer(){
         true_answer_two.style.visibility = "visible";
         choose_two_a.style.filter = `contrast(${0.5})`;  
}

}//---------------------End Part to show Answer True ------------------------------------------


//*************************************************************************************************/

{//----------------------Part to make scale function -----------------
//    var container_id = document.getElementById("container-id");
//    var w = (innerWidth / screen.width);
//    console.log(w);

//    var h = (innerHeight / screen.height);
//    console.log(h);


    //  var w = .5;
    //  var h = .5 ;
    //  var x = .25;

    // using Template literals to set variable to property css 

    // container_id.style.transform=  `scale(${w,h})`;  
}//----------------------End Part to make scale function -----------------------------------------

//*************************************************************************************************/

{//---------------------- Play Audio  -----------------------------------------
  // var btn_play_section_one = document.getElementById("play-section-one"); // Button which I press It to play sound for section one 
  // var audioPlayer1 = document.getElementById("audioPlayer1"); // the sound it played for section one 
   
  // btn_play_section_one.onclick = function playSectionOne(){
  //   audioPlayer1.play();
  // }
  
}//----------------------End Play Audio -----------------------------------------