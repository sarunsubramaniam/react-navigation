import './App.css';
import Body from './Body';
import Frame from './Frame'
import Sidebar from './Sidebar';

function App() {
  return (
      <Frame>
        <Sidebar />
        <Body />
      </Frame>
  );
}

export default App;