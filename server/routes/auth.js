const express = require('express');
const authRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//SERVER REQUEST TO REGISTER NEW USER
authRouter.post('api/register', async (req, res) => {
    try {
        
    } catch (e) {
        console.error(e.message);
        res.status(500).json({error: e.message});
    }
});

//SERVER REQUEST TO LOGIN EXISTING USER
authRouter.post('/api/login', async (req, res) => {
    try {
        
    } catch (e) {
        console.error(e.message);
        res.status(500).json({error: e.message});
    }
});

//SERVER REQUEST TO GET USER DETAILS
authRouter.get('/api/get-user-deatils', async (res, res) => {
    try {
        
    } catch (e) {
        console.error(e.message);
        res.status(500).json({error: e.message});
    }
});