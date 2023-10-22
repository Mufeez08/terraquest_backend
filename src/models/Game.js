import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  session: String,
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }]
});


const GameModel = mongoose.model("game", GameSchema);

export default GameModel;