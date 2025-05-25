
import './App.css';
import CalendarView from './components/CalendarView';
import Dashboard from './components/Dashboard';
import SideBar from './components/Sidebar';
import Schedules from './components/Schedules';

function App() {
  return (
    <div className='container-main'>
      <SideBar/>
      <Dashboard/>
      <div className='right-containers'>
      <CalendarView/>
      {/* <Schedules/> */}
      </div>
    </div>
  );
}

export default App;
