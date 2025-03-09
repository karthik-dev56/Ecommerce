import React from 'react'
import {useHistory} from 'react-router'
import axios from 'axios'
import StripeCheckout  from 'react-stripe-checkout'

const KEY = ''

const Pay = () => {
    const [stripeToken, setStripeToken] = React.useState(null)
    const history = useHistory()
    const onToken = (token) => {
        setStripeToken(token);
    }
    React.useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post('http://localhost:5000/api/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: 6900
                })
                console.log(res.data);
                history.push('/success');
            } catch (error) {
                console.log(error);
            }
        }
        stripeToken && makeRequest()
    },[stripeToken, history])
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {stripeToken ? (
                <span>Processing... Please wait...</span>
            ): (
            <StripeCheckout 
            name="Sajib Shop"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eFjyFRPnBOL4TJszdpp_M3OcrbJDjnoPGw&usqp=CAU"
            billingAddress
            shippingAddress
            description=" Your total is $69"
            amount={6900}
            token={onToken}
            stripeKey={KEY}
            >
            <button
             style={{
                 border: "none",
                 width: 120,
                 borderRadius: 5,
                 padding: '20px',
                 backgroundColor: "black",
                 color: "white",
                 fontWeight: '600',
                 cursor: "pointer"
             }}
            >
                Pay Now
             </button>
             </StripeCheckout>
            )}
        </div>
    )
}

export default Pay
