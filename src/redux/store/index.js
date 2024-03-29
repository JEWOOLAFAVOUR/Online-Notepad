import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import promiseMiddleware from "../middleware/ApiCalls";

import rootReducer from "../reducers";
import { checkTokenExpiration } from "../reducers/midToken";

// let middleware = [thunk, checkTokenExpiration];
// let middleware = [thunk];

const handleToken = (store) => {
    const userState = store.getState().auth?.token
    console.log('user token.....', userState)
}

const handleQuestions = (store) => {
    const userState = store.getState().mid?.questions
    console.log('redux questions.....', userState)
}

const handleAddCourse = (store) => {
    const userState = store.getState().mid?.addCourse
    console.log('redux add course.....', userState)
}

// const handleUser = (store) => {
//     const userState = store.getState().auth?.user
//     console.log('user in redux .....', userState)
// }

// const handleUserAuth = (store) => {
//     const userState = store.getState().mid?.userAuth
//     console.log('user auth .....', userState)
// }


const reduxStore = createStore(
    rootReducer,
    compose(
        // applyMiddleware(...middleware),
    )
);


reduxStore.subscribe(() => handleToken(reduxStore));
reduxStore.subscribe(() => handleQuestions(reduxStore));
reduxStore.subscribe(() => handleAddCourse(reduxStore));
// reduxStore.subscribe(() => handleUser(reduxStore));
// reduxStore.subscribe(() => handleUserAuth(reduxStore));

export default reduxStore;
