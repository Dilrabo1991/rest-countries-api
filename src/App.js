import React from 'react';
import {  BrowserRouter, Route,  Routes} from 'react-router-dom';
import CountryPage from './components/CountryPage/CountryPage';
import MainPage from './components/main/AllContries';


const App = () => {
  return (<BrowserRouter>
    <Routes>
        <Route exact path="/" element={<MainPage/>} ></Route>
        {/* <Route path="/country/:name" component={<CountryPage/>} /> */}
        <Route path="/country/:name" element={<CountryPage/>} ></Route>
     
  </Routes>
    </BrowserRouter>
  );
}

export default App;
