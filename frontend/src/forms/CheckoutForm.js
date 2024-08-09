import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import PayPalCheckoutButton from '../components/checkout/PayPalCheckout';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
// const PayPalCheckoutButton = ({ amount, onSuccess, onError, onCancel }) => {
//   useEffect(() => {
//     if (window.paypal) {
//       window.paypal.Buttons({
//         style: {
//           layout: 'horizontal', // or 'vertical'
//           color: 'silver',        // or 'blue', 'gold', 'black'
//           shape: 'pill',        // or 'rect'
//           label: 'paypal',      // or 'checkout', 'buynow', 'pay', 'installment'
//           tagline: true,       // Show or hide tagline
//         },
//         createOrder: (data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: amount, // Total amount to be paid
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: (data, actions) => {
//           return actions.order.capture().then((details) => {
//             onSuccess(details);
//           });
//         },
//         onError: (err) => {
//           onError(err);
//         },
//         onCancel: () => {
//           onCancel();
//         },
//       }).render('#paypal-button-container');
//     }
//   }, [amount, onSuccess, onError, onCancel]);

//   return <div id="paypal-button-container"></div>;
// };


const CheckoutForm = ({total, setCounter, setRemoveFromCart}) => {
  // State for form inputs
  const initialFormData = {
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    user_email: '',
  };
  

  // const [deliveryData, setDeliveryData] = useState(null);

  //  useEffect(() => {
  //    // Retrieve the data from localStorage
     
  //    if (savedData) {
  //      setDeliveryData(); // Parse and set the state
  //    }
  //  }, []);
  const updateDocumentByField = async (collectionName, fieldName, fieldValue, updateData) => {
    try {
        // Create a query against the collection.
        const q = query(collection(db, collectionName), where(fieldName, "==", fieldValue));
        const querySnapshot = await getDocs(q);

        // Assuming you want to update only the first document that matches
        querySnapshot.forEach(async (documentSnapshot) => {
            const docRef = doc(db, collectionName, documentSnapshot.id);

            // Update the document
            await updateDoc(docRef, updateData);
            console.log(`Document with ID ${documentSnapshot.id} updated successfully.`);
        });

        if (querySnapshot.empty) {
            console.log(`No documents found with ${fieldName} equal to ${fieldValue}.`);
        }
    } catch (error) {
        console.error('Error updating document: ', error);
    }
};
    



  // Use state for form data
  const [formData, setFormData] = useState(initialFormData);
  const [activeTab, setActiveTab] = useState('shipping');//change to  payment
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to server
    console.log('Form Data Submitted:', formData);
    localStorage.setItem('DeliveryInfo', JSON.stringify(formData));
    setActiveTab('payment');
    setRemoveFromCart(false);
    setFormData(initialFormData);
    // console.log('Total', total, typeof(total));
  };
  //
  const goBack = (e) => {
    e.preventDefault();
    setActiveTab('shipping');
    setRemoveFromCart(true);
  };
  //
  const sendInfo = () => {
    let strtotal = "$"+ total.toString();
    const savedData = localStorage.getItem('DeliveryInfo');
    const deliveryData = JSON.parse(savedData);
    const savedPaintings = localStorage.getItem('checkoutList');
    const paintings = JSON.parse(savedPaintings);
    
    paintings?.forEach((name) => {
        updateDocumentByField('inventory', 'Title', name, { ForSale: false });
    });
    
    if(deliveryData.country !== 'India'){
      let temp_total = total + 87.30;
      strtotal = "$"+temp_total.toString();
    }
    
    console.log('Form Data Submitted:', {
           ...deliveryData,
           total: strtotal,
         });

    emailjs.send(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        {
          ...deliveryData,
          total: strtotal,
          paintings: paintings,
        },  process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          // alert('Email sent successfully!');
          
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  };
  // const handleSuccess = () => {
  //   sendInfo();
  //   // Handle post-transaction processes here (e.g., save order details, update UI)
  // };

  // const handleError = (err) => {
  //   console.error('Error during the transaction', err);
  //   alert('Payment failed. Please try again.');
  // };

  // const handleCancel = () => {
  //   console.log('Payment cancelled by the user.');
  //   alert('Payment cancelled.');
  // };
  const getTotal = () => {
    const savedData = localStorage.getItem('DeliveryInfo');
    const deliveryData = JSON.parse(savedData);
    if(deliveryData.country !== 'India'){
      return (parseFloat(total) + 87.3).toString();
    }
    return total;
  }
  const billingInfo = () => {
    const savedData = localStorage.getItem('DeliveryInfo');
    const deliveryData = JSON.parse(savedData);
    //deliveryData.country !== 'India'
    // console.log("Here here::",deliveryData);
    if(deliveryData.country !== 'India'){
      
        return (
          <div>
            <Row>
              <Col xs={3}></Col>
              <Col xs={4} style={{textAlign:'left'}}><p>Subtotal: </p></Col>
              <Col xs={5} style={{textAlign:'left'}}><p>${total}</p></Col>
            </Row>
            <Row>
              <Col xs={3}></Col>
              <Col xs={4} style={{textAlign:'left'}}><p>Intl' Shipping: </p></Col>
              <Col xs={5} style={{textAlign:'left'}}><p>$87.3</p></Col>
            </Row>
            <Row>
              <Col xs={3}></Col>
              <Col xs={4} style={{textAlign:'left'}}><p>Total: </p></Col>
              <Col xs={5} style={{textAlign:'left'}}><p>${parseFloat(total)+87.3}</p></Col>
            </Row>
          </div>
        )
    };
    return (
      <div>
        <Row>
          <Col xs={3}></Col>
          <Col xs={4} style={{textAlign:'left'}}><p>Subtotal: </p></Col>
          <Col xs={5} style={{textAlign:'left'}}><p>${total}</p></Col>
        </Row>
        <Row>
          <Col xs={3}></Col>
          <Col xs={4} style={{textAlign:'left'}}><p>Shipping: </p></Col>
          <Col xs={5} style={{textAlign:'left'}}><p>FREE</p></Col>
        </Row>
        <Row>
          <Col xs={3}></Col>
          <Col xs={4} style={{textAlign:'left'}}><p>Total: </p></Col>
          <Col xs={5} style={{textAlign:'left'}}><p>${total}</p></Col>
        </Row>
      </div>
    )
    
  }
  return (
    <div className="Checkout-Form">
    
    <div className="Checkout-Form-Heading">
      <h2 className={`shipping ${activeTab === 'shipping' ? 'active' : ''}`}>
        Shipping
      </h2>
      <h2 className={`payment ${activeTab === 'payment' ? 'active' : ''}`}>
        Payment
      </h2>
    </div>
    {activeTab === 'shipping' ?
    <form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <div>
            <label className='label-custom'>
              First Name*
              <input
                className="input-custom"
                type="text"
                name="firstName"
                // placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </Col>
        <Col>
          <div>
            <label className='label-custom'>
              Last Name*
              <input
                className="input-custom"
                type="text"
                name="lastName"
                // placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </Col>
      </Row>
          <div>
            <label className='label-custom'>
              Street Address*
              <input
                id="ship-address"
                className="input-custom"
                type="text"
                name="address"
                // placeholder='Street Address'
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label className='label-custom'>
              Apartment, unit, suite, or floor #
              <input
                className="input-custom"
                type="text"
                name="address2"
                // placeholder='Apartment, unit, etc.'
                value={formData.address2}
                onChange={handleChange}
              />
            </label>
          </div>
      <Row>
        <Col>
          <div>
            <label className='label-custom'>
              City*
              <input
                className="input-custom"
                type="text"
                name="city"
                // placeholder='City'
                value={formData.city}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </Col>
        <Col>
          <div>
            <label className='label-custom'>
              State*
              <input
                className="input-custom"
                type="text"
                name="state"
                // placeholder='State'
                value={formData.state}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </Col>
      </Row>
      <div>
        <label className='label-custom'>
          Zip Code*
          <input
            className="input-custom"
            type="text"
            name="zip"
            // placeholder='Zip Code'
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className='label-custom'>
          Country*
          <input
            className="input-custom"
            type="text"
            name="country"
            // placeholder='Country'
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label className='label-custom'>
          Email Address*
          <input
            className="input-custom"
            type="email"
            name="user_email"
            // placeholder='Email Address'
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button className="Address-Submit-Button" type="submit">Submit</button>
      <p style={{ textAlign: 'left', marginTop:'10px' }}>* Required Fields</p>
    </form>
    :
    <div>
      <h2>Total</h2>
      {billingInfo()}
      <div style={{padding: '10px 0px'}}>
      <PayPalCheckoutButton amount={getTotal()}
        onSuccess={() =>{sendInfo()}}
        setCounter={setCounter}/>
      </div>
      
      <button className="Address-Submit-Button" onClick={goBack}>Go Back</button>
      {/* <button className="Address-Submit-Button" onClick={sendInfo}>Pay Now</button> */}
      {/* <PayPalCheckoutButton
        amount={total}
        onSuccess={handleSuccess}
        onError={handleError}
        onCancel={handleCancel}
      /> */}
    </div>
    }
    
    </div>
  );
};

export default CheckoutForm