import React from "react";
import AnimateModal from "@/Components/AnimateModal";
const ConfirmedReturnedOrder = ( {auth}) => {
    return (
        <AnimateModal auth={auth} >


            <div style={{ backgroundColor:"red", width:"50%", margin:"0 auto"  }}>


                <h1 style={{ textAlign:"center"}}>Thank you! Your order is being refunded.</h1>
            </div>
        </AnimateModal>
    );
}

export default ConfirmedReturnedOrder;
