import client from "./client";

const makeApiRequest = async (method, endpoint, data) => {
    try {
        const response = await client.request({
            method,
            url: endpoint,
            data // add the data parameter to the request options
        });
        return { data: response.data, status: response.status };
    } catch (error) {
        const { response } = error;
        if (response?.data) {
            return { data: response.data, status: response.status };
        }
        return { error: error.message || error };
    }
};


// COURSES 
export const fetchAllCourses = async (data) => {
    const response = await makeApiRequest('GET', '/quiz/get-all-course', data);
    return response;
};

export const createCourse = async (data) => {
    const response = await makeApiRequest('POST', '/quiz/create-course', data);
    return response;
};

export const deleteCourse = async (courseId) => {
    const response = await makeApiRequest('DELETE', `/quiz/delete-course/${courseId}`);
    return response;
};


// QUESTION BANK 

export const addQuestionToQuestionBank = async (data) => {
    const response = await makeApiRequest('POST', `/quiz/add-question-question-bank`, data);
    return response;
};

export const getQuestionsOfQuestionBank = async (questionBankId) => {
    const response = await makeApiRequest('GET', `/quiz/get-question-bank-question/${questionBankId}`,);
    return response;
};
