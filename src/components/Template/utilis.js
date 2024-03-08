import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const sendToast = (type, text) => {
    toast[type || 'error'](text);
}