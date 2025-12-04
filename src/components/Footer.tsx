import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logoCobay from "@/assets/logo-blanco-cobay.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img 
                src={logoCobay} 
                alt="COBAY" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-bold">COBAY</span>
            </Link>
            <p className="text-primary-foreground/80 mb-4">
              Edificaciones Estructurales Cobay, S.A. de C.V. - Desde 1999 construyendo 
              todo tipo de obras con la mejor tecnología del mercado de la construcción.
            </p>
            <div className="flex gap-4">
              
              <a href="https://www.linkedin.com/company/edificaciones-estructurales-cobay/" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/urbanizacion" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Urbanización
                </Link>
              </li>
              <li>
                <Link to="/desarrollos" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Desarrollos
                </Link>
              </li>
              <li>
                <Link to="/bolsa-trabajo" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
                  Bolsa de Trabajo
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Edificación Civil</li>
              <li className="text-primary-foreground/80">Estructura</li>
              <li className="text-primary-foreground/80">Aire Acondicionado</li>
              <li className="text-primary-foreground/80">Electromecánica</li>
              <li className="text-primary-foreground/80">Canalizaciones</li>
              <li className="text-primary-foreground/80">Remodelaciones</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} Edificaciones Estructurales Cobay, S.A. de C.V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
