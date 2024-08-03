 import { Footer } from "../components/cards/Footer";
import NavBar from "../components/Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className=""> 
        <div className="">  
            {children}  
            <Footer/>
        </div>
    </div>
  );
}
