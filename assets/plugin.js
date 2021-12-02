window.gitbook.events.on('page.change', function() {
  try {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);    
  } catch(e) {  
  }  
});
