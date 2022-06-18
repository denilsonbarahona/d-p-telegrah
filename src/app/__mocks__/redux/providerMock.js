import React from "react";	
import { Provider } from "react-redux";
import Store from "@Redux/store"

const ProviderMock=({children})=>{
    return <Provider store={Store}>{children}</Provider>
}

export default ProviderMock;
