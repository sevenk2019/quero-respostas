export const state = () => ({
  authorization: ''
})

export const mutations = {
  add (state, token) {
    state.authorization = token;
  },
  remove (state) {
    state.authorization = '';
  }
}
