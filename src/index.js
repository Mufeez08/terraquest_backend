import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import {createGameController} from "./controllers/AddGameController.js";
import { createPlayerController } from "./controllers/AddPlayerController.js";
import { createQuestionController } from "./controllers/AddQuestionController.js";

const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());

dotenv.config();
const uri = process.env.MONGO_DB_LINK;
const PORT = 3000;


// app.get("/deck",getDecksController);
// app.post("/deck",createDeckController);
// app.delete("/deck/:deckId",deleteDeckController);
// app.get("/deck/:deckId",getDeckController);
// app.post("/deck/:deckId/cards",createCardForDeckController);
// app.delete("/deck/:deckId/cards/:index",deleteCardOnDeckController);
app.post("/game",createGameController);
app.post("/player",createPlayerController);
app.post("/question",createQuestionController);

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>{
        app.listen(PORT,(req,res)=>{console.log(`listening successfully on port ${PORT}`)});
    }
)
