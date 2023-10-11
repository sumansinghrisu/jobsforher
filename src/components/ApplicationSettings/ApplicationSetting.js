import './ApplicationSetting.css';
import Sections from '../Sections/Sections';

function ApplicationSetting() {
    return (
        <>
            <Sections name="Application Settings" />
            <div className="application-settings-container">
                <div className='application-details'>
                    <h2>Receive job applications via</h2>
                    <form>
                        <div className="radio-option">
                            <input type="radio" id="dashboardOnly" name="applicationMethod" checked />
                            <label htmlFor="dashboardOnly">
                                <span>Only on my dashboard</span>
                            </label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id="emailAndDashboard" name="applicationMethod" />
                            <label htmlFor="emailAndDashboard">
                                <span>Email and on my dashboard</span>
                            </label>
                        </div>
                    </form>
                    <div className='notes'>
                        <span>*Please note, this setting will not impact your old</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApplicationSetting;
