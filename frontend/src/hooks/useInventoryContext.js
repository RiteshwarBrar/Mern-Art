import { InventoryContext } from "../context/InventoryContext";
import { useContext } from "react";

export const useInventoryContext = () => {
    const context = useContext(InventoryContext);
    if (!context) {
        throw new Error('useInventoryContext must be used within a InventoryContextProvider')
    }

    return context;
}