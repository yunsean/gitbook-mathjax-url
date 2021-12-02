window.gitbook.events.on('page.change', function() {
  if (MathJax) MathJax.Hub.Queue(["Typeset", MathJax.Hub]);    
});
