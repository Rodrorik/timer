// ---- Replace this with your epoch timestamp (ms since 1970) ----
const epochMs = 1735472749700; // example timestamp

// ---- Utility to convert difference to precise string ----
function preciseTimeAgo(ms) {
    let miliseconds = ms
    const years   = Math.floor(miliseconds / (365.25 * 24 * 60 * 60 * 1000));
    miliseconds -= years * 365.25 * 24 * 60 * 60 * 1000;
    const months  = Math.floor(miliseconds / (30.44 * 24 * 60 * 60 * 1000));
    miliseconds -= months * 30.44 * 24 * 60 * 60 * 1000;
    const weeks   = Math.floor(miliseconds / (7 * 24 * 60 * 60 * 1000));
    miliseconds -= weeks * 7 * 24 * 60 * 60 * 1000;
    const days    = Math.floor(miliseconds / (24 * 60 * 60 * 1000));
    miliseconds -= days * 24 * 60 * 60 * 1000;
    const hours   = Math.floor(miliseconds / (60 * 60 * 1000));
    miliseconds -= hours * 60 * 60 * 1000;
    const minutes = Math.floor(miliseconds / (60 * 1000));
    miliseconds -= minutes * 60 * 1000;
    const seconds = Math.floor(miliseconds / 1000);     
    let r =`${years} rok${years === 1 ? '' : (years >= 2 && years <= 4) ? 'y' : 'ov'}`;
    let m =`${months} mesiac${months === 1 ? ' ' : (months >= 2 && months <= 4) ? 'y' : 'ov'}`;
    let w =`${weeks} týžd${weeks === 1 ? 'eň' : (weeks >= 2 && weeks <= 4) ? 'ne' : 'ov'}`;
    let d =`${days} d${days === 1 ? 'eň' : (days >= 2 && days <= 4) ? 'ni' : 'ní'}`;
    let h =`${hours} hod${hours === 1 ? 'ina' : (hours >= 2 && hours <= 4) ? 'iny' : 'ín'}`;
    let mi =`${minutes} minút${minutes === 1 ? 'a' : (minutes >= 2 && minutes <= 4) ? 'y' : ''}`;
    let s =`${seconds} sek${seconds === 1 ? 'unda' : (seconds >= 2 && seconds <= 4) ? 'undy' : 'únd'}`;

    return (
        r + '<br>' +
        m + '<br>' +
        w + '<br>' +
        d + '<br>' +
        h + '<br>' +
        mi + '<br>' +
        s
    );
}

// ---- Update every second ----
const el = document.getElementById('timeago');
function update() {
    const diff = Date.now() - epochMs;
    el.innerHTML = preciseTimeAgo(diff);
}
update();
setInterval(update, 50);
