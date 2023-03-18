let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displyTime(){
    let date = new Date();

    //getting hour ,mins,secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let hhRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = 'rotate(${hRotation}deg)';
    min.style.transform ='rotate(${mRotation}deg)';
    sec.style.transform = 'rotate(${sRotation}deg';

}
settInterval(displyTime, 1000);