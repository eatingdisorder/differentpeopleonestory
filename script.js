

/* Quiz */
function check(){

var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var correct=0;


    if (question1=="false"){
        correct++;
  }


   if (question2=="false"){
       correct++;
  }


  if (question3=="true"){
      correct++;
  }


var messages=[
  "Вы проявляете достаточно эмпатии к людям с расстройствами пищевого поведения. Вы можете помочь им еще больше, если донесете их проблему до тех, кто осведомлен об этом в меньшей степени.",
  "Вы неплохо осведомлены в вопросах РПП. Однако помните, что даже одно неострожное слово, акцент на пище, которую ест человек, или уперк в лени и нежелании изменить свою внешность могут спровоцировать у собеседника приступ голода или булимии. ",
  "Вам нужно проявлять больше эмпатии к людям с расстройствами пищевого поведения. Даже одно неострожное слово, акцент на пище, которую ест человек, или уперк в лени и нежелании изменить свою внешность могут спровоцировать у собеседника приступ голода или булимии."];

var range;

  if(correct<1){
      range=2;
  }

  if(correct>0&&correct<3){
      range=1;
  }

  if(correct>2){
      range=0;
  }


document.getElementById("after_submit").style.visibility="visible";


document.getElementById("messages").innerHTML=messages[range];
document.getElementById("number_correct").innerHTML="Коректных ответов "+correct+" из 3";
}



// Feedback form

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";
  var template_id = "template_QYo1WAau";

  myform.find("button").text("Отправка...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){
       myform.find("button").text("Отправлено");
    }, function(err) {
       alert("Что-то пошло не так");
       myform.find("button").text("Отправить");
    });
  return false;
});
