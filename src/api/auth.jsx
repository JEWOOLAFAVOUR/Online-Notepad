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


export const loginUser = async (data) => {
    const response = await makeApiRequest('POST', '/user/login-user', data);
    return response;
};

export const appOpens = async () => {
    const response = await makeApiRequest('GET', '/user/analytics/app-opens',);
    return response;
};

// ANNOUNCEMENT    

export const createAnnouncement = async () => {
    const response = await makeApiRequest('POST', 'user/announcement/create',);
    return response;
};

export const getAllAnnouncement = async () => {
    const response = await makeApiRequest('GET', '/user/announcement/get-all',);
    return response;
};

export const changeAnnouncementStatus = async () => {
    const response = await makeApiRequest('PUT', `/user/announcement/change-status/${announcementId}`,);
    return response;
};

export const fetchDashboard = async () => {
    const response = await makeApiRequest('GET', '/user/analytics/dashboard',);
    return response;
};