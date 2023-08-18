import styles from './detail.module.css'
import * as detailJS from '../../js/detailjs'


type ProductType = {
    id: string,
    ProductName: string,
    ProductPrice: number,
    image:string,
    category: string,
};

const DetailView = ({ Detailprod }: { Detailprod : ProductType }) => {

    const variations = ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/485358b3-c1c5-41d2-8598-f8baa78a23f5/metcon-9-workout-shoes-ldMsxB.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ac8de27e-37c3-41d1-97c9-ed32e5a23325/metcon-9-workout-shoes-ldMsxB.png","https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82afc007-3de5-4b49-b11d-76df7bad29ea/metcon-9-workout-shoes-ldMsxB.png"]
    const sizeSepatu = [39,40,41,42,43,44];
    const Color = ["red","green","blue","yellow"]

    console.log(Detailprod);

    const handleimage = (imageclick : string) => {
        detailJS.changeImage(imageclick);
    }

    const handlelove = () => {
        detailJS.changeColorFav();
    }

    return (
        <div className={`content mt-4 ${styles.konten}`}>
            <div className="detail-konten">
                <div className="row">
                    <div className="col-1">
                        <div className="gambar mt-1 mb-1">
                            {
                                variations.map((item,index)=>(
                                    <img key={index} src={item} alt="" className={`rounded mb-3 ${styles.variations_images}`} id="imagesVar" onClick={() => handleimage(item)}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-7">
                            <div className={styles.container_image}>
                                <img src={Detailprod.image && Detailprod.image} className={`img-fluid ${styles.images}`} id="MainImage" />
                                <div className={styles.favourite}>
                                    <div className="">
                                        {/* <i className={`bi bi-heart ${styles.icon_love}`}></i> */}
                                        <i className={`bi bi-heart-fill ${styles.icon_love}`} id="icon" onClick={handlelove}></i>
                                    </div>
                                </div>
                            </div>
                    </div>
                    {/* style={{ ["background-color" as any]: "yellow"}} */}
                    <div className="col-4 text-start p-3" >
                        <div className="deskripsi">
                        <div className={styles.descriptionJudul}>
                            {Detailprod.ProductName && Detailprod.ProductName}
                        </div>
                        <div className={styles.descriptionCategory}>
                            {Detailprod.category && Detailprod.category}
                        </div>
                        <div className={styles.price}>
                            Rp. {Detailprod.ProductPrice && Detailprod.ProductPrice}
                        </div>
                        <div className="OptionColor mb-3">
                            Option Color
                            <div className="row m-0 mt-2 gap-3">
                            {
                                    Color.map((size,index)=>(
                                        <div key={index} className='col p-2 border-2 rounded text-center'>
                                            {size}
                                        </div>
                                    ))  
                                }
                            </div>
                        </div>
                        
                        <div className="sizing">
                            <div className="Judul-sizing mb-2">
                                Select Size 
                            </div>
                            <div className="row size-chart m-0 gap-3">
                            {
                                    sizeSepatu.map((size,index)=>(
                                        <div key={index} className='col p-2 border-2 rounded text-center'>
                                            {size}
                                        </div>
                                    ))  
                                }
                            </div>
                            <button className={styles.button} type="submit">Buy</button>
                        </div>
                        <div className="description mt-3">
                            <p className='mb-2'>
                                Description
                            </p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quos? Earum, ut nihil tenetur officiis ipsam eum iste blanditiis vitae voluptate. Quod adipisci beatae quae necessitatibus repudiandae, eos repellat autem!
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default DetailView;