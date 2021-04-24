const express = require('express');

const server = express();

/**
 Request types
 1)GET-fetch data from database
 2)POST- Insert data into database
 3)PUT-Update data into database
 4)DELETE-Remove data from database
 */
server.use(express.json());
let customers = [
    { id: 1, name: "JATIN" },
    { id: 2, name: "MUKUL" },
    { id: 3, name: "SAHIL" },
]
server.get('/', (req, res) => {
    res.send({ status: "SUCCESS" })
})
server.get('/api/customers', (req, res) => {
    res.send({ customers: customers })
})
server.get('/api/customer', (req, res) => {
    console.log("req.query:", req.query.id)
    const customer = customers.find(cust => cust.id == req.query.id)
    if (!customer) {
        res.send({ status: "USER NOT FOUND" });
        return;
    }
    res.send({ customer: customer })
});

server.get('/api/customer/:id', (req, res) => {
    console.log("req.params:", req.params.id)
    const customer = customers.find(cust => cust.id == req.params.id)
    if (!customer) {
        res.send({ status: "USER NOT FOUND" });
        return;
    }
    res.send({ customer: customer })
})
server.get('/home', (req, res) => {
    res.send({ status: "HOME" })
})

server.post('/api/customers', (req, res) => {
    console.log("data:", req.body)
    const newUser = { id: customers.length + 1, name: req.body.name };
    customers.push(newUser);
    res.send({ users: customers })
});

server.put('/api/customer/:id', (req, res) => {
    let customer = customers.find(cust => cust.id == req.params.id);
    if (!customer) {
        return res.send("USER NOT FOUND")
    }
    const { name } = req.body;
    customer.name = name;
    res.send({ updatedCustomer: customer })
});
server.listen(8080, () => console.log("server running at port 8080"));