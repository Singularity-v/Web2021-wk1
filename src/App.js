import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="bg_1">
            <div className="top">
                <div style="display:flex;justify-content: center;align-items: center;flex-direction: column;margin-left: -12px;">
                    <div className="top_line"></div>
                    <a href="index.html"><p className="top_w">Ataraxia</p></a>
                </div>
                <ul style="width:92vw;">
                    <li>
                        <a href="pages/about.html">About</a>
                    </li>
                    <li>
                        <a href="pages/poem.html">Poem</a>
                    </li>
                    <li>
                        <a href="#" style="font-size: 3.5vw;font-weight: bold;">Vie</a>
                    </li>
                    <li>
                        <a href="pages/works.html">Works</a>
                    </li>
                    <li>
                        <a href="pages/community.html">Community</a>
                    </li>
                    <a href="#"><img style=" margin-left: 7vw; width: 1vw;" src="img/search.png" /> </a>
                    
                </ul>
            </div>
            <div className="main">
                <div className="box pos">
                    <div style="width: 5%;height:20%"></div>                        
                        <div className="left pos" style="align-self: center;">
                            <div className="left_w " style="text-align: right;align-self: center;">
                                <b>Ataraxia</b>
                                <br/>
                                <p><br/>Noun (Greek)</p>
                                <p>
                                <br/>The state of blissful
                                <br/>and serene calmness.
                                </p>
                                <br/>
                                <br/>
                                <br/>
                                <br/><br/>
                            </div>
                            <div className="square"></div>
                        </div>
                        <div style="width: 5%;height:20%"></div>
                        <div className="right_img"> 
                            <div className="square_bg" style="align-self: flex-end;"></div>
                            <div className="ww">
                                <div className="wave">
                                    <p style="z-index: 2;color: #FF7076;font-size: 1.2vw;">Hoping everyone who's browsing this website would enjoy it.</p>
                                </div>
                            </div>
                                
                        </div>
                        <div class="contact" style="align-self: center;">
                            <div id="fb_top" class="icon"><a href="#"></a></div>
                            <div id="ig_top" class="icon"><a href="#"></a></div>
                            <div id="tw_top" class="icon"><a href="#"></a></div>
                            <div id="pin_top" class="icon"><a href="#"></a></div>
                        </div>
                    </div>
                </div>
                <div className="big_w">
                    <b >Vie</b>
                </div>
                <div className="box">
                    <img src="img/write.png" style="width: 70%;height: auto;"/>

                    <div className="right_w" style="text-align: right;font-size: 1.2vw;">
                        <p>
                        Being happy doesn't 
                        <br/>depend on any external
                        <br/>condition, it is governed
                        <br/>by our mental attitude.
                        <br/>
                        <br/>DALE CARNGLE
                        </p>
                    </div>
                    <div className="square"></div>
                </div>
                <div className="big_w">
                    <b >Ataraxia</b>
                </div>
            </div>
       
        <div className="bottom">
            <div className="line" >
                <b className="Famous">Famous Poets In History</b>
                <div className="bottom_line"></div>
            </div>
            <div className="box1">
                <div className="right_w" style="text-align: right;font-size: 1.2vw;">
                    <p>
                    There are poems
                    <br/>inside of you
                    <br/>that paper can't
                    <br/>handle.
                    <br/>
                    <br/> Y.Z
                    </p>
                </div>
                <div className="poet">
                    <img src="img/WILLIAM-SHAKESPEARE.png"/>
                    <div className="top_line"></div>
                    <p>William Shakespeare</p>
                </div>
                <div className="poet">
                    <img src="img/Sylvia Plath.png"/>
                    <div className="top_line"></div>
                    <p>Sylvia Plath</p>
                </div>
                <div className="poet">
                    <img src="img/Pablo Neruda.png"/>
                    <div className="top_line"></div>
                    <p>Pablo Neruda</p>
                </div>
            </div>

        </div>
      </header>
    </div>
  );
}

export default App;
