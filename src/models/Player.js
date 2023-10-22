import mongoose from "mongoose";


const playerSchema = new mongoose.Schema({
  name: String,
  level: Number,
  session: String,
});


const PlayerModel = mongoose.model('player', playerSchema);

export default PlayerModel;