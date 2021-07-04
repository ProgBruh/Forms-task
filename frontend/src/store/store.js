import { SET_USER } from './constants/mutations';
import { SIGN_IN, SIGN_UP, LOGOUT } from './constants/actions';
import { authService } from '~/api';

const initialState = () => ({
  user: null,
});

const state = initialState;

const getters = {
  signedIn: (state) => state.user !== null,
};

const mutations = {
  [SET_USER](state, data) {
    state.user = data;
  },
};

const actions = {
  async [SIGN_IN]({ commit }, userData) {
    const { data } = await authService.signIn(userData);
    await commit(SET_USER, data);
  },
  async [SIGN_UP]({}, userData) {
    return await authService.signUp(userData);
  },
  async [LOGOUT]({ commit }) {
    await commit(SET_USER, null);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
