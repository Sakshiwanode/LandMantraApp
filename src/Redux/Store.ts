import {  configureStore } from '@reduxjs/toolkit';
import { appStateSlice } from './AuthSlice';


const store = configureStore({
    reducer: {
    appState: appStateSlice.reducer, 
  },
});

export default store;
