import React, { useEffect, useState } from "react";


export default function Pomodoro() {
    const [secondsAmount, setSecondsAmount] = useState(25 * 60)

    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;
  
    useEffect(() => {
      setTimeout(() => {
        setSecondsAmount((secondsAmount) => secondsAmount - 1);
      }, 1000)
    })
  
    return (
        <div className="Pomodoro">
            <div>
                <span>{String(minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span>{String(seconds).padStart(2, '0')}</span>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2020/11/15/18/51/cat-5746875_1280.png"></img>
            </div>
        </div>
    )
}