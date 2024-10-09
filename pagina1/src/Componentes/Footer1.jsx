import React from "react";
import '../EstiloComponentes/Footer.css';

function Footer1(){
    return(
        <div footer>
            <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Acerca de nosotros</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                </div>
                <div className="footer-section">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Redes Sociales</h4>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
            </div>
        </footer>
        </div>
    )
}
export default Footer1; 