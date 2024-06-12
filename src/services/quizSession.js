import Axios from "./";

import { getToken } from "../utils/tokenHandler";

const createQuizSession = async (quizId) => {
  try {
    const response = await Axios.post("quiz/session", 
      {
        quiz_id: quizId
      },
      {
        headers: {
          Authorization: getToken(),
        }
      }
    );
    return response.data;
  } catch (err) {
    return { error: err.response.data };
  }
}

const getQuizSession = async (quizId) => {
  try {
    const response = await Axios.get('quiz/session', {
      headers: {
        Authorization: getToken(),
      },
      body: {
        "quiz_id": quizId
      }
    });
    return response.data;
  } catch (err) {
    return { error: err.response.data };
  }
}

const getSessionById = async (sessionId, quizId) => {
  try {
    const response = await Axios.get(`quiz/session/${sessionId}`, {
      headers: {
        Authorization: getToken(),
      },
      body: {
        "quiz_id": quizId
      }
    });
    return response.data.data.quiz;
  } catch (err) {
    return { error: err.response.data };
  }
}

// const submitAnswer = async (sessionId, questionId, answer) => {

// }

export default {
  createQuizSession,
  getQuizSession,
  getSessionById 
};