import { CgProfile } from "react-icons/cg";
import { RiAddBoxFill } from "react-icons/ri";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import './index.css'


const data = [

    {
        week: 'Mon',
        data: 25,
        times: ['10:00', '11:00', '12:00'],
        isselected: false
    },
    {
        week: 'Tues',
        data: 26,
        times: ['08:00', '09:00', '10:00'],
        isselected: true
    }

    , {
        week: 'Wed',
        data: 27,
        times: ['12:00', ' -- ', '13:00'],
        isselected: false
    },

    , {
        week: 'Thurs',
        data: 28,
        times: ['10:00', '11:00', '--'],
        isselected: false
    },

    {
        week: 'Fri',
        data: 29,
        times: ['--', '14:00', '16:00'],
        isselected: false
    },

    {
        week: 'Sat',
        data: 30,
        times: ['12:00', '14:00', '15:00'],
        isselected: false
    },

    {
        week: 'Sun',
        data: 31,
        times: ['09:00', '10:00', '11:00'],
        isselected: false
    }


]








function CalendarView() {
    return (
        <div className="calendarview-container">
            <div className="headpart">
                <div className="profile">
                    <CgProfile size={30} color="red" />
                </div>
                <div className="add">
                    <RiAddBoxFill size={30} color='#00008b' />
                </div>
            </div>
            <div className="month-card">
                <p className="month">October 2021</p>
                <div>
                    <HiArrowSmLeft size={20} color="00008b" />
                    <HiArrowSmRight size={20} color="00008b" />
                </div>
            </div>

            <div className="calendar-card">

                <ul className="c">
                    {data.map((item) => (
                        <li className={item.isselected ? 'selectedweek' : 'week'} key={item.data}>
                            <p className="weeks">   {item.week}</p>
                            <p className="data">   {item.data}</p>
                            {item.times.map((each, i) => (
                                <p key={i} className="times">{each}</p>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="appoinments-list">

                <div className="dentist-card">
                    <p className="dentist-name">Dentist 🦷</p>
                    <p className="dentist-time">09:00-11:00</p>
                    <p className="dr-name">Dr. Cameron Williamson</p>
                </div>

                <div className="physiotherapy-card">
                    <p className="phys">Physiotherapy Appoinment 💪</p>
                    <p className="phy-time">11:00-12:00</p>
                    <p className="dr">Dr. Kevin Djones</p>
                </div>
            </div>


               <div className='schedules-container'>

            <h2 className='schedules-heading'>The Upcoming Schedule</h2>

            <h3 className='day'>On Thursday</h3>
            <div className='card1'>
                <div className='first-sche'>
                    <p className='s-name'>Health checkup complete 💉</p>
                    <p>11:00 AM</p>
                </div>

                <div className='second-sche'>
                    <p className='s-name'>Ophthalmologist 👁️</p>

                    <p>14:00 PM</p>
                </div>
            </div>

             <h3 className='day'>On Saturday</h3>
            <div className='card1'>
                <div className='first-sche'>
                    <p className='s-name'>Cardiologist 💓</p>
                    <p>12:00 AM</p>
                </div>

                <div className='second-sche'>
                    <p className='s-name'>Neurologist 👨‍⚕️</p>

                    <p>14:00 PM</p>
                </div>
            </div>
        </div>

        </div>
    )
}
export default CalendarView