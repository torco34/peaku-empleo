import { Footer } from "./Footer";
import { Header } from "./Header";
import { BsCaretDownFill } from "react-icons/bs";
export const Layout = ({ children }) => {
  const navbarItems = [
    { name: "Empleo", route: "/empleo" },
    { name: "Bootcamp", route: "/bootcamp" },
    { name: "Sobre nosotros", route: "/empleo" },
    {
      name: "Para profesionales",
      route: "/nosotros",
      icon: <BsCaretDownFill />,
    },
    { name: "Para empresas", route: "/nosotros", icon: <BsCaretDownFill /> },
   
  ];

  return (
    <>
      <Header navbarItems={navbarItems} />
      {children}
      <Footer />
    </>
  );
};
