
//initialize array to hold details for modal window.
people = [];

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    for (i in data.results) {
          //define attributes for items returned from api call to append to html document
          let email = "<p>" + data.results[i].email + "</p>"
          let name = "<p>" + data.results[i].name.first + " " + data.results[i].name.last + "</p>"
          let city = "<p>" + data.results[i].location.city + "</p>"
          let img = "<div class='crop'><img src=" + data.results[i].picture.thumbnail + "></div>"
          let phone = "<p>" + data.results[i].cell + "</p>"
          let detailBirthDate = data.results[i].dob
          let readyBirthDate = detailBirthDate.substr(0,10);
          let dob = "<p> Birthday:" + readyBirthDate + "</p>"
          let address = "<p>" + data.results[i].location.street +  " " + data.results[i].location.city +  " " + data.results[i].location.postcode +  " " + data.results[i].nat +  " " + dob + "</p>"

          //push necessary attributes to array so they persist and can be called and add in modal window
          people[i] =  "<div class='photo'>" + img + "</div>" + "<div class='text'>" + name + email+ city + phone + address + "</div>"

          //create body of html document
          $("body").append("<div class=col-" + i  + " id="+ i +">" + img + email + " " + name + city + "</div>")

          //add class to make img round
          $('img').addClass('img-circle');

    }
    //on click open modal window and append biographical data saved in array.
    $('[class^=col-]').click(function(){
      $('#myModal').css('display', 'block')
      let index = $(this).attr('id');
      $('.modal-content').append('<div class="temp">'+ people[index] +'</div>')
      $('img').addClass('img-circle');
    });
    //on close of modal window, remove biodata from element.
    $('.close').click(function() {
      $('#myModal').css("display","none");
      $('.temp').remove();
    });
  }
});
