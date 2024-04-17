const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

const secretKey = crypto.randomBytes(32).toString('hex');

const users = [
    { username: 'user1', password: 'password1', id: 1 },
    { username: 'user2', password: 'password2', id: 2 }
];

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

function verifyTokenFromCookie(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({ message: 'Token is not provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
}

app.get('/dashboard', verifyTokenFromCookie, (req, res) => {
    res.json({ message: 'Welcome to the dashboard!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
