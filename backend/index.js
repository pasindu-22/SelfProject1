// Main entry point of the application

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { sequelize } = require('./models'); // Import sequelize instance from models folder

dotenv.config();
 
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Import routes
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/admins', adminRoutes);






const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync({ force: false }); // Use { force: true } only in development to recreate the tables on every run
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}); 
  