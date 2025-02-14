import { Link } from "react-router-dom";
function Header({abrirCerrarNuevo}){
    return(
        <div className="grid grid-rows-1 text-end  items-center" onClick={abrirCerrarNuevo}>
            <Link to="/" className="flex justify-end pr-4 m-2 text-black">
                <img src="" alt="Descripción de la imagen" className="w-16 h-16 items-end rounded-full border-3 border-blue-500" />
            </Link>
        </div>
    );
};

export default Header;