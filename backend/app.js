const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(
    session({
      secret: 'chugimeengachimo', 
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
      cookie: { maxAge: 24 * 60 * 60 * 1000 }, 
    })
  );

mongoose.connect('mongodb://localhost:27017/attendance', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
    }
);

mongoose.connection.on('error', (error) => {
    console.error(error);
    }
);



app.use(express.json());

app.use(require('./routes/User/create-user'));
app.use(require('./routes/Proxy/request-attendance'));
app.use(require('./routes/Proxy/request-track'));

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
