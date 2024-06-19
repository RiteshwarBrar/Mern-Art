import { useEffect } from "react";
import { useInventoryContext } from "../hooks/useInventoryContext";
import PaintingCard from "../components/PaintingCard";
import AdditemForm from "../components/AdditemForm";

const Inventory = () => {
    
    const {inventory, dispatch} = useInventoryContext();

    // const currDate = new Date().toLocaleDateString("en-IN")

    useEffect(() => {

      const fetchPaintings = async ()=>{  
          const res = await fetch('/api/paintings')
          const data = await res.json()
          if (res.ok) {
              dispatch({type: 'SET_INVENTORY', payload: data});
          }
          else{
            console.log(data)
            // setInventory([{title: "Error", date: {currDate},description: "There was an error fetching the paintings"}])//for initial testing
          }
      };

      fetchPaintings();
    }, [dispatch]);//






    return (
      <div className="inventory">
        <h1>Inventory</h1>
        <AdditemForm/>
        {
            inventory && inventory.map(painting => ( // check if there is inventory and then mapping it over painting cards
            //   return <PaintingCard key={painting._id} {...painting} />
              <PaintingCard key={painting._id} painting={painting} />
            // return <p key={painting._id}>{painting.title}</p>
            ))
        }
      </div>
    );
  };
  
  export default Inventory;