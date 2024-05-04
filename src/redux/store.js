import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux"
import reducer from "./slices"


const store = configureStore({
    reducer:reducer
})

const {dispatch}  = store;
const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();

export {store, dispatch,useSelector, useDispatch}