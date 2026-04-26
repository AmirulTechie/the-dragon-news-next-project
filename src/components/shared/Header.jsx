import logo from "@/assets/logo.png"
import Image from "next/image";
const Header = () => {
    return (
        <div className="text-center mx-auto py-8 space-y-4">
            <Image src={logo} alt="Logo"></Image>
            <p className="opacity-70">Journalism Without Fear or Favour</p>
            <p>Date</p>
        </div>
    );
};

export default Header;