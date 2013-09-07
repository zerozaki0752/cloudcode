// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
//var name = require('cloud/name.js');
//var user = require('cloud/user.js')

//var XMPP_SEVER = "http://115.28.44.100:7070/http-bind/";
//var XMPP_HOST = "@115.28.44.100";

//var url = require('cloud/url.js')
//var strophe = require('./strophejs/strophe.js')
AV.Cloud.define("hello", function(request, response) {
  response.success("hello !" + request.params.name);
});

AV.Cloud.beforeSave("TestReview", function(request, response)
            {
                    if (request.object.get("stars") < 1)
                    {
                        response.error("you cannot give less than one star");
                    }
                    else if (request.object.get("stars") > 5)
                    {
                        response.error("you cannot give more than five stars");
                    }
                    else
                    {
                        var comment = request.object.get("comment");
                        
                        if (comment && comment.length > 140)
                        {
                            // 截断并添加...
                            request.object.set("comment", comment.substring(0, 137) + "...");
                        }
                        response.success();
                    }
            });

AV.Cloud.afterSave("TestReview", function(request) {
                   var query = new AV.Query("TestPost");
                   query.get(request.object.get("post").id, {
                             success: function(post) {
                             post.increment("comments");
                             post.save();
                             },
                             error: function(error) {
                             throw "Got an error " + error.code + " : " + error.message;
                             }
                             });
                   });
