/**
 * JQuery is the javascript library used in many places across canvas.  
 *
 * This script describes how you would change the text in the email box on the Canvas
 * Login page.  By default, the text in the box is "Email" but this script will allow you
 * to change this.  
 *
 * When implementing this script, replace <replacement> with the text you want to appear.
 * For example, you may want to have that text be "A-Number" rather than "email".  
 *
 *
 *
 **/
$(document).ready(function(){
  if(window.location.pathname.search('login')){
    var sp = $('#login_form label[for=pseudonym_session_unique_id]>span');

    sp.text('<replacement>');
  }
});
