import GameModel from "../models/Game.js";

export async function createGameController(req,res){
//     const { gameId } = req.params; 
//   const game = await GameModel.findById(gameId);
  
  // Create a new player based on the request body

  const newGame = new GameModel({
    session: req.body.session,
    players: [],
    questions: []
  });
  const response = await newGame.save();
  res.json(response); 

  }
