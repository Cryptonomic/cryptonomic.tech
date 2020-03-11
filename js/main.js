jQuery(document).ready(function ($) {
  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
      $('#mobile-nav-toggle').addClass('toggle-menu-bottom-top');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#mobile-nav-toggle').removeClass('toggle-menu-bottom-top');      
      $('#header').removeClass('header-fixed');
      
    }
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }



  // Send Email

  function nl2br (str) {
      return str.replace(/\r\n|\r|\n/g,"<br>");;
  };
  $('.sendEmail').click(function(e){
    var name    = $('#username').val();
    var email   = $('#email').val();
    var subject = $('#subject').val();
    var comment = $('#comment').val();

    if(!email){      
      alert("Please enter Email!");
      return
    } else if(email){
      const regex = /[@]\w+[.]\w+/g;
      const found = email.match(regex);
      console.log(found)
      if(!found) {
        alert("Please enter correct email!");
        return
      }      
    };

    if(!name){
      alert("Please enter your name!");
      return
    }

    if(!subject){
      alert("Please enter subject!");
      return
    }

    if(!comment){
      alert("Please enter comment!");
      return
    }
    
    var mailTemplate = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>"+
                          "<html>"+
                            "<head>"+
                              "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'/>"+
                              "<title>Cryptonomic</title>"+
                              "<meta name='viewport' content='width=device-width, initial-scale=1.0'/>"+
                            "</head>"+
                            "<body style='margin: 0; padding: 0;'>"+
                              "<table align='center' cellpadding='0' cellspacing='0' width='600' style='border-collapse: collapse; -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);'>"+
                                "<tr>"+
                                  "<td align='center' bgcolor='#70bbd9' style='padding: 100px 0 30px 0;'>"+                                
                                  "</td>"+
                                "</tr>"+
                                "<tr>"+
                                  "<td bgcolor='#ffffff' style='padding: 40px 30px 40px 30px;'>"+
                                    "<table cellpadding='0' cellspacing='0' width='100%'>"+
                                      "<tr>"+
                                      "<td>"+
                                        "<h1 style='text-align: center;'>"+subject+"</h1>"+
                                      "</td>"+
                                      "</tr>"+
                                      "<tr>"+
                                      "<td style='padding: 10px 0 10px 0;'>"+
                                        "<h4 style='text-align: center;>My name is "+name+"</h4>"+
                                      "</td>"+
                                      "</tr>"+
                                      "<tr>"+
                                      "<td style='padding: 10px 100px 10px 100px;'>"+
                                        "<h4 style='text-align: center;'>"+nl2br(comment)+"</h4>"+
                                      "</td>"+
                                      "</tr>"+                                
                                    "</table>"+
                                  "</td>"+
                                "</tr>"+  
                                "<tr>"+
                                  "<td align='center' bgcolor='#70bbd9' style='padding: 100px 0 30px 0;'>"+                                
                                  "</td>"+
                                "</tr>"+                           
                              "</table>"+
                            "</body>"+
                          "</html>";
    var data = {
      "personalizations": [{
        "to": [{
          "email": "developer0623@yahoo.com"
        }]
      }],
      "from": {
        "email": "fomafomin721@gmail.com"        
      },
      "content": [{
        "type": "text/html", 
        "value": mailTemplate
      }]
    };
    var url = "https://api.sendgrid.com/v3/mail/send";    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    
    xhr.setRequestHeader('Authorization', 'Bearer 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');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function (oEvent) { 
      if (xhr.readyState === 4) {  
          if (xhr.status === 200) {  
            alert("Successfully Sent!") 
          } else {  
            alert("Send failed. Happens network issue. Please try again!");  
          }  
      }  
  };
    xhr.send(JSON.stringify(data));


    console.log(nl2br(comment))
  })

});
