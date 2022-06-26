$(function() {
  setInterval(function() {
    let d = new Date();
    let year = d.getFullYear();
    let month = (d.getMonth() + 1);
    let date = d.getDate();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let amp = d.getHours();
    console.log(year, month, date);
    console.log(amp, hour, min, sec);
    

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

    if(amp >= 13) {
      amp = "오후";
    } else {
      amp = "오전";
    }

    $('#y').html(year);
    $('#mth').html(month);
    $('#d').html(date);
    $('#amp').html(amp);
    $('#h').html(hour);
    $('#m').html(min);
    $('#s').html(sec);
  })
})