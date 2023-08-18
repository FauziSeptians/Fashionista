import styles from './navbar.module.css';

const Navbar = () => {
return (
    <nav className={`navbar navbar-expand-lg p-0 ${styles.navbar} `}>
        <div className="container-fluid d-flex justify-content-between mx-5 p-0">
            <a href="/e-commerce">
            <div className={styles.judulUtama}>
                .Fashionist4
            </div>
            </a>
            <div className="">
                <ul className="d-flex gap-5">
                    <li className={`nav-item ${styles.navitem}`}>
                        <a className="nav-link" aria-current="page" href="#men_segment">Men</a>
                    </li>
                    <li className={`nav-item ${styles.navitem}`}>
                        <a className="nav-link" href="#women_segment">Women</a>
                    </li>
                    <li className={`nav-item ${styles.navitem}`}>
                        <a className="nav-link" href="#kids_segment">Kids</a>
                    </li>
                </ul>
            </div>
            <div>
                <form className="d-flex" role="search">
                    <input className={`form-control me-2 ${styles.form_control}`}  type="search" placeholder="Search" aria-label="Search"></input>
                </form>
            </div>
        </div>
    </nav>
);
}

export default Navbar;