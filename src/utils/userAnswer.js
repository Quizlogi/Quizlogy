const db = window.localStorage;

export const initQuizAnswer = () => {
  db.setItem('questionAnswer', JSON.stringify([]));
}

export const setQuizAnswer = (questionId, optionId) => {
  const existingAnswers = JSON.parse(db.getItem('questionAnswer')) || [];
  const newAnswer = { questionId: questionId, optionId: optionId };
  existingAnswers.push(newAnswer);
  db.setItem('questionAnswer', JSON.stringify(existingAnswers));
}

export const getQuizAnswer = () => {
  return db.getItem(`questionAnswer`);
}

export const removeQuizAnswer = () => {
  db.removeItem("questionAnswer");
}