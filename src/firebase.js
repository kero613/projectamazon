// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import { initializeApp } from 'firebase/app'
// import { getAuth } from "firebase/auth"
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };




// const app = initializeApp(firebaseConfig)
// export const auth = getAuth(app)
// export const db = getFirestore(app)

// import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';
// import { loadStripe } from '@stripe/stripe-js';

// // إعداد Firebase
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// // تسجيل الدخول إلى Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// // إعداد مفتاح Stripe القابل للنشر
// const stripePromise = loadStripe('pk_test_51Q9n2YDlgl2v4GoXqG0a4DIG440bCwZxBZMCfdUPEXP9P9NhPOHEVGKECiLTKlvHLo6nOHOHjsl95DMw7cTuQue900Gmj8sFgF'); // استبدل بمفتاحك القابل للنشر

// export { stripePromise };


import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { loadStripe } from '@stripe/stripe-js';

// إعداد Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// تسجيل الدخول إلى Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// إعداد مفتاح Stripe القابل للنشر
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY); // استخدم المفتاح من المتغير

export { stripePromise };
