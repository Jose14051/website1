const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const secretKey = 'your_secret_key'; // Replace with your secret key

// Dummy user data (replace this with your actual user data handling logic)
const users = [
    { username: 'user1', password: 'password1', id: 1 },
    { username: 'user2', password: 'password2', id: 2 }
];

// Middleware
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user in dummy user data
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Generate JWT token
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers.authorization;

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

// Protected route example
app.get('/dashboard', verifyToken, (req, res) => {
    res.json({ message: 'Welcome to the dashboard!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
