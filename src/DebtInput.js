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
    const [lenderText, setLenderText] = useState('');
    const [amountText, setAmountText] = useState(0);
    //state variables to track whether a debt or payment was submitted
    const [isDebt, setIsDebt] = useState(props.isDebt)
    
    const sltFunc = (event) => {
        setLenderText(event.target.value); 
    }
    const satFunc = (event) => {
        setAmountText(event.target.value);     
    }
    const submitDebts = () => {
        if (amountText > 0) {
            let tableArr = debts;
            let newDebts = debts;
            let dollars = parseInt(amountText);
            
            if (!isDebt) {
                dollars *= -1;
            }
            console.log(dollars)

            tableArr.push({'lender': lenderText, 'amount': dollars});
            // newDebts.push({'lender': lenderText, 'amount': amountText});

            let formTotal = newDebts.map(x => parseInt(x.amount)).reduce((acc, cur) => acc + cur);
            if (!isDebt) {
                formTotal *= -1
               //
            }
            console.log(props.debtTotal + ' ' + formTotal);
            setDebts(newDebts);
            setLenderText('');
            setAmountText(0);
            
            props.setDebtTotal(formTotal);
        }
        //console.log(debts)
    }

    return (
        <div style={props.style}>
            <Form>
                <Form.Label>{props.nameLabel}</Form.Label>
                <Form.Control onInput={sltFunc} value={lenderText}/>
                <Form.Label>{props.amountLabel}</Form.Label>
                <Form.Control type='number' onInput={satFunc} value={amountText}/>
                <Button variant="info" onClick={submitDebts}>Submit</Button>
            </Form>
            <Table>
                <thead>
                    <tr>
                    <th>{props.nameLabel}</th>
                    <th>Debt Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {debts.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.lender}</td>
                                <td>{value.amount}</td>
                            </tr>)
                    })}
                </tbody>
                <tfoot></tfoot>
            </Table>
        </div>
    )
}