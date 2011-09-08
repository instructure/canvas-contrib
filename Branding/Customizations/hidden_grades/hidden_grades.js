/* Note that this does not disable viewing of grades, it simply
   hides them from the students. As such, this is certainly not
   bullet-proof: a smart and dedicated person will be able to
   expose grades.
   
   Given the above, it is recommended that institutions simply
   wait for the official hidden grade functionality in Canvas. */

jQuery(function($){
  // Are we a teacher in the current URL?
  var iAmATeacherInThisCourse = $('#menu a .subtitle b:contains("Teacher")').filter(function() {
    return  window.location.pathname.match($(this).closest('a').attr('href'));
  }).length;

  // Check for visits to unauthorized URLs
  if (window.location.pathname.match(/\/grades/) && !iAmATeacherInThisCourse) {
    window.location.replace(window.location.href.replace(/\/grades*/, ''));
  }

  // This function removes all grades and references to grades.
  function removeGrades() {
    // Remove all links to grades
    $("a[href*='/grades']").remove();

    // Remove grades and possible values from assignments list
    $(".grade, .points_possible").remove();
    $(".points_text").text(function(i, currentText){
      return currentText.replace("out of", '');
    });

    // Remove quiz scores
    $(".quiz_score, .question_points_holder, .user_points").remove();
    $(".summary th:contains('Score')").parent().remove();

    // Remove grade from submission details
    $(".details a:contains('Submission Details')").parent().html(function(i, currentHtml){
      return currentHtml.replace(/Grade\: [0-9a-zA-Z|\-|\+]*/, '');
    }).find("span:contains('possible')").remove();
  }

  // Check if we are a teacher and, if not, call removeGrades.
  if (!iAmATeacherInThisCourse) removeGrades();
});
