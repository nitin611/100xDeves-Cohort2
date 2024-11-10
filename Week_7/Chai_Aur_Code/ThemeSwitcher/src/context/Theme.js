import React from "react";
import { createContext,useContext } from "react";


export const Themecontext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

// yahi se provider bhi export karsakte hai alag se file bananane ki jarurat nahi hai-
export const ThemeProvider=Themecontext.Provider

// and avi tak 2 baar file ko import kar rahe the custom hook banake ek hi saath kaam kar sakte hai-

export default function useTheme(){
    // yahi pe Themecontext ko lelo taki alag se import  na karna pare-

    return useContext(Themecontext)
}