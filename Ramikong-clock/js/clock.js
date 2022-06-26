$(function() {
  setInterval(function() {
    let d = new Date();
    let month = (d.getMonth() + 1);
    let date = d.getDate();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    console.log(month, date);
    console.log(hour, min, sec);
    

    if(month < 10) {
      month = '0' + month;
    }

    if(date < 10) {
      date = '0' + date;
    }

    if(hour < 10) {
      hour = '0' + hour;
    }

    if(min < 10) {
      min = '0' + min;
    }

    if(sec < 10) {
      sec = '0' + sec;
    }

    $('#mth').html(month);
    $('#d').html(date);
    $('#h').html(hour);
    $('#m').html(min);
    $('#s').html(sec);
  })
})