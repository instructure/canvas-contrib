/*
 * This script uses JQuery, the javascript framework used on canvas.
 * Once included in an account's global branding javascript file, this script will
 * hide the wiki sidebar for users that are either not-logged in (applicable to public
 * courses) or are students in the course without rights to edit the page.
 */
$(document).ready(function(){
  // Check for 'wiki' in the url. This limits the script to only run for pages
  if(window.location.href.split('/').indexOf('wiki')!==-1){ 
    // Get anchor tags in the #right-side-wrapper div with at least the edit-link class
    var l = $('#right-side-wrapper a.edit_link.button.button-sidebar-wide'); 
    if(l===null || l.length===0){
      $('#right-side-wrapper').hide();
    }
  }
});
