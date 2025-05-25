import { BiSolidDashboard } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import './index.css'

const general = [
    {
        name: 'Dashboard',
        icon: <BiSolidDashboard />
    },
    {
        name: 'History',
        icon: <FaHistory />
    },
    {
        name: 'Calendar',
        icon: <FaCalendarAlt />
    },
    {
        name: 'Appointment',
        icon: <FaSquarePlus />
    },
    {
        name: 'Statistics',
        icon: <FcStatistics />
    }

]

const tools = [
    {
        name: 'Chat',
        icon: <IoChatboxEllipses />
    },
    {
        name: 'Support',
        icon: <FaPhoneAlt />
    }
]

function SideBar() {

    return (
        <div className="sidebar">
            <h1 className="healthcare">Health<span className="healthcare-span">care.</span></h1>
            <section className="general">
                <p className="gen">General</p>
                <ul className="general-list">
                    {general.map((each) => (
                        <li key={each.name} className="item">
                            {each.icon} 
                            {each.name}
                        </li>
                    ))}

                </ul>
            </section>

            <section className="tools">
                <p className="tool">Tools</p>
                < ul className="tools-list">
                    {tools.map((each) => (
                        <li key={each.name} className="item">
                            {each.icon}
                            
                            {each.name}</li>
                    ))}
                </ul>
            </section>

            <div className="settings">
                <IoSettings /> Settings
            </div>
        </div>
    )
}
export default SideBar