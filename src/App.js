// import logo from './logo.svg';
import './App.css';
import DebtInput from './DebtInput';
import DebtTotal from './DebtTotal';
import Payments from './Payments';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const redStyle = {
  border: '2px solid red'
}
const blueStyle = {
  border: '2px solid blue'
}
const purpleStyle = {
  border: '2px solid purple',
  display: 'flex',
  justifyContent: 'center'
}
function App() {
  const [debtTotal, setDebtTotal] = useState(0);
  const [paidTotal, setPaidTotal] = useState(0)
  // const [debts, setDebts] = useState([]);
  // const [payments, setPayments] = useState([]);

  return (
    <div className="App">
        <Container>
          {/*debt input -> input and submit button
          list - show debt items -> name $amount*/}
          <DebtInput isDebt={true} nameLabel={'Lender'} amountLabel={'Debt Amount in U$D'} 
            style={redStyle} 
            debtTotal={debtTotal} setDebtTotal={setDebtTotal}
            paidTotal={paidTotal} setPaidTotal={setPaidTotal}/>
          {/* counter - sum up debt -> total field */ }
          <DebtTotal style={purpleStyle} 
                    debtTotal={debtTotal} paidTotal={paidTotal} />
          {/*payment tracker -> input and submit button */}
          <Payments style={blueStyle} total={paidTotal} setTotal={setPaidTotal}/>
        </Container>
    </div>
  );
}

export default App;
