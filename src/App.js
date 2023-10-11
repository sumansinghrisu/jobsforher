
import Header from './components/Header/Header';
import MyAccountSettings from './components/MyAccountSettings/MyAccountSettings';
import MyProfile from './components/MyProfile/MyProfile';
import Title from './components/Title/Title';
import './App.css';
import ApplicationSetting from './components/ApplicationSettings/ApplicationSetting';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <MyProfile />
      <div className='account-settings'><MyAccountSettings /></div>
      <div className='application-settings'><ApplicationSetting /></div>
      <Footer />
    </div>
  );
}

export default App;
