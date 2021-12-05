import { ChatEngine } from 'react-chat-engine';
import LoginForm from './LoginForm';
import ChatFeed from './components/ChatFeed';
import { useEffect , useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';


const App = () => {
  const [connect, setConnect] = useState('not connected');

  useEffect(async () => {
    const response = await axios('./express_backend');
    console.log(response);
  },[]);


  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    /**{<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>}**/
    <div>
      <div>{connect}</div>
      <ChatEngine
        height='100vh'
        projectID='2e482801-8d27-4347-a1ce-c97a95ff2b42'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </div>
  );
}

export default App;
