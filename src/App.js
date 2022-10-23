import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/route';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
