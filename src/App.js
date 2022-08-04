
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Customer from './Layout/Customer';
import LayoutAdmin from './Layout/LayoutAdmin';

function App() {

  // window.location.reload()
  return (
    <div>
      <Routes>
          <Route path="/*" element={<Customer />} />
          <Route path="/admin/*" element={<LayoutAdmin />} />
          <Route />
      </Routes>
    </div>
  );
}

export default App;
