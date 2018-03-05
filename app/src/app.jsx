import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Sections from './sections.jsx';

class App extends React.Component{
    render(){
        return (
            <main className="wrapper">
                <section className="section parallax bg1">
                    <div className="overlay"></div>
                    <div className="white_box"> 
                    <div className="title">
                        <h1><b className="gold">Un</b><b className="blue">declared</b></h1>
                        <h3><b className="gold">アン</b><b className="blue">ディクレアッド</b></h3>
                        <h4><b className="gold">A Ber</b><b className="blue">keley Visual Novel</b></h4>
                    </div>
                    </div>
                </section>
                <Sections/>
                </main>
    )
    }
}

export default App;