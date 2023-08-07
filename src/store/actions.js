import { ADD_MESSAGE } from "../constants/action-constants/constants";

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    message: message
})