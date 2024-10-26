import { useEffect, useState } from 'react';
import './App.css';
import Countdown from 'react-countdown';

function App() {
  const [count, setCount] = useState(5);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img
            src={'https://taqdeer.sa//static_files/2018/07/89-300x129.png'}
            alt=" logo"
          />
        </a>
      </div>
      <h1>
        <span className="loader"></span>
      </h1>
      <div className="card">جاري التحويل للصفحة المطلوبة</div>
      <p className="read-the-docs">جميع الحقوق محفوظة © 2024</p>
    </>
  );
}

export default App;
