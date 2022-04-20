import React, { useEffect, useState } from "react";
import { View } from "./Bikearray";
import { gather } from "./Connect";

export const Read=(paul)=>{

    const [cView, sView]=useState(
        {
      
      "bikeModelName":"",
      "bikeVariant":"" ,
      "bikeEngineCc":"",
      "bikeAverageMileage":"",
      "bikePrice":"",
      "bikeQuantity":"",
      "bikeColour":[],
      "bikeId":0
        }
    )

    useEffect(()=>{
        show()
    })

    const show =async()=>{
        const t= await gather(paul.who)
         sView(t.data)
    }    

    return (
       <>
         <div className=" container-fluid bg-dark">
           <h1 className="text-center mt-2 text-info ">Bike Details</h1>
               <div className="col-lg-5 col-md-10 col-sm-12">
               <div className="row justify-content-center text-white">

        
        <p><label>Bike Name : </label>{cView.bikeModelName}</p>
        <p><label>Bike Variant : </label>{cView.bikeVariant}</p>
        <p><label>Bike Engine : </label>{cView.bikeEngineCc}</p>
        <p><label>Bike Average : </label>{cView.bikeAverageMileage}</p>
        <p><label>Bike Price : </label>{cView.bikePrice}</p>
        <p><label>Bike Quantity : </label>{cView.bikeQuantity}</p>
        <p><label>Bike Color : </label>{cView.bikeColour}</p>
 
        </div>
           </div>
           </div>
    
        </>



    )}
   
