export const state = () => ({
  followingQuestions: [],
  allQuestions: []
})

export const mutations = {
  newQuestion (state, newQuestionData) {
    state.allQuestions.push(newQuestionData);
    state.followingQuestions.push(newQuestionData);
  },
  newAnswer (state, newAnswerData) {
    for (var question in state.allQuestions) {
      if (question.id === newAnswerData.question_id) {
         question.answers.push(newAnswerData);
         break; //Stop this loop, we found it!
      }
    }
    for (var question in state.followingQuestions) {
      if (question.id === newAnswerData.question_id) {
         question.answers.push(newAnswerData);
         break; //Stop this loop, we found it!
      }
    }
  },
  setAllQuestions (state, questions) {
    state.allQuestions = questions;
  },
  setFollowingQuestions (state, questions) {
    state.followingQuestions = questions;
  }
}
