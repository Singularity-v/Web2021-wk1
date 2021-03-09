//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="body">
        <div class="topcontainer">
          <header class="title">Vegetables</header>
          <div class="right-area">
              <img src="images/btn_facebook.png" alt="fb" class="title-picA"/>
              <img src="images/btn_instagram.png" alt="ig" class="title-picB"/>
              <div class="line"></div>
              <div class="Login">LOGIN</div>
              <div class="Join">JOIN</div>
          </div>
        </div>

        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-list-item">Home</li>
                <li class="nav-list-item">About Me</li>
                <li class="nav-list-item">Vegetables</li>
                <li class="nav-list-item">Online</li>
                <li class="nav-list-item">Contact</li>
            </ul>
        </nav>

        <div class="pumpkin">
                <img src="images/img_main_pumpkin.png" alt="pumpkin" class="nav-picc"/>
        </div>

        <div class="button-container">
          <aside class="aside">
            <p class="box">Vegetables</p>
            <div class="div-pic">
                <img src="images/img_vegetables_pepper.png" alt="pepper" class="pepper"/>
                <img src="images/img_vegetables_carrot.png" alt="carrot" class="carrot"/>
                <img src="images/img_vegetables_corn.png" alt="corn" class="corn"/>
            </div>
          </aside>
          <aside class="aside" styles="padding:15px">
              <p class="box">Contact</p>
              <div class="words">
                <p class="for">For any questions or suggestions about Vegetables, Vegetables Club or your 
                        online order you can contact Vegetables Customer Service by phone, email 
                        or post and we’ll be happy to help.</p>

                <div class="line2"></div>
                <p class="email">E-mail : Vegetables@aaabbccc.com<br/>PHONE : +886-123-456-789</p>       
              </div>
          </aside>
        </div>

      </header>
    </div>
  );
}

export default App;
