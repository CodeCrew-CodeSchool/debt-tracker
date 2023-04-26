import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import MoneyForm from './DebtInput'

export default function (props) {
    

    return (
        <>
        <MoneyForm isDebt={false} nameLabel={'Paid To'} amountLabel={'Amount in U$D'} setTotal={props.setTotal} />
        </>
    )
}