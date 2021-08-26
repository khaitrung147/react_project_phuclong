import React from "react";
import E404 from '../../images/404.svg'
import { Link } from 'react-router-dom';
 
export default function ERR404() {
  return (
    <div className="container">
        <image src={E404} />
    </div>
  );
};