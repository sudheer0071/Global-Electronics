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
          <NavBar/>
          <div className=" mt-20">
            {children} 
          </div>
            <Footer/>
        </div>
    </div>
  );
}
