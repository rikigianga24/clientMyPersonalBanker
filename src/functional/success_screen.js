import React from "react"
import "./success.css"
class successScreen extends React.Component{
    render(){
        document.body.style.overflowY = "hidden";
    return(
        <>
         <div id="success" className=" success container h-100 mb-4 d-flex justify-content-center align-items-center">
             <div className="container text-center">
             <h1>Pagamento effettuato!</h1>
                <a href="/profile" class="alert-link"> Torna al profilo </a>
            </div>
             </div>

            
        </>
              
            
    )      
}
}
export default successScreen;