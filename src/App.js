import './App.css';
import Main from './components/Main';
import more from './images/93855_home_512x512.png'
import ln from './images/1492718749-linkedin_83603.png'
import xx from './images/1690643640twitter-x-icon-png.png'
import fb from'./images/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-21.png'
import yt from './images/youtube_logo_icon_187614.png'
import wf from './images/purepng.com-wifi-icon-blackwifi-iconwifiiconwireless-connection-1701528436080flycm.png'
import apst from './images/apple-app-store-logo.jpg'
import gp from './images/google-play-icon.png'

function App() {

  return (
    <div className="App">
      <div className='header'>
        <img src={more} alt="more" />
        <div className='nameofcompany'>
          <p>McKinsey</p>
          <p>& Company</p>
        </div>
        <div className='navbar'>
          <p>About Us</p>
          <ul>
            <li>Overview</li>
            <li>Who we are</li>
            <p>{'>'}</p>
            <li>Our commitments </li>
            <p>{'>'}</p>
            <li>How we work</li>
            <p>{'>'}</p>
            <li>Alumni</li>
            <li>Media</li>
            <li>McKinsey Blog</li>
          </ul>
        </div>

        <div className='subscribe'>
          Sign In <span>|</span> Subscribe
        </div>

      </div>

      <div className='main'>
        <Main />
      </div>

      <div className='footer'>
        <div className='nameofcompany'>
          <p>McKinsey</p>
          <p>& Company</p>
        </div>
        <div className='subs'>
          <h3>
            Subscribe
          </h3>
          <ul>
            <li>
              Contacts us
            </li>
            <li>
              FAQ
            </li>
            <li>
              Privacy policy
            </li>
            <li>
              Cookie preferences
            </li>
            <li>
              Terms of us
            </li>
          </ul>
        </div>
        <div className='select'>
          <p>Select topics and stay current with our latest insights</p>
          <div>
            <h4>
              Local language information
            </h4>
            <h4>
              Accessibility statement
            </h4>
          </div>
        </div>
        <div className='emali'>
          <div className='subm'>
            <input type="text" placeholder='Email address'/>
            <button>Submit</button>
          </div>
          <div className='media'>
            <img src={ln} alt="linkedn"/>
            <img src={xx} alt="twitter"/>
            <img src={fb} alt="facebook"/>
            <img src={yt} alt="youtube"/>
            <img src={wf} alt="wifi"/>
          </div>
        </div>
        <div className='bottom'>
          <div>
            McKinsey Insights - Get latest thinking on your iPhone, iPad or Android device
          </div>
          <img src={apst} alt="appstore"/>
          <img src={gp} alt="googleplay"/>
        </div>
      </div>

    </div>
  );
}

export default App;
