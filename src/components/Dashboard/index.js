import React from 'react';
import './index.css';
import humanBodyFrontal from './human-body-frontal.jpg';
import lungs from './lungs.png';
import tooth from './tooth.png';
import bone from './bone.png';
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";



const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
const heights = [

  [40, 20, 60],
  [30, 70, 50],
  [50, 30, 40],
  [60, 30, 50],
  [70, 60, 30],
  [30, 40, 60],
  [50, 60, 40]
]

const colors = ['#ccc', '#0de2ea', '#3e3d96'];







const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <div className='searchbar-container'>
        <FaSearch />
        <input type='text' placeholder='Search' className="search-input" />
        <FaBell />
      </div>

      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="dashboard-filter">
          <span>This Week</span>

        </div>
      </div>

      <div className="dashboard-main">
        <div className="dashboard-left">
          <div className='dashboard-center'>
            <div className="anatomy-figure">
              <img src={humanBodyFrontal} alt="Anatomy" className='humanbody' />
              <div className="label heart">Healthy Heart</div>
              <div className="label leg">Healthy Leg</div>
            </div>
            <div className="health-cards">
              <div className="card lungs">
                <img src={lungs} alt="Lungs" />
                <div className="card-info">
                  <h4>Lungs</h4>
                  <p>Date: 26 Oct 2021</p>
                  <div className="progress-bar lungs-bar"></div>
                </div>
              </div>
              <div className="card teeth">
                <img src={tooth} alt="Teeth" />
                <div className="card-info">
                  <h4>Teeth</h4>
                  <p>Date: 26 oct 2021</p>
                  <div className="progress-bar teeth-bar"></div>
                </div>
              </div>
              <div className="card bone">
                <img src={bone} alt="Bone" />
                <div className="card-info">
                  <h4>Bone</h4>
                  <p>Date: 26 Oct 2021</p>
                  <div className="progress-bar bone-bar"></div>
                </div>
              </div>
            </div>
          </div>


          <div className="activity-container">
            <div className="head-part">
              <h3>Activity</h3>
              <p>3 appointment on this week</p>
            </div>
            <div className="chart">
              {heights.map((each, i) => (
                <div className="chart-column" key={i}>
                  <div className="bars">
                    {each.map((h, j) => (
                      <div
                        key={j}
                        className="bar"
                        style={{
                          height: `${h}px`,
                          backgroundColor: colors[j]
                        }}
                      ></div>
                    ))}
                  </div>
                  <span className="day-label">{days[i]}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
