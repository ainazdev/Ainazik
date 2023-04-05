import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Every from "./components/Every/Every";
import Extra from "./components/Extra/Extra";
import Team from "./components/Team/Team";
import Latest from "./components/Latest/Latest";
import Footer from "./components/Footer/Footer";

function App() {
    const [mode,setMode] = useState <boolean>(false)
    return (


            <div style={{background: mode ? "black" : ""}}>
                <Header mode={mode} setMode={setMode} />

            <Hero/>
            <Service/>
            <Every/>
            <Extra/>
            <Team/>
            <Latest/>
            <Footer/>
        </div>
    );
}

export default App;
