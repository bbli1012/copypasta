import { ChatEngine } from 'react-chat-engine';
import LoginForm from './LoginForm';
import ChatFeed from './components/ChatFeed';

import logo from './logo.svg';
import './App.css';


const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    /**{<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>}**/
    <ChatEngine
      height='100vh'
      projectID='2e482801-8d27-4347-a1ce-c97a95ff2b42'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
