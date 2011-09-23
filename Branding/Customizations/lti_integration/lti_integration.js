jQuery(function($){
  /* The following will redirect the current page to the LTI resource
     Adjust the the 'target' value below will change this behavior:
     
     '_self'  : redirects the current page to the LTI resource
     '_blank' : opens the resource in a new page
  */
  $("#content #tool_form").attr('target', '_self');
  $("#content #tool_form").submit();
  
  /* Enable the following when using the '_blank' target to avoid
     having the LTI tool open in the new tab *and* the Canvas tab. */
  // window.location.replace(window.location.href.replace(/\/modules\/.*/, ''));
});