import './index.css'

function Schedules() {
    return (
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
    )
}
export default Schedules