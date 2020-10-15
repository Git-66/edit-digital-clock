import React ,{useState}from 'react';

const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
 
    const [Ctime, setCtime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }
    setInterval(updateTime,1000)
    return(
        <div>
            <h1>London Clock</h1>
            <h2>{time}</h2>
            {/* <h3>{}</h3> */}
        </div>
    )
}

export default DigitalClock




