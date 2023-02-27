import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './Router/Routes/Routes';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
  }); 
    AOS.refresh();
  }, []);


  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
