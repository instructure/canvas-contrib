/**
 * JQuery is the javascript library used in many places across canvas.  
 *
 * This script describes how you would add a link to the top Canvas Navigation.
 * In this example, the link added is 
 * <a href='https://support.myschool.edu'>Local Support</a>
 *
 * and is put just before the regular Canvas Help Button.  This example also
 * renames the canvas help button from "Help" to "Canvas Help"
 *
 **/
$(document).ready(function(){
  // Identify the logout link in the top menu
  var logout_button = $('#identity_feedback'); 
  // Create the support button html string
  var support_button = "<li><a href='https://support.myschool.edu'>Local Support</a></li>";
  $(support_button).insertBefore($(logout_button));
  $('#feedback_link').text('Canvas Help');
});
