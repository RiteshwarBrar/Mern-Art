import { createContext, useReducer } from "react";

export const InventoryContext = createContext(null); // creating a context object

export const inverntoryReducer = (state, action) => {
    switch(action.type) {
        case 'SET_INVENTORY':
            return {
                inventory: action.payload
            };
        case 'ADD_ITEM':
            return {
                inventory: [action.payload, ...state.inventory]
            };
        case 'DELETE_ITEM':
            return {
                inventory: state.inventory.filter(item => item._id !== action.payload)//payload here is just the id of the item
            };
        default:
            return state;
    }
}

export const InventoryProvider = ({ children }) => {

    // const [inventory, setInventory] = useState([]); //use Reducer instead/////

    const [state, dispatch] = useReducer(inverntoryReducer, {
        inventory: null
    })// initial state is an empty array




    return (
        <InventoryContext.Provider value={{...state, dispatch}}>
            { children }
        </InventoryContext.Provider>
    )
}