import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Start from './components/Start';
import Check from './components/Check';
import Pro from './components/Pro';

function App() {
return(    
<BrowserRouter>
<Routes>
    <Route path='/' element={ <Home></Home>}/>
    <Route path='/starttest' element={ <Start></Start>}/>
    <Route path='/checkcertificate' element={ <Check></Check>}/>
    <Route path='/propricing' element={ <Pro></Pro>}/>
</Routes>
</BrowserRouter>
    )
;
}

export default App;
