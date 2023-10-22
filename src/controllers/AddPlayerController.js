import GameModel from "../models/Game.js";
import PlayerModel from "../models/Player.js";

export async function createPlayerController(req,res){
    try {
    // Extract the game ID and player data from the request body
    const { name, level, session } = req.body;

    // Check if the game exists
    const game = await GameModel.findOne({ session: session });

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    // Create a new player document based on the player data
    const newPlayer = new PlayerModel({
      name: name,
      level: level,
      session: session,
    });

    // Save the player to the database
    const savedPlayer = await newPlayer.save();

    // Add the player's ID to the game's "players" field
    game.players.push(savedPlayer._id);

    // Save the updated game
    const updatedGame = await game.save();

    res.json(updatedGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}