export default function (props) {
    return(<div style={props.style}>
        <div>
            <h1>Debts</h1>
            <h1>${props.debtTotal}</h1>
        </div>
        <div>
            <h1>Payments</h1>
            <h1>${props.paidTotal}</h1>
        </div>
        <div>
            <h1>Remaining Balance</h1>
            <h1>${props.debtTotal - props.paidTotal > 0 ? props.debtTotal - props.paidTotal: 0}</h1>
        </div>
    </div>)
}