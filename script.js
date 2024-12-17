var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
});

// var typed = new Typed(".typing-2",{
//     strings: ["Web Developer", "Web Designer", "Youtuber", "Blogger"],
//     typeSpeed: 100,
//     backSpeed: 60,
// });

// =============Progress bar js============start here 


const container = document.querySelector(".container");

const courses = [
  { course: "HTML", percent: 99, color: "#f9ca24" },
  { course: "CSS", percent: 65, color: "#78e08f" },
  { course: "JavaScript", percent: 35, color: "#c56cf0" },
  { course: "Bootstrap", percent: 85, color: "#badc58" },
];

courses.forEach((course) => {
  container.innerHTML += `
  <div class="progess-group">
  <div class="circular-progress" >
    <span class="course-value" style="color:${course.color}">0%</span>
  </div>
  <label class="text" style="color:${course.color}">${course.course}</label>
</div>
  `;
});

style="  background: conic-gradient(${course.color} ${3.6 * course.percent}deg, #fff 0deg);"

const progressGroups = document.querySelectorAll(".progess-group");

progressGroups.forEach((progress, index) => {
  let progressStartValue = 0;
  let progressStartEnd = courses[index].percent;
  let speed = 50;
  let progessTimer = setInterval(() => {
    progressStartValue++;
    if (progressStartValue == progressStartEnd) {
      clearInterval(progessTimer);
    }
    progress.querySelector(".circular-progress").style.background = `
    conic-gradient(${courses[index].color} ${3.6 * progressStartValue}deg, #fff 0deg)`;

    progress.querySelector(".course-value").innerHTML = progressStartValue + "%";
  }, speed);
});



// =============Progress bar js=============End  here 


// ============ Creative Work  js=============Start   here 


$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// ============ Creative Work  js=============End   here 

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


var open = document.querySelector(".open-menu i");
var close = document.querySelector(".close-menu");
var menu = document.querySelector (".nav-menu ul ");

open.addEventListener('click', ()=>{
  close.style.display = "block";
  open.style.display = "none";
  menu.style.display = "block"


});

close.addEventListener('click', ()=>{

    open.style.display = "block";
  menu.style.display = "none";
  close.style.display = "none";


})