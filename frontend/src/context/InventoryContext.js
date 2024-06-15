import { createContext, useState } from "react";

export const InventoryContext = createContext(null); // creating a context object

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState([]); //finish up/////
    return (
        <InventoryContext.Provider value={{...inventory, setInventory}}>
            { children }
        </InventoryContext.Provider>
    )
}