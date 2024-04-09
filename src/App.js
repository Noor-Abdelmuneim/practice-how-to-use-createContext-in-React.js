import './App.css';
import List1 from './Components/List1';
import List2 from './Components/List2';
import { StoreInfo } from './Store/Store';

function App() {
  return (
    <div>
      <StoreInfo>
      <ul>
            <li><List1/></li>
            <li><List2/></li>
        </ul>

      </StoreInfo>
    </div>
  );
}

export default App;
