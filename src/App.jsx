import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/Main/Home/HomeScreen';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './redux/store';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

export const reduxPersistStore = persistStore(reduxStore);


export default function App() {


  return (
    <>
      <Provider store={reduxStore}>
        <PersistGate persistor={reduxPersistStore}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/home" element={<HomeScreen />} />

            </Routes>
          </BrowserRouter>
        </PersistGate>
        <ToastContainer />
      </Provider>
    </>
  )
}
