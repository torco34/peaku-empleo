import { Footer } from "./Footer";
import { Header } from "./Header";
import { BsCaretDownFill } from "react-icons/bs";
export const Layout = ({ children }) => {
  const navbarItems = [
    { id: 0, name: "Empleo", route: "/empleo" },
    {id: 1, name: "Bootcamp", route: "/" },
    { id: 2, name: "Sobre nosotros", route: "/empleo" },
    {
      id: 3, name: "Para profesionales",
      route: "/nosotros",
      icon: <BsCaretDownFill />,
    },
    { id: 4, name: "Para empresas", route: "/nosotros", icon: <BsCaretDownFill /> },
   
  ];

  return (
    <>
      <Header navbarItems={navbarItems} />
      {children}
      <Footer />
    </>
  );
};
