var moment = require('moment');
module.exports = {
  hooks: {
    'page:before': function(page) {
      var str = '<script type="text/javascript" src="https://cdn.bootcss.com/mathjax/2.7.3/latest.js?config=TeX-AMS-MML_HTMLorMML"></script>\n<script type="text/x-mathjax-config">\n    MathJax.Hub.Config({\n        tex2jax: {\n            inlineMath: [[\'$\',\'$\']],\n            processEscapes: true\n        }\n    });\n</script> ';
      page.content = str + page.content;
      return page;
    }
  }
};
