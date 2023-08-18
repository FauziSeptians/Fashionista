import style from './profile.module.css'

const ProfileView = () => {
return (
<div>
    <div className={style.bannerNama}>
        <img src="https://img.freepik.com/free-vector/template-banner-online-store-with-shopping-cart-with-purchases-boxes-delivery-from-supermarket-vector-illustration_548887-104.jpg?w=2000"
            alt="" className={style.image} />
        <div className={style.biodata}>
            <div className={style.section1}>
                <img src="https://media.licdn.com/dms/image/C4D03AQFru58GQFwg0w/profile-displayphoto-shrink_400_400/0/1632543145022?e=1697673600&v=beta&t=DQvovpT3XeCyvZROQa70X7Eh9-LkKUBgsOtae5IUqaA"
                    alt="" className={style.profile} />
                <div className={style.description}>
                    <div className={style.nama}>
                        Muhammad Fauzi
                    </div>
                    <div className={style.asal}>
                        Bandung
                    </div>
                </div>
            </div>
            <div className={style.section2}>
                <div className={style.detailcart}>
                    <div className={style.countshop}>
                        100
                    </div>
                    <div className={style.iconcart}>
                        icon
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={`row ${style.biodetail}`}>
        <div className={`col ${style.sectionbio1}`}>
            <div className={style.tanggallahir}>
                <div className="text_tgllahir fw-bold">
                    Birthdate
                </div>
                <div className="valuetgllahir opacity-25">
                    13 September 2003
                </div>
            </div>
            <div className={style.notlp}>
                <div className="text_notlp fw-bold">
                    Telephone Number
                </div>
                <div className="valuetlp opacity-25">
                    082115865151
                </div>
            </div>
            <div className={style.address}>
                <div className="text_address fw-bold">
                    Address
                </div>
                <div className="valueaddress opacity-25">
                    Jl.Sindanglaya no 83 Rt 02 Rw 11 kec Mandalajati Kel pasir impun
                </div>
            </div>
        </div>
        <div className={`col ${style.sectionbio2}`}>
            text
        </div>
    </div>

</div>
);
}

export default ProfileView;