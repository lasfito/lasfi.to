import admin from "firebase-admin";
import serviceAccount from  "./serviceAccountKey.json";
import {  cert, type ServiceAccount } from 'firebase-admin/app';
import { getFirestore,  } from 'firebase-admin/firestore';


admin.initializeApp({
  credential: cert(serviceAccount as ServiceAccount)
});


const db = getFirestore()


export { db}