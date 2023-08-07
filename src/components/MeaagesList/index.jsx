import { useSelector } from 'react-redux';
import { Message } from '../Message';
import { TextArea } from './../TextArea/index';
import './style.css';

function App() {
  const messages = useSelector((state) => state.messages)

  return (
    <div className="container">
      <div className="messages-list">
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
      <TextArea />
    </div>
  );
}

export default App;
