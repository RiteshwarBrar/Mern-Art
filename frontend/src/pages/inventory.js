import { useEffect, useState } from "react";
import { Button} from 'react-bootstrap';
import { useInventoryContext } from "../hooks/useInventoryContext";
import InventoryCard from "../components/inventory/InventoryCard";
import AdditemForm from "../forms/AdditemForm";
import { db, auth } from "../firebase";
import { signOut } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore";
import SignInForm from "../forms/SignInForm";

const Inventory = () => {
    
    const {inventory, dispatch} = useInventoryContext();
    const [user, setUser] = useState(null);
    // const currDate = new Date().toLocaleDateString("en-IN")
    const collectionRef = collection(db, 'inventory');
  
    const fetchPaintings = async ()=>{
      try{
        const res = await getDocs(collectionRef);
        const data = res.docs.map((doc) => ({...doc.data(),id: doc.id}));//mapping over the data and adding id to it
        console.log(data);
        dispatch({type: 'SET_INVENTORY', payload: data});
      }
      catch(error){
        console.error('Error getting documents: ', error);
      }
      
    };

    useEffect(() => {
      auth?.currentUser?.email && setUser(auth.currentUser.email);
      
      console.log(user);
      fetchPaintings();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, user]);//

    const logout = async () => {
      try {
        await signOut(auth);
        setUser(null);
        console.log('Logged out');
      } catch (error) {
        console.error('Error signing out: ', error);
      }
    }

    return (
      <div className="inventory">
        <h1>Inventory</h1>
        { !auth.currentUser?
          <SignInForm setUser={setUser}/>:
          <div>
            <Button onClick={logout}>Logout</Button>       
            <AdditemForm collectionRef={collectionRef} fetchPaintings={fetchPaintings}/>
            {
                inventory && inventory.map(painting => ( // check if there is inventory and then mapping it over painting cards
                //   return <PaintingCard key={painting._id} {...painting} />
                  <InventoryCard key={painting.id} fetchPaintings={fetchPaintings} painting={painting} />
                // return <p key={painting._id}>{painting.title}</p>
                ))
            }
          </div>
        }    
      </div>
    );
  };
  
  export default Inventory;