export const state = () => ({
  followingQuestions: [],
  allQuestions: []
})

export const mutations = {
  newQuestion (state, newQuestionData) {
    state.allQuestions.push(newQuestionData);
    state.followingQuestions.push(newQuestionData);
  },
  setAllQuestions (state, questions) {
    state.allQuestions = questions;
  },
  setFollowingQuestions (state, questions) {
    state.followingQuestions = questions;
  }
}
