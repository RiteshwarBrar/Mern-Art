import { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import PaintingCard from "../components/PaintingCard";
import AdditemForm from "../components/AdditemForm";

const Inventory = () => {
    
    const [inventory, setInventory] = useState([]);
    const currDate = new Date().toLocaleDateString("en-IN")

    useEffect(() => {

      const fetchPaintings = async ()=>{  
          fetch('/api/paintings'
          ).then(res => res.json()).then(data => {
              setInventory(data);
          }).catch(err => {
            console.log(err)
            setInventory([{title: "Error", date: {currDate},description: "There was an error fetching the paintings"}])
          });
      }

      fetchPaintings();
    }, [currDate]);






    return (
      <div className="inventory">
        <h1>Inventory</h1>
        <AdditemForm/>
        {
            inventory && inventory.map(painting => { // check if there is inventory and then mapping it over painting cards
            //   return <PaintingCard key={painting._id} {...painting} />
            return <PaintingCard key={painting._id} painting={painting} />
            // return <p key={painting._id}>{painting.title}</p>
            })
        }
      </div>
    );
  };
  
  export default Inventory;