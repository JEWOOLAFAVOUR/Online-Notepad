import { ADD_COURSE, GET_QUESTIONS, UPDATE_USER_AUTH_DETAILS } from "../constants/constants";


const initialState = {
    userAuth: {},
    questions: [],
    addCourse: "",
}



const midReducer = (state = initialState, action) => {
    const { type, userAuth, questions, addCourse } = action;

    switch (type) {
        case UPDATE_USER_AUTH_DETAILS:
            return {
                ...state,
                userAuth: {
                    ...state.userAuth,
                    ...userAuth,
                }
            };
        case GET_QUESTIONS:
            return {
                ...state,
                questions,
            };
        case ADD_COURSE:
            return {
                ...state,
                addCourse,
            }
        default:
            return state;
    }
};

export default midReducer;