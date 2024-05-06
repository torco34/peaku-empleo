
import { useState, useEffect } from 'react';
import "../../assets/css/Footer.css"

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <footer className={isVisible ? 'footer' : ' footer footer-visible'}>
      <h2>¡Descubre la nueva forma de encontrar empleo!</h2>
      <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
    </footer>
  );
}
