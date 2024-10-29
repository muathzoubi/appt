import { useEffect} from 'react';
import './App.css';

function App() {
useEffect(()=>{
  setTimeout(() => {
    window.location.href="https://tagdeera.vercel.app/"
  }, 5000);
},[])
  return (
    <>
      <div>
        <a href="#" target="_blank">
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
