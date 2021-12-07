import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import { useEffect , useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';


const App = () => {
  const [connect, setConnect] = useState('not connected');

  useEffect(() => {
    //const response = await axios('./express_backend');
    // const response = getData();
    // const response = await axios('./testNewChat');
    // console.log(response);
  },[]);

  const getData = async () => {

    const authObject = { 'Project-ID': '2e482801-8d27-4347-a1ce-c97a95ff2b42', 'User-Name': 'blue', 'User-Secret': 'sky'};
    const bodyObject = {
      "title": "Surprise Chat",
      "is_direct_chat": false
    }

    try {
        const data = await axios.post('https://api.chatengine.io/chats/', bodyObject, { headers: authObject });
        return data;
    } catch (error) {
        console.log(`new chat error ${error}`);
    }
  }

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    /**{<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>}**/
    <div>
      <div>
        <button onclick>Click</button>
      </div>
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
