import moment from 'moment';
import React, { useState, useEffect } from 'react'


const App = () => {
    const calculateTimeLeft = () => {
        let eventTime = new Date('Thu Sep 14 2022 18:09:32 GMT+0530 (India Standard Time)');
        let convertTime = Date.parse(eventTime)/1000
        let currentTime = (Math.floor(Date.now() / 1000)).toString();
        let leftTime = convertTime - currentTime;
        let duration = moment.duration(leftTime, 'seconds');
        let interval = 1000;
        if (duration.asSeconds() <= 0) {
            clearInterval(interval);
            //window.location.reload(true); //#skip the cache and reload the page from the server
        }
        duration = moment.duration(duration.asSeconds() - 1, 'seconds');
        return (duration.days() + ' Days ' + duration.hours()+ ' Hours ' + duration.minutes()+ ' Minutes ' + duration.seconds() + ' Seconds');
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        },1000);
    });
   

    return (
         
        <div className='timer'>{timeLeft}</div>
    )
}
export default App;
