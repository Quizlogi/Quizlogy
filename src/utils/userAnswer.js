const db = window.localStorage;

export const initQuizAnswer = () => {
  db.setItem('questionAnswer', JSON.stringify([]));
}

export const setQuizAnswer = (questionId, optionId) => {
  const existingAnswers = JSON.parse(db.getItem('questionAnswer')) || [];
  const newAnswer = { questionId: questionId, optionId: optionId };
  if(existingAnswers.some(answer => answer.questionId === questionId)) {
    const index = existingAnswers.findIndex(answer => answer.questionId === questionId);
    existingAnswers[index].optionId = newAnswer.optionId;
    db.setItem('questionAnswer', JSON.stringify(existingAnswers));
    return;
  }

  if(newAnswer.optionId === existingAnswers.find(answer => answer.questionId === questionId)?.optionId) {
    return { questionId: questionId, optionId: "" };
  }
  existingAnswers.push(newAnswer);
  db.setItem('questionAnswer', JSON.stringify(existingAnswers));
}

export const getQuizAnswer = () => {
  return db.getItem(`questionAnswer`);
}

export const removeQuizAnswer = () => {
  db.removeItem("questionAnswer");
}