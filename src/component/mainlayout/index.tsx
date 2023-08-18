import { useRouter } from "next/router";
import Navbar from "../navbar";

type propsType = {
    children: React.ReactNode;
}

const NavbarExist = [
    "/e-commerce","/detail","/detail/[index]","/profile"
]
const Mainlayout = (props : propsType) => {
    const { children } = props;

    // ambil route di web
    const { pathname } = useRouter();
    console.log(pathname);
    
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
            {NavbarExist.includes(pathname) && <Navbar />}
            {children}
        </div>
    );
}

export default Mainlayout;