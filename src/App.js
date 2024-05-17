import React, { useState, useEffect } from 'react';
import './App.css';
const WEEKDAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const BDAY = new Date("10/02/2003").getTime();
const OPTIONS = { day: '2-digit', month: 'long', year: 'numeric' };
const IMAGES = require.context('./images', true, /\.(png|jpe?g|svg)$/);
const WORKCUTS = JSON.parse(`{
  "Calender": "https://calendar.google.com/",
  "Canvas" : "https://canvas.nus.edu.sg/",
  "Edurec" : "https://myedurec.nus.edu.sg/psp/cs90prd/?cmd=login&languageCd=ENG&",
  "Translate" : "https://translate.google.com/",
  "Drive" : "https://drive.google.com/drive/u/1/my-drive",
  "Gmail": "https://mail.google.com/mail/u/0/#inbox",
  "git" : "https://github.com/"
}`);
const PLAYCUTS = JSON.parse(`{
  "Youtube": "https://www.youtube.com/"
}`);
const TOTALBG = 70;

function DaysBygone(date) {
  return Math.floor((date.getTime() - BDAY) / (1000 * 60 * 60 * 24));
}

function DateFmt(date) {
  return date.toLocaleDateString('en-GB', OPTIONS);
}

function Current({ date }) {
  let elapsed = DaysBygone(date);
  return <div>
    <div className="day">DAY {elapsed}</div>
    <div className="time">{date.toLocaleTimeString()}<br/>{WEEKDAY[date.getDay()]}, {DateFmt(date)}</div>
    </div>
}

function Shortcut({ name, link }) {
  const img = IMAGES('./' + name + ".png");
  return <a href={link} className="shortcut"><img src={img} width="64" height="64" /></a>
}


function ShortcutBar() {
  const workcuts = [];
  for (let key in WORKCUTS) {
    workcuts.push(<Shortcut key={key} name={key} link={WORKCUTS[key]}/>)
  }
  const playcuts = [];
  for (let key in PLAYCUTS) {
    playcuts.push(<Shortcut key={key} name={key} link={PLAYCUTS[key]}/>)
  }
  return <div>{workcuts}<br/>{playcuts}</div>
}

function BackgroundChanger() {
  const [backgroundImage, setBackgroundImage] = useState(`url(images/WE/${Math.ceil(Math.random() * TOTALBG)}.jpg)`);

  useEffect(() => {
    const backgroundStyle = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${backgroundImage}`;
    document.body.style.backgroundImage = backgroundStyle;
  }, [backgroundImage]);

  const changeBackground = () => {
    const newBackground = `url(images/WE/${Math.ceil(Math.random() * TOTALBG)}.jpg)`;
    setBackgroundImage(newBackground);
  };

  return (
    <button className="button" onClick={changeBackground}>↺</button>
  );
}
function App() {
  const [currTime, setCurrTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
          <Current date={currTime}/>
          <ShortcutBar/>
          <BackgroundChanger/>
      </header>
    </div>
  );
}

export default App;
