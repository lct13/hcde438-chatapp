import logo from './logo.svg';
import Camera from 'react-snap-pic';
import './App.css';
import NamePicker from './NamePicker';
import TextInput from './TextInput';
import Message from './Message';
import { useState } from "react";

function App() {
  const [name, setName] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showCamera, setShowCamera] = useState([false])

  function pickName(newName) {
    if (!newName) return;

    setName(newName);
  }
  // runs when send button is clicked
  function sendMsg(text) {
    if (!text) return;
    //create new message object w time and username;
    const newMessage = {
      text: text,
      time: Date.now(),
      name: name,
    }
    // ... -> spread (include all the current items in messages)
    setMessages([...messages, newMessage]);
  }

  function takePicture(img) {
    console.log(img);
    setShowCamera(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-name'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Chatter</p>
        </div>
        <NamePicker pickName={pickName}/>
      </header>

      <div className='messages'>
        {messages.map((msg, i)=>{
          setTimeout(()=>{
            window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
          }, 100); //wait 100ms for the new bubble to have been created... 
          return <Message {...msg} key={i} />;
          //return <div className='message-bubble' key={i}>{msg}</div>
        })}
      </div>

      {showCamera && <Camera takePicture={takePicture} />}

      <TextInput sendMsg={sendMsg}
        showCamera={()=>setShowCamera(true)}
      />
    </div>
  );
}

export default App;
