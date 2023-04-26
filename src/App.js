import logo from './logo.svg';
import './App.css';
import DebtInput from './DebtInput';
import DebtTotal from './DebtTotal';
import Payments from './Payments';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const style = {
  border: '2px solid red'
}
function App() {
  const [debtTotal, setDebtTotal] = useState(0);

  return (
    <div className="App">
        <Container>
          {/*debt input -> input and submit button
          list - show debt items -> name $amount*/}
          <DebtInput isDebt={true} nameLabel={'Lender'} amountLabel={'Debt Amount in U$D'} style={style} total={debtTotal} setTotal={setDebtTotal}/>
          {/* counter - sum up debt -> total field */ }
          <DebtTotal style={style} total={debtTotal}/>
          {/*payment tracker -> input and submit button */}
          <Payments style={style} total={debtTotal} setTotal={setDebtTotal}/>
        </Container>
    </div>
  );
}

export default App;
