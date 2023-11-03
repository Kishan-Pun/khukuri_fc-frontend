import React, { useState, useCallback } from "react";
// import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Navbar from "./components/header/NavBar";
import Navbar from "./components/header/NavBar";
import Index from "./components/body/pages/index";
import Footer from "./components/footer/Footermain";
import About from "./components/body/pages/aboutus";
import Player from "./components/body/pages/players";
import Contact from "./components/body/pages/contact";
import Login from "./components/body/pages/login";
import Signin from "./components/body/pages/signin";
import { AuthContext } from "./components/body/components/context/auth-context";

import Adminindex from "./components/body/components/Admin/pages/adminindex";
import Shortaboutform from "./components/body/components/Admin/pages/shortaboutform";
import Longfcaboutform from "./components/body/components/Admin/pages/longfcaboutform";
import Longteamaboutform from "./components/body/components/Admin/pages/longteamaboutform";
import Contactform from "./components/body/components/Admin/pages/contactsform";
import Newsform from "./components/body/components/Admin/pages/newsform";
import Playerform from "./components/body/components/Admin/pages/playerform";
import CandMform from "./components/body/components/Admin/pages/candmform";

import Shortabouttable from "./components/body/components/Admin/pages/Table/shortabouttable";
import Longfcabouttable from "./components/body/components/Admin/pages/Table/longfcabouttable";
import Longteamabouttable from "./components/body/components/Admin/pages/Table/longteamabouttable";
import Contacttable from "./components/body/components/Admin/pages/Table/contacttable";
import Newstable from "./components/body/components/Admin/pages/Table/newstable";
import Playertable from "./components/body/components/Admin/pages/Table/playertable";
import CandMtable from "./components/body/components/Admin/pages/Table/candmtable";
import Contactquerytable from "./components/body/components/Admin/pages/Table/contactquerytable";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if(isLoggedIn){
    routes = (
      <Routes>
      <Route exact path="/" element={<Index />} />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/players" element={<Player />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/admin/login" element={<Login />} />
          <Route exact path="/admin/signin" element={<Signin />} />

          <Route exact path="/admin" element={ <Adminindex /> } />
          <Route exact path="/admin/shortaboutform" element={ <Shortaboutform /> } />
          <Route exact path="/admin/longfcaboutform" element={ <Longfcaboutform/> } />
          <Route exact path="/admin/longteamaboutform" element={ <Longteamaboutform/> } />
          <Route exact path="/admin/contactsform" element={ <Contactform/> } />
          <Route exact path="/admin/newsform" element={ <Newsform/> } />
          <Route exact path="/admin/playerform" element={ <Playerform/> } />
          <Route exact path="/admin/candmform" element={ <CandMform/> } />

          <Route exact path="/admin/shortabouttable" element={ <Shortabouttable/> } />
          <Route exact path="/admin/longfcabouttable" element={ <Longfcabouttable/> } />
          <Route exact path="/admin/longteamabouttable" element={ <Longteamabouttable/> } />
          <Route exact path="/admin/contactstable" element={ <Contacttable/> } />
          <Route exact path="/admin/newstable" element={ <Newstable/> } />
          <Route exact path="/admin/playertable" element={ <Playertable/> } />
          <Route exact path="/admin/candmtable" element={ <CandMtable/> } />
          <Route exact path="/admin/contactquerytable" element={ <Contactquerytable/> } />
    </Routes>
    );
  }else{
    routes = (
    <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/aboutus" element={<About />} />
          <Route exact path="/players" element={<Player />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/admin/login" element={<Login />} />
          <Route exact path="/admin/signin" element={<Signin />} />
          
    </Routes>
    )
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedin: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Navbar />
          {routes}
        <Footer />
      </Router>
    </AuthContext.Provider>
  );


  // return (
  //   <AuthContext.Provider
  //     value={{ isLoggedin: isLoggedIn, login: login, logout: logout }}
  //   >
  //     <Router>
  //       <Navbar />
  //       <Routes>
  //         <Route exact path="/" element={<Index />} />
  //         <Route exact path="/aboutus" element={<About />} />
  //         <Route exact path="/players" element={<Player />} />
  //         <Route exact path="/contact" element={<Contact />} />
  //         <Route exact path="/admin/login" element={<Login />} />
  //         <Route exact path="/admin/signin" element={<Signin />} />

  //         <Route exact path="/admin" element={ <Adminindex /> } />
  //         <Route exact path="/admin/shortaboutform" element={ <Shortaboutform /> } />
  //         <Route exact path="/admin/longfcaboutform" element={ <Longfcaboutform/> } />
  //         <Route exact path="/admin/longteamaboutform" element={ <Longteamaboutform/> } />
  //         <Route exact path="/admin/contactsform" element={ <Contactform/> } />
  //         <Route exact path="/admin/newsform" element={ <Newsform/> } />
  //         <Route exact path="/admin/playerform" element={ <Playerform/> } />
  //         <Route exact path="/admin/candmform" element={ <CandMform/> } />

  //         <Route exact path="/admin/shortabouttable" element={ <Shortabouttable/> } />
  //         <Route exact path="/admin/longfcabouttable" element={ <Longfcabouttable/> } />
  //         <Route exact path="/admin/longteamabouttable" element={ <Longteamabouttable/> } />
  //         <Route exact path="/admin/contactstable" element={ <Contacttable/> } />
  //         <Route exact path="/admin/newstable" element={ <Newstable/> } />
  //         <Route exact path="/admin/playertable" element={ <Playertable/> } />
  //         <Route exact path="/admin/candmtable" element={ <CandMtable/> } />
        
  //       </Routes>
  //       <Footer />
  //     </Router>
  //   </AuthContext.Provider>
  // );
}

export default App;
