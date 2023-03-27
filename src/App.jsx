import { BrowserRouter ,  Route, Routes  } from 'react-router-dom';
import Account from './Components/Account/account'
import Climate from './Components/Climate/Wind/Wind'
import ClimateWindy from './Components/Climate/Wind/Windy';
import About from './Components/CompanyInfo/About/About';
import Contact from './Components/CompanyInfo/Contact/Contact';
import Disease from './Components/Disease/disease'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import Home from './Components/Home/home';
import MarketData from './Components/MarketData/marketData'
import MarketDataTable from './Components/MarketData/MarketDataTable';
import MarketDataTableUpload from './Components/MarketData/MarketDataUpload';
import Soil from './Components/Soil/soil'
import Register from './Componentss/User/Register';
import SignIn from './Componentss/User/Signin';


function App() {

  return (
    <>
      <BrowserRouter>
       <div className='overflow-hidden'>
        <Header />
      <main>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/account' element={<Account />} />
            <Route path='/climate' element={<Climate />} />
            <Route path='/soil' element={<Soil />} />
            <Route path='/disease' element={<Disease />} />
              <Route path='/market-data' element={<MarketData />} />
              <Route path='/market-data-table' element={<MarketDataTable />} />
            <Route path='/market-data-upload' element={<MarketDataTableUpload />} />
              
              
            <Route path='/signin' element={<SignIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/climate-winy' element={<ClimateWindy />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={ <Contact />} />
          </Routes>
        </main>
      </div>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
