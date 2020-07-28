import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const now = new Date();
  const [hour, setHour] = useState(now.getHours());
  const [minute, setMinute] = useState(now.getMinutes());
  const [nowText, setNowText] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setHour(now.getHours());
      setMinute(now.getMinutes());

      const nowTextArray = require(`./times/${("0" + hour).slice(-2)}_${(
        "0" + minute
      ).slice(-2)}.json`);
      // const randomNowText =
      //   nowTextArray[Math.floor(Math.random() * nowTextArray.length)];
      const firstText = nowTextArray[0];

      setNowText(firstText);
    }, 1 * 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontSize: 32 }}>
          {nowText.quote_first}
          <code style={{ color: "#61dafb" }}>
            {nowText.quote_time_case}
          </code>{" "}
          {nowText.quote_last}
        </p>
        <p>
          <i>{nowText.title}</i> by {nowText.author}{" "}
        </p>
        <a
          className="App-link"
          href="https://www.instructables.com/id/Literary-Clock-Made-From-E-reader/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspired by Literary Clock E-reader
        </a>
      </header>
    </div>
  );
}

export default App;
