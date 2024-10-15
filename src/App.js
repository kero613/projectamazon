// import { React, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from './components/Header';
// import Login from './components/Login';
// import { auth } from "./firebase";
// import { useAuth } from "./context/GlobalState";
// import Home from "./components/Home";
// import Checkout from "./components/Checkout";
// import Payment from "./components/Payment";

// const App = () => {
//   const { dispatch } = useAuth()
//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         })
//       }
//     });
//   }, [dispatch]);
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/' element={
//           <>
//             <Header />
//             <Home />
//           </>
//         } />
//         <Route path="/checkout" element={
//           <>
//             <Header />
//             <Checkout />
//           </>
//         } />
// <Route path="/payment" element={
//   <>
//     <Header />
//     <Payment />
//   </>
// }/>
//         <Route path='/login' element={<Login />} />
//         <Route path='*' element={<h1>Page Not Found</h1>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import { auth } from "./firebase";
import { useAuth } from "./context/GlobalState";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('مفتاح_الStripe_الخاص_بك');

const App = () => {
  const { dispatch } = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Home />
          </>
        } />
        <Route path="/checkout" element={
          <>
            <Header />
            <Checkout />
          </>
        } />
        <Route path="/payment" element={
          <Elements stripe={stripePromise}>
            <Header />
            <Payment />
          </Elements>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
