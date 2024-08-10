import { useReducer,createContext } from "react";
import AppReducer from './AppReducer'
// Intial State
const initialState = {
    transaction : []
}

// create context 
export const GlobalContext = createContext(initialState);

// provider component 

export const GlobalProvider =({children})=>{
    const [state,dispach] = useReducer(AppReducer,initialState);

    // action 
    function deleteTransaction(id){
        dispach({
            type: 'DELETE_TRANSACTION',
            payload: id
    });
}
    function addTransaction(transaction){
        dispach({
            type: 'ADD_TRANSACTION',
            payload: transaction
    });

}
    return  (
        <GlobalContext.Provider value={{
            transaction:state.transaction,
            deleteTransaction,
            addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )
}