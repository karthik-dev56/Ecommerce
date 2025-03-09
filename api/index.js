const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv')
const userRoute = require('./routes/user.js')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart.js')
const orderRoute = require('./routes/order.js')
const stripeRoute = require('./routes/stripe.js')


dotenv.config()


mongoose.connect(process.env.MONGO_URL, {
    
})
.then(()=>console.log('MongoDB connected.'))
.catch((err)=>console.log(err))

app.use(cors())
app.use(express.json())

//Routes

app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/products', productRoute)
app.use('/api/v1/carts', cartRoute)
app.use('/api/v1/orders', orderRoute)
app.use('/api/v1/checkout', stripeRoute)


app.listen(process.env.PORT || 5000, ()=> {
    console.log('API server is running!');
})