const dotenv = require('dotenv');
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const User = require('./models/User')


dotenv.config()
// console.log(process.env.DB_USER);

const env = process.env

mongoose.connect(`mongodb+srv://${env.DB_USER}:${env.DB_PASS}@${env.DB_HOST}/${env.DB_NAME}
?retryWrites=true&w=majority

`).then( ()=> {console.log("Everything is OK !!" );}

).catch((e) =>{
    console.log(e, 'ERROR');
})

app.use(express.json())

app.post('/user/register', async (req, res) => {
const newUser =  User(req.body)
 
res.send('OK !')
console.log(newUser);

   await User.create({

        
            username: "User",
            password: "abc",
            firstName: "joe",
            lastName: "moe",
            dateOfBirth:new Date(),
            email: "an@email.com",
            telephone: "12345",
            gender: "Other"
    
    
    
    
    })


    })   





app.listen(port, () => {
    console.log("The server is listening... 🐒")
    console.log(port);
});