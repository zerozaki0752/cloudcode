var user = require(cloud/url.js);

AV.Cloud.define("hello", function(request, response) {
  response.success("hello !" + request.params.name);
});
