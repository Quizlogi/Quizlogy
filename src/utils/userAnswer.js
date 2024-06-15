const db = window.localStorage;

export const initQuizAnswer = () => {
  db.setItem('questionAnswer', JSON.stringify([]));
}

export const setQuizAnswer = (questionId, optionId) => {
  const existingAnswers = JSON.parse(db.getItem('questionAnswer')) || [];
  const newAnswer = { question_id: questionId, option_id: optionId };
  if(existingAnswers.some(answer => answer.question_id === questionId)) {
    const index = existingAnswers.findIndex(answer => answer.question_id === questionId);
    existingAnswers[index].option_id = newAnswer.option_id;
    db.setItem('questionAnswer', JSON.stringify(existingAnswers));
    return;
  }
  existingAnswers.push(newAnswer);
  db.setItem('questionAnswer', JSON.stringify(existingAnswers));
}

export const getQuizAnswer = () => {
  return JSON.parse(db.getItem('questionAnswer'));
}

export const removeQuizAnswer = () => {
  db.removeItem("questionAnswer");
}