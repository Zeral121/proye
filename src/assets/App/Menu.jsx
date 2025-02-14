import React from "react";
import { Link } from 'react-router-dom';
import snv1 from '../../assets/img/snv1.jpg'; // Asegúrate de que la ruta sea correcta



function Menu(){
  return(
    <>
      <div className="flex mt-4 items-center justify-center  sm:mt-16 md:mt-20">
          <h2 className="font-semibold text-fuchsia-400 font-asu text-5xl sm:text-4xl md:text-6xl"> 
            Feliz 
          </h2>
          <h1 className='text-5xl sm:text-4xl md:text-6xl text-rose-500 font-asu ml-6 '>
          San 
          </h1>

          <h1 className='text-5xl sm:text-4xl md:text-6xl font-semibold shadow-md text-fuchsia-400 font-asu ml-6 'style={{ textShadow: "0 4px 6px rgba(255, 20, 147, 0.9)" }}>
            Valentin
          </h1> 
        </div>
        <div className="flex mt-2 items-center justify-center">
        <h1 className="text-2xl text-stone-300 md:text-6xl font-semibold font-asu ml-6"
          style={{ textShadow: "0 4px 6px rgba(255, 20, 147, 0.9)" }}>
            14 De Febrero
        </h1>
        </div>


        <div className='flex  items-center mt-1 justify-center sm:text-4xl '>
          <div className="rounded-full ">
          <img className="h-48 w-48 rounded-full" src={snv1} alt="Imagen" />  
          </div>
        </div>
        
        <p className='flex items-center justify-center m-1'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tenetur in quas cupiditate ut quos neque iusto odit quae cum quod esse veniam ipsum id velit, eum sequi tempore accusantium.
        </p>
        <p className='flex items-center justify-center m-1'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tenetur in quas cupiditate ut quos neque iusto odit quae cum quod esse veniam ipsum id velit, eum sequi tempore accusantium.
        </p>
        <div className='px-12 flex  items-center mt-3 justify-center sm:text-4xl'>
        <Link to="/Cards" className='p-4 text-black no-underline hover:text-gray-700'>
                    Vamos!
        </Link>
        </div>
    </>
  )
};

export default Menu;
