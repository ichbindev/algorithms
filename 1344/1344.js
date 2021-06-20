/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    // get hours and minutes as a percent
    // angle of that hand relative to 12 will be that % of 360
    const minutePercent = minutes / 60;
    const hourPercent = (hour + minutePercent) / 12;
    // calculate the degrees
    const minuteDeg = minutePercent * 360;
    const hourDeg = (hourPercent * 360);
    
    // subtracting the degrees of the hands will get the difference between
    const hourMinuteDifference = Math.abs(hourDeg - minuteDeg);
    const minuteHourDifference = Math.abs(minuteDeg - hourDeg);
    
    // there is the possibility that the above are both the obtuse angle
    // also consider the accute by subtracting from 360
    return Math.min(
        hourMinuteDifference, 
        360 - hourMinuteDifference, 
        minuteHourDifference, 
        360 - minuteHourDifference);
};
