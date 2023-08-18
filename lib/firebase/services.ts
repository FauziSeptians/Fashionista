// dia bisa ngapain aja sih didatanya

import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';
import app from './init'


const firestore = getFirestore(app);

// getDocs -> mengambil query didalamnya

export async function retrieveData(){
    const DB = await getDocs(collection(firestore,'Product'));

    // proses penyimpanan data dari firebase kedalam variabel di nextJS ini
    const dataDB = DB.docs.map((dataProduct)=> ({
        id:dataProduct.id,
        ...dataProduct.data(),
    }));
    // console.log(dataDB);
    return dataDB;
}


export async function retrieveDataDetail(collectionName: string, id:string){
    const DataDetail = await getDoc(doc(firestore,collectionName,id));

    const data = DataDetail.data();
    console.log(data);
    return data;
}


