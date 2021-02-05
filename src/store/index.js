import { createStore } from "vuex";

import actions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

export default createStore({
  state: {
    searchValue: "",
    isMobile: false,
    isDesktop: true,
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters,
  apiRequests,
  
});
