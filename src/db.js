const mongoose = require('mongoose');

module.exports = {
  connect: (DB_HOST) => {
    return mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('MongoDB connected successfully');
    }).catch(err => {
      console.error('MongoDB connection error:', err);
      console.log('Please make sure MongoDB is running.');
      process.exit(1); // Exit the process if there is an error
    });
  },
  close: () => {
    return mongoose.connection.close();
  }
};

