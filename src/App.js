import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import {Transactions} from "./pages/Transactions";
import { SchedulesPage } from "./pages/SchedulesPage";
import { Users } from "./pages/Users";
import { Settings } from "./pages/Settings";
import { Help } from "./pages/Help";
import { ContactUs } from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes>
            <Route path="/" element={<SignUp/>} />
            <Route path="/mainpage" element={<MainPage/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/transactions" element={<Transactions/>} />
            <Route path="/schedulespage" element={<SchedulesPage/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/help" element={<Help/>} />
            <Route path="/contactus" element={<ContactUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
