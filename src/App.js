import logo from './logo.svg';
import './App.css';
import DebtInput from './DebtInput';
import DebtTotal from './DebtTotal';
import Payments from './Payments';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
  border: '2px solid red'
}
function App() {
  return (
    <div className="App">
        <Container>
          {/*debt input -> input and submit button
          list - show debt items -> name $amount*/}
          <DebtInput style={style} />
          {/* counter - sum up debt -> total field */ }
          <DebtTotal style={style} />
          {/*payment tracker -> input and submit button */}
          <Payments style={style}/>
        </Container>
    </div>
  );
}

export default App;
