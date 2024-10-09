import {Outlet,Link} from "react-router-dom"; 
import '../EstiloComponentes/Encabezado.css'; 

const Encabezado = () => {
    return(
        <>
            <nav className="Encabezado">
                <ul className="lista-elementos">
                    <li className="logo">
                        <Link to="/">Colombiacode</Link>
                    </li>
                    <div className="menu-items">
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                        <li>
                            <Link to="/Nosotros">Nosotros</Link>
                        </li>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};


export default Encabezado;