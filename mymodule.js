var fs = require('fs');
var path = require('path');

mymodule = function(dirname, ext, callback) {
  var list = [];
  try {
    fs.readdir(dirname, function(err, data) {
      if(err) throw err;
      data.forEach(function(element, index, array) {
        if(path.extname(element) === '.' + ext) list.push(element);
      });

    callback(null, list);
  });
  }catch(err) {
    callback(err, list);
  }

}

module.exports = mymodule;
