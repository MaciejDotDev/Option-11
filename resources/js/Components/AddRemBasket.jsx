import {  useForm } from "@inertiajs/react";
import React, { useState, useEffect} from "react";


const AddRemBasket = ({
    item,
    itemid,
    action,
    type,
    left,
    right,
    top,
    bottom,
    symbol,
    paddingTop,
    totalprice
}) => {

    const { data, setData, post, processing, errors, reset } = useForm({
        quantity: item,
        basketid: itemid,
        action: action,
        totalprice: totalprice,
    });

    const handleSubmit  = (e) => {
        e.preventDefault();

        post(route("basketAction"));
         //might want to change this so it requires not  a reload


    };

    return (
        <form onSubmit={handleSubmit}>


            <div
                className={
                    "rounded-circle bg-" +
                    type +
                    " d-flex justify-content-center align-items-center"
                }
                style={{
                    width: "15px",
                    height: "15px",
                    position: "relative",
                   paddingTop: {paddingTop},
                    right: right,
                    top: top,
                    bottom: bottom,
                    left: left,
                    cursor: "pointer",
                    alignItems: "center"

                }}
                onClick={handleSubmit}

            >
                <span
                    style={{
                        color: "#fff",
                        fontSize: "1rem",
                    }}
                >
                    <input type="submit" value={symbol}  />
                </span>
            </div>
        </form>
    );
};

export default AddRemBasket;
