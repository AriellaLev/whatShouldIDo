window.fb {
  
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '217657201758115',
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });
  }

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      var uid = response.authResponse.userID;
      FB.api('/me', function(response) {
        var name = response.name;
        console.log('Good to see you, ' + response.name + '.');
      });
      
    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook, 
      // but has not authenticated your app
    } else {
      // the user isn't logged in to Facebook.
    }
  });

  // Here we run a very simple test of the Graph API after login is successful. 
  // This testAPI() function is only called in those cases. 
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Good to see you, ' + response.name + '.');
    });
  }
}
