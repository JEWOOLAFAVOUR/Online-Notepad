import { ADD_COURSE, GET_QUESTIONS, UPDATE_USER_AUTH_DETAILS } from "../constants/constants"

export const updateUserAuthDetails = (userAuth) => {
    return {
        type: UPDATE_USER_AUTH_DETAILS,
        userAuth,
    }
}

export const updateQuestion = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export const updateAddCourse = (addCourse) => {
    return {
        type: ADD_COURSE,
        addCourse,
    }
}