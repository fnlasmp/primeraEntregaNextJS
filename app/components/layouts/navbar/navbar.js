import Image from "next/image";
import Menu from "./menu";
export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce para empresa",
  keywords: "Ecommerce, tienda, online, shopping, Soluciones CRM Personalizadas",
}

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Image 
              src={'/logoApp.svg'}
              alt="Logo" 
              width={100} 
              height={100} 
              className="object-contain"
            />
            <Menu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;