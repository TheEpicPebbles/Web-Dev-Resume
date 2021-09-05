var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

/* for when you need to include another js file within another
$.getScript('/path/to/imported/script.js', function()
{
    // script is now loaded and executed.
    // put your dependent JS here.
});
*/

function showNavBar() {
  $('#navBarContainer').css('height', 'px')
  $(this).toggleClass("open");
  $(".lilUziVertNavBar")
  .css('z-index', '6')
  .slideDown(269 ,'swing')
  .animate(
    { opacity: 1 },
    { queue: false, duration: 'slow' }
  );
}
function hideNavBar() {
    $(".lilUziVertNavBar")
  .css('opacity', 1)
  .slideUp(269 ,'swing')
  .animate(
    { opacity: 0 },
    { queue: false, duration: 'slow' },
    {complete: function(){
      $(this).css('display', 'none')
        .css('z-index', '-1');

        console.log("SHIUT");
      }
    });
}
var navDown = false;
$(".navicon").click(function() {
    if (!navDown) {
      showNavBar();
      navDown = true;
    } else {
      hideNavBar();
      navDown = false;
    }
});
$('#CV_slideButt').click(function () {
  $("html, body").animate({
    scrollTop: $("#CV_slide").offset().top
  }, 100);
  hideNavBar();
  hideNavBarContainer(".pullUpButton")
  navContainerDown = navDown = false;
});
$('#SkillsButt').click(function () {
  $("html, body").animate({
    scrollTop: $("#Skills").offset().top
  }, 100);
  hideNavBar();
  hideNavBarContainer(".pullUpButton")
  navContainerDown = navDown = false;
});
$('#EducationButt').click(function () {
  $("html, body").animate({
    scrollTop: $("#Education").offset().top
  }, 100);
  hideNavBar();
  hideNavBarContainer(".pullUpButton")
  navContainerDown = navDown = false;
});
$('#WorkButt').click(function () {
  $("html, body").animate({
    scrollTop: $("#Work").offset().top
  }, 100);
  hideNavBar();
  hideNavBarContainer(".pullUpButton")
  navContainerDown = navDown = false;
});
$('#ProjexButt').click(function(){
    $("html, body").animate({
    scrollTop: $("#Projex").offset().top
  }, 100);
  hideNavBar();
  hideNavBarContainer(".pullUpButton")
  navContainerDown = navDown = false;
});

function hideNavBarContainer(lol) {
    $('.titleContainer').slideUp(269, 'swing');
    navContainerDown = false;
    $('.appointmentButton').animate({ 
    top: "85%",
    }, 269 );
    $(lol).animate({ 
    top: "0%",
    }, 269 );
    $(lol).animate(
      { deg: 180 },
      {
        duration: 450,
        step: function(now) {
          $(lol).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    ); 
}
function showNavBarContainer(lol) {
    $('.titleContainer').slideDown(269, 'swing');
    navContainerDown = true;
    $('.appointmentButton').animate({ 
    top: "50%",
    }, 269 );
    $(lol).animate({ 
      top: "12%",
    }, 269 );
    $(lol).animate(
      { deg: 0 },
      {
        duration: 450,
        step: function(now) {
          $(lol).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
}

navContainerDown = true;
$('.pullUpButton').click(function(){
  if(navContainerDown){
    if(navDown){
      hideNavBar();
        navDown = false;
    }
    hideNavBarContainer(this);
  } else {
    showNavBarContainer(this);
  }
});