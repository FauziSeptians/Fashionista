import DetailView from "@/views/Detail/detail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from 'swr'


    
const DetailPage = ( ) => {
    // const [DetailProd , setproduct]  = useState([]);
    const { query } = useRouter();

    const fetcher = (url: string) => fetch(url).then(res => res.json())

    const { data, error, isLoading } = useSWR(`/api/product/${query.index}`, fetcher)
 
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const DetailProd = data;

    console.log(DetailProd)

    // console.log(data.data)

    // console.log(query.index);

    // console.log(typeof(query.index));



    // console.log(typeof(DetailProd))

    // console.log(DetailProd.ProductName);



    return (
        <DetailView Detailprod = {isLoading ? {} : DetailProd.data}/>
    );
}

export default DetailPage;