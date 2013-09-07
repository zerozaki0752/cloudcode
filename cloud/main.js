// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:


AV.Cloud.define("hello", function(request, response) {
  response.success("hello !" + request.params.name);
});

//注册
AV.Cloud.define('register', function(request, response) {

    var username = request.params.username;
    var password = request.params.password;
    var email = request.params.email;

    if (username && password && email){
                
        
        var user = new AV.User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);
                
        user.signUp(null, {
                success: function(user) {
                    reponse.success("ok");
                },
                error: function(user, error) {
        
                    reponse.error("error");
                    
                }
        });
    }
});

//登录
AV.Cloud.define('login', function(request, response) {
                
                var username = request.params.username;
                var password = request.params.password;

                
                AV.User.logIn(username, password, {
                              success: function(user) {
                              // Do stuff after successful login.
                              },
                              error: function(user, error) {
                              // The login failed. Check error to see why.
                              }
                              });
});
