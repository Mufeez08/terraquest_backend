import mongoose from "mongoose";


const questionSchema = new mongoose.Schema({
  validateKey: String,
  questionInfo: String,
  answer: String,
  hint: String,
  session: String,
});


const QuestionModel = mongoose.model('question', questionSchema);

export default QuestionModel;