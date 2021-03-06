
      
      function showRegister() {
        $("#popup").load("/s/register").show();
      }
      
      function showLogin() {
        $("#popup").load("/s/login").show();
      }

      function showLogout() {
        $.post("/s/logout");
        window.location = '/';
      }
      
      function doLogin() {
        var arr = [];
        $("#popup :input").each(function(idx,elem) {
          if(elem.getAttribute('type') != 'button')
            arr.push(elem.getAttribute('name') + "=" + elem.value);
        });
        
        $.ajax({
          url: "/s/login?" + arr.join('&'),
          type: "POST",
          statusCode: {
            403: function() {
              $("#error").html("Error: Mismatched Passwords");
            },
            401: function() {
              $("#error").html("Error: Username/Password is incorrect");
            },
            200: function() {
              $("#popup").hide();
              location.reload();
            }
          }
        });
      }
      
      function doRegister() {
        var arr = [];
        $("#popup :input").each(function(idx,elem) {
          if(elem.getAttribute('type') != 'button')
            arr.push(elem.id + "=" + elem.value);
        });
        
        $.ajax({
          url: "/s/register?" + arr.join('&'),
          type: "POST",
          statusCode: {
            403: function() {
              $("#error").html("Error: Mismatched Passwords");
            },
            401: function() {
              $("#error").html("Error: Username/Password is incorrect");
            },
            200: function() {
              $("#popup").hide();
              location.reload();
            }
          }
        });
      }
      
