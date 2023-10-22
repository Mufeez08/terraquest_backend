import GameModel from "../models/Game.js";
import QuestionModel from "../models/Question.js";

// const questionSchema = new mongoose.Schema({
//   validateKey: String,
//   questionInfo: String,
//   answer: String,
//   hint: String,
//   session: String,
// });

export async function createQuestionController(req,res){
    try{
    const { validateKey, questionInfo, answer,hint,session} = req.body;

    // Check if the game exists
    const game = await GameModel.findOne({ session: session });

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    // Create a new player document based on the player data
    const newQuestion = new QuestionModel({
        validateKey: validateKey,
        questionInfo: questionInfo,
        answer: answer,
        hint: hint,
        session: session,
    });

    // Save the player to the database
    const savedQuestion = await newQuestion.save();

    // Add the player's ID to the game's "players" field
    game.questions.push(savedQuestion._id);

    // Save the updated game
    const updatedGame = await game.save();

    res.json(updatedGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}