import './MyAccountSettings.css';
import Sections from '../Sections/Sections';

function MyAccountSettings() {
    return (
        <>
            <Sections name="My Account Settings" />
            <div className="account-settings-container">
                <div className='account-details'>
                    <h2>Divya Charterjee</h2>
                    <h2>Assistant Manager - HR</h2>
                    <div className='company'>
                        <header>Phone / Landline</header>
                        <span>7712248563</span>
                    </div>
                    <div className='change-password'>
                        <a>Change Password</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyAccountSettings;
