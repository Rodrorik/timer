const year = 2024;
const month = 12;
const day = 29;
const hour = 11;
const minute = 45;
const second = 50;


function preciseTimeAgo(currentdate) {   


    let years = currentdate.getFullYear() - year;
    let months = currentdate.getMonth() - month + 1;
    if (months < 0){
        months += 12;
        years -= 1;
    };
    let days = currentdate.getDate() - day;
    if (days < 0){
        if (currentdate.getMonth() === 0) {
            days += 31;
        } else if (currentdate.getMonth() === 1) {
            days += 31;
        } else if (currentdate.getMonth() === 2) {
            days += 28;
        } else if (currentdate.getMonth() === 3) {
            days += 31;
        } else if (currentdate.getMonth() === 4) {
            days += 30;
        } else if (currentdate.getMonth() === 5) {
            days += 31;
        } else if (currentdate.getMonth() === 6) {
            days += 30;
        } else if (currentdate.getMonth() === 7) {
            days += 31;
        } else if (currentdate.getMonth() === 8) {
            days += 31;
        } else if (currentdate.getMonth() === 9) {
            days += 30;
        } else if (currentdate.getMonth() === 10) {
            days += 31;
        } else {
            days += 30;
        } 
        months -= 1;
    };
    let hours = currentdate.getHours() - hour;
    if (hours < 0){
        hours += 24;
        days -= 1;
    };
    let minutes = currentdate.getMinutes() - minute;
    if (minutes < 0){
        minutes += 60;
        hours -= 1;
    };
    let seconds = currentdate.getSeconds() - second;
    if (seconds < 0){
        seconds += 60;
        minutes -= 1;
    };
    
    
    
    
    
    let r =`${years} rok${years === 1 ? '' : (years >= 2 && years <= 4) ? 'y' : 'ov'}`;
    let m =`${months} mesiac${months === 1 ? ' ' : (months >= 2 && months <= 4) ? 'e' : 'ov'}`;
    let d =`${days} d${days === 1 ? 'eň' : (days >= 2 && days <= 4) ? 'ni' : 'ní'}`;
    let h =`${hours} hod${hours === 1 ? 'ina' : (hours >= 2 && hours <= 4) ? 'iny' : 'ín'}`;
    let mi =`${minutes} minút${minutes === 1 ? 'a' : (minutes >= 2 && minutes <= 4) ? 'y' : ''}`;
    let s =`${seconds} sek${seconds === 1 ? 'unda' : (seconds >= 2 && seconds <= 4) ? 'undy' : 'únd'}`;

    return (
        r + '<br>' +
        m + '<br>' +
        d + '<br>' +
        h + '<br>' +
        mi + '<br>' +
        s
    );
}

// ---- Update every second ----
const el = document.getElementById('timeago');
function update() {
    var currentdate = new Date(); 
    el.innerHTML = preciseTimeAgo(currentdate);
}
update();
setInterval(update, 10);
