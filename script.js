let alarm = "";
let alarmsound = new Audio("mixkit-rooster-crowing-in-the-morning-2462.wav");

function showtime() {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  let currentTime = `${hour}:${min}:${sec} ${ampm}`;
  document.getElementById("clock").innerText = currentTime;

  let currentAlarmTime = `${hour}:${min}`;
  if (alarm === currentAlarmTime ) {
    alarmsound.play();
    document.getElementById("alarm-status").innerText = "🔔 Alarm ringing!";
  }
}

setInterval(showtime, 1000);

function setalarm() {
    let input = document.getElementById("set-alarm").value;
    if (input === "") {
      alert("Please choose a time.");
      return;
    }
  
    let [hour, min] = input.split(":");
    hour = parseInt(hour);
  
    let ampm;
    if (hour >= 12) {
      ampm = "PM";
    } else {
      ampm = "AM";
    }
  
    hour = hour % 12;
    hour = hour ? hour : 12;
  
    if (hour < 10) hour = "0" + hour;
  
    alarm = `${hour}:${min}`;
  
    document.getElementById("alarm-status").innerText = `Alarm set for ${alarm} ${ampm}`;
  }
  
