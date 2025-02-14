import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink} from 'reactstrap';
import { Link } from 'react-router-dom';


function Cards(props){
    return(
        <div className="max-w-xs mx-auto  py-4"> 
        <Card className="w-full shadow-sm rounded-lg bg-transparent">
          <CardBody className="p-2">
            <CardTitle className="text-sm "><h5 className='text-red-600'>{props.ciu}</h5></CardTitle>
          </CardBody>
          <img
            alt={props.imagen}
            src={props.imag}
            className="w-22 h-32 object-cover rounded-t-lg m-1 rounded-full"></img>
          <CardBody className="text-xs p-2 ">
            <CardText className='text-teal-700 text-sm'>
                {props.desc}
              </CardText>
                  <Link  className='p-4 text-red-700  hover:text-gray-700 text-sm'>
                      Ver Mas
                  </Link>
          </CardBody>
        </Card>
      </div>
    );
}

export default Cards;