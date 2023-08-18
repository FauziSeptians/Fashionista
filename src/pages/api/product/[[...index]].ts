// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { retrieveData, retrieveDataDetail } from '../../../../lib/firebase/services';
import { type } from 'os';

type Data = {
  data:any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // NGAMBIL ID PRODUCT DENGAN ROUTER
  // req.query.index


  // console.log(req.query.index)

  // console.log(Idprod![0])

  // console.log(Idprod)
  // const data = await retrieveData();
  // console.log(data)
  // res.status(200).json({ data })

  if(req.query.index) {
    console.log(1)
    const data = await retrieveDataDetail('Product',req.query.index![0]);
    console.log(data);
    res.status(200).json({ data })
  }else{
    console.log(1)
    const data = await retrieveData();
    console.log(data)
    res.status(200).json({ data })
  }
  // const data = await retrieveData();
  // console.log(data);
  // res.status(200).json({ data })
  // const data = await retrieveData();


}