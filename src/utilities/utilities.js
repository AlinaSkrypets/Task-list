import { mainConstants } from '../constants';

//format time
export const formatTime = (unformattedTime=new Date()) => {
    let hours = unformattedTime.getHours();
    let minutes = unformattedTime.getMinutes();
    if (minutes<=9) {
        minutes=`0${minutes}`;
    }
    let seconds = unformattedTime.getSeconds();
    if (seconds<=9) {
        seconds=`0${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`
}

//format date
export const formatDate = (unformattedDate=new Date()) => {
    //current year
    let currentYear = unformattedDate.getFullYear();

    //current month
    const monthNames = mainConstants.monthNames;//array with month names
    let currentMonth = monthNames[unformattedDate.getMonth()];

    //current day
    let currentDay = unformattedDate.getDate();

    //return current date dd:mm:yy
    return `${currentDay} ${currentMonth} ${currentYear}`
}
