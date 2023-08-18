import React from 'react';
import styles from './ecommerce.module.css'
// MEMBUAT TYPE DATA BARU DENGAN NAMA PRODUCTYPE

type ProductType = {
id: string,
ProductName: string,
ProductPrice: number,
image:string,
category: string,
};


const EcommerceView = ({ products }: { products: ProductType[] }) => {// Uncomment this line for debugging
console.log(products);

return (
<div className='Content-E-commerce' id="Content-E-commerce">
    {/* <div className={`mb-3 mt-3 ${styles.judulSegment}`}>RECOMENDATION PRODUCT</div> */}
    <div className={`row mt-5 gap-3 ${styles.bannerheight}`}>
        <div className="col-8 p-0">
            <div className="row">
                {products.slice(1,2).map((product: ProductType) => (
                <div className={styles.banner} key={product.id}>
                    <img src={product.image} className={styles.imagebanner}></img>
                </div>
                ))}
            </div>
        </div>
        <div className="col p-0">
            {products.slice(2,4).map((product: ProductType) => (
            <div className="col">
                <div className={styles.banner} key={product.id}>
                    <img src={product.image} className={styles.imagebanner2}></img>
                </div>
            </div>
            ))}
        </div>
    </div>
    <div className='E-commerce mt-4'>
        <div className={`mb-3 ${styles.judulSegment}`}>
            Hype Product
        </div>
        <div className="row gap-3">
            {products.slice(2,5).map((product: ProductType) => (
            <div className={`col card p-0 mb-3 ${styles.card1}`} key={product.id}>
                <div className={styles.gambar}>
                    <img src={product.image} className={`object-fit-cover img-fluid ${styles.hypegambar}`} alt="..."></img>
                </div>
                <div className={`card-body ${styles.card_body}`}>
                    <h5 className={styles.card_title}>{product.ProductName}</h5>
                    <p className="card-text mb-3 mt-3">Some quick example text to build on the card title and make up
                        the bulk of
                        the
                        card's content.</p>
                    <a href={`/detail/${product.id}`} className={`btn ${styles.btnbuy}`}>Buy</a>
                </div>
            </div>
            ))}
        </div>
    </div>
    <div className="men_segment mt-4" id="men_segment">
        <div className={`mb-4 ${styles.judulSegment}`}>
            Men Segment
        </div>
        <div className="row row-gap-3 konten-men">
            {products.map((product : ProductType) => (
                <a key={product.id} className='col' href={`/detail/${product.id}`}>
                    <div className={styles.newcard}>
                        <div className="image_newcard">
                            <img src={product.image} alt=""  className={styles.gambarsegment}/>
                        </div>
                        <div className="detaildescription mt-2">
                            <div className="row">
                                <div className="col">
                                    <div className="ket-nama fw-bold">
                                        {product.ProductName}
                                    </div>
                                    <div className="ket-category text-secondary">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-end">
                                        Rp {product.ProductPrice}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
    <div className="women_segment mt-4" id="women_segment">
        <div className={`mb-4 ${styles.judulSegment}`}>
            Women Segment
        </div>
        <div className="row konten-men gap-3">
            {products.map((product : ProductType) => (
                <a key={product.id} className='col' href={`/detail/${product.id}`}>
                    <div className={styles.newcard}>
                        <div className="image_newcard">
                            <img src={product.image} alt="" className={styles.gambarsegment}/>
                        </div>
                        <div className="detaildescription mt-2">
                            <div className="row">
                                <div className="col">
                                    <div className="ket-nama fw-bold">
                                        {product.ProductName}
                                    </div>
                                    <div className="ket-category text-secondary">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-end">
                                        Rp {product.ProductPrice}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
    <div className="kids_segment mt-4" id="kids_segment">
        <div className={`mb-4 ${styles.judulSegment}`}>
            kids Segment
        </div>
        <div className="row konten-men gap-3">
            {products.map((product : ProductType) => (
                <a key={product.id} className='col' href={`/detail/${product.id}`}>
                    <div className={styles.newcard}>
                        <div className="image_newcard">
                            <img src={product.image} alt="" className={styles.gambarsegment}/>
                        </div>
                        <div className="detaildescription mt-2">
                            <div className="row">
                                <div className="col">
                                    <div className="ket-nama fw-bold">
                                        {product.ProductName}
                                    </div>
                                    <div className="ket-category text-secondary">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-end">
                                        Rp {product.ProductPrice}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
</div>
);
}

export default EcommerceView;