var moment = require('moment');
module.exports = {
  hooks: {
    'page:before': function(page) {
      var str = ' this is from dylan'
      page.content = page.content + str;
      return page;
    }
  }
};
