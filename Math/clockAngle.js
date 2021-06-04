var angleClock = function(hour, minutes) {
    if (hour === 12) hour=0;
    if (minutes === 60) {
        hour = 1;
        minutes = 0;
    }
    if (hour >= 12) hour -= 12;
    
    let hourAngle = 0.5*(hour*60 + minutes);
    let minAngle = 6*(minutes);
    let angle = Math.abs(hourAngle - minAngle);
    return Math.min(angle, 360-angle);
};
