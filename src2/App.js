import './App.css';
import { red } from 'jest-matcher-utils/node_modules/chalk';
import imageInSrc from "../src/imageInSrc.jpg"



function App() {
  return (
    
    <div className="App">
     <div className="diva">

<h1 classname="titleRed" style={{color:red}}>Your name here</h1>



<img src={imageInSrc} ></img>
<div>
<span>

<img src="/imageInPublic.jpg" ></img>
</span></div>
</div>


<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" ></source>

</video>
    
    </div>
  );
}

export default App;
