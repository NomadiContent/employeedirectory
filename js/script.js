
people = [];

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    for (i in data.results) {
          let email = "<p>" + data.results[i].email + "</p>"
          let name = "<p>" + data.results[i].name.first + " " + data.results[i].name.last + "</p>"
          let city = "<p>" + data.results[i].location.city + "</p>"
          let img = "<div class='crop'><img src=" + data.results[i].picture.thumbnail + "></div>"
          let phone = "<p>" + data.results[i].cell + "</p>"
          let dob = "<p>" + data.results[i].dob + "</p>"
          let address = "<p>" + data.results[i].location.street +  " " + data.results[i].location.city + data.results[i].location.city + data.results[i].location.postcode + "</p>"
          people[i] =  "<div class='photo'>" + img + "</div>" + "<div class='text'>" + name + email+ city + phone + address + "</div>"
          $("body").append("<div class=col-" + i  + " id="+ i +">" + img + email + " " + name + city + "</div>")
          $('img').addClass('img-circle');

    }
    $('[class^=col-]').click(function(){
      $('#myModal').css('display', 'block')
      let index = $(this).attr('id');
      $('.modal-content').append('<div class="temp">'+ people[index] +'</div>')
      $('img').addClass('img-circle');
    });
    $('.close').click(function() {
      $('#myModal').css("display","none");
      $('.temp').remove();
    });
  }
});
