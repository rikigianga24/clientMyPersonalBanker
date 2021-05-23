import React from "react";
import "../style.css";

class homecomponent extends React.Component{
    render(){
       
            document.body.style.overflowY = "hidden";
        
        return(
            <>
            <div class="cover-page-content">
               <h1>La tua banca a casa tua</h1>
               <a href="/login">Accedi ora!</a>
            </div>
            </>
        )
    }
}
export default homecomponent