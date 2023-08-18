import EcommerceView from "@/views/E-Commerce";
import {useEffect, useState} from "react";
import { useRouter } from "next/router"
import useSWR from "swr";


const ecommercePage = () => {
    const {push} = useRouter();

    // FETCH DATA
    const fetcher = (url: string) => fetch(url).then(res => res.json())

    const { data, error, isLoading } = useSWR(`/api/product/`, fetcher)
 
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const DataProduct = data;

    console.log(DataProduct)


    // useEffect(() => {
    //     fetch("/api/product/")
    //     .then((res) => res.json())
    //     .then((res) => {
    //         setProducts(res.data);
    //         // console.log(data);
    //     });
    // }, []);



    return (
        <div>
            <EcommerceView products={isLoading ? {} : DataProduct.data}/>
        </div>
    );

}


export default ecommercePage;