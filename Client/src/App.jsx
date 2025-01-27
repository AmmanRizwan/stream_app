import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SignInPage from './page/SignInPage';
import LandPage from './page/LandPage';
import SignUpPage from './page/SignUpPage';
import Footer from './components/Footer';
import Home from './page/HomePage';
import RecentlyAdded from './page/RecentlyAdded';
import TVShow from './page/TVShow';
import Movies from './page/Movies';
import MyList from './page/MyList';
import Nav from './components/Nav';
import NotiPage from './page/NotiPage';
import FAQ from './page/FAQ';
import TermOfUse from './page/TermOfUse';
import WaystoWatch from './page/WaystoWatch';
import ContactUs from './page/ContactUs';
import HelpCenter from './page/HelpCenter';
import Account from './page/Account';
import MediaCenter from './page/MediaCenter';
import Cookie from './page/Cookie';
import Investor from './page/Investor';
import Jobs from './page/Job';
import SpeedTest from './page/SpeedTest';
import LegalNotice from './page/LegalNotice';
import OnlyIAStream from './page/OnlyIAStream';
import Privacy from './page/Privacy';
import CorporateInfo from './page/CorporateInfo';

function App() {
  const ShowNavBar = () => {
    const location = useLocation();
    const setNavBar = location.pathname !== '/signin' && location.pathname !== '/signup';
    return setNavBar ? <Nav /> : null;
  }
  return (
    <>
    <BrowserRouter>
    <ShowNavBar />
    <Routes>

      <Route path='/' element={<LandPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/recentlyadded' element={<RecentlyAdded />} />
      <Route path='/tvshows' element={<TVShow />} />
      <Route path='/movies' element={<Movies /> } />
      <Route path='/mylist' element={<MyList />} />
      <Route path='/notification' element={ <NotiPage />} />
      <Route path='/faq' element={<FAQ />}/>
      <Route path='/termofuse' element={<TermOfUse />}/>
      <Route path='/waystowatch' element={<WaystoWatch />}/>
      <Route path='/contact' element={<ContactUs />}/>
      <Route path='/helpcenter' element={<HelpCenter />}/>
      <Route path='/account' element={<Account />}/>
      <Route path='/mediacenter' element={<MediaCenter />}/>
      <Route path='/cookie' element={<Cookie />}/>
      <Route path='/investor' element={<Investor />}/>
      <Route path='/jobs' element={<Jobs />}/>
      <Route path='/speedtest' element={<SpeedTest />}/>
      <Route path='/legalnotice' element={<LegalNotice />}/>
      <Route path='/onlyiastream' element={<OnlyIAStream />}/>
      <Route path='/privacy' element={<Privacy />}/>
      <Route path='/corporate_info' element={<CorporateInfo />}/>


    </Routes>

    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
