const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    min: 0,
    required: true
  }
})

const User = mongoose.model('User', userSchema);

const usertemp1 = new User({
  name: 'Charan',
  email: 'charan123@gmail.com',
  credits: 1000,
});
// usertemp1.save();

const usertemp2 = new User({
  name: 'Asish',
  email: 'AshAshish456@gmail.com',
  credits: 2000,
});
// usertemp2.save();

const usertemp3 = new User({
  name: 'Naveen',
  email: 'Naveenbob@gmail.com',
  credits: 3000,
});
// usertemp3.save();

const usertemp4 = new User({
  name: 'AdityaNad',
  email: 'Adityashortie@gmail.com',
  credits: 4000,
});
// usertemp4.save();

const usertemp5 = new User({
  name: 'Taruntammi',
  email: 'dhanunjay@gmail.com',
  credits: 5000,
});
// usertemp5.save();

const usertemp6 = new User({
  name: 'SreeRemo',
  email: 'Sreeramkandu@gmail.com',
  credits: 6000,
});
// usertemp6.save();

const usertemp7 = new User({
  name: 'Sunnysagi',
  email: 'lunnysunny@gmail.com',
  credits: 7000,
});
// usertemp7.save();

module.exports = User;
