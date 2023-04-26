import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

export default function (props) {
    // input for name and $
    // submit button
    // list of submitted items

    //state variables 
    //debts - array of debt objects {debtor: 'name', amount: 00}
    const [debts, setDebts] = useState([]);
    //text fields
    const [debtorText, setDebtorText] = useState('');
    const [amountText, setAmountText] = useState(0);
    
    const sdtFunc = (event) => {
        setDebtorText(event.target.value);
    }
    const satFunc = (event) => {
        setAmountText(event.target.value);
    }
    const submitDebts = () => {
        if (amountText > 0) {
            let newDebts = debts;
            newDebts.push({'debtor': debtorText, 'amount': amountText});
            setDebts(newDebts);
            setDebtorText('');
            setAmountText(0)
        }
        console.log(debts)
    }

    return (
        <div style={props.style}>
            <Form>
                <Form.Control onInput={sdtFunc} value={debtorText}/>
                <Form.Control onInput={satFunc} value={amountText}/>
                <Button variant="info" onClick={submitDebts}>Submit</Button>
            </Form>
            <Table>
                <thead>
                    <tr>
                    <th>Debtor</th>
                    <th>Debt Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {debts.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.debtor}</td>
                                <td>{value.amount}</td>
                            </tr>)
                    })}
                </tbody>
                <tfoot></tfoot>
            </Table>
        </div>
    )
}