// import logo from './logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import './index.css'
import { Home } from './component/Home';
import {Route, Routes} from 'react-router-dom';
import About from './component/About';
import { Service } from './component/Service';
import { Contact } from './component/Contact';
import { Navbar } from './component/Navbar';
import {Listing} from './component/Listing';
import {ListingDetailPage} from './component/ListingDetailPage';

export default function App() {
  return(
    
     <div>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='service' element={<Service/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='/listing' element={<Listing/>} />
        <Route path='/:country/:state/:pid' element={<ListingDetailPage/>} />
        <Route path='*' element={<Home/>}/>
     </Routes>
     </div>
    
  )
}
// npm install bootstrap@latest
