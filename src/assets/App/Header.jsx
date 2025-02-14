import { Link } from "react-router-dom";
import vpn from "../img/vp.png"

function Header({abrirCerrarNuevo}){
    return(
        <div className="grid grid-rows-1 text-end  items-center" onClick={abrirCerrarNuevo}>
            <Link to="/" className="flex justify-end pr-4 m-2 text-black ">
                <img src={vpn} alt="menu" className="w-16 h-16 rounded-full shadow-[0_6px_12px_0_rgba(255,0,255,0.6)] " />
                
            </Link>
        </div>
    );
};

export default Header;