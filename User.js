const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    password: String,
    stats: {
        gamesPlayed: { type: Number, default: 0 },
        gamesWon: { type: Number, default: 0 },
        earnings: { type: Number, default: 0 }
    },
    walletBalance: { type: Number, default: 0 },
    social: {
      googleId: String,
      facebookId: String
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);