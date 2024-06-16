import Axios from "./";

import { getToken } from "../utils/tokenHandler";
import { getQuizAnswer } from "../utils/userAnswer";

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

const submitAnswer = async (sessionId) => {
  if(getQuizAnswer() === null) {
    return { error: "No answer found" };
  }
  try {
    const response = await Axios.post(`quiz/session/${sessionId}/end`, 
      {
        data: getQuizAnswer()
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

export default {
  createQuizSession,
  getQuizSession,
  getSessionById,
  submitAnswer
};
export { submitAnswer };