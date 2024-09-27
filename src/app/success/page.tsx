'use client'
import Container from "@/components/Container";
import { clearCart } from "@/Redux/cart/cartSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Success = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(clearCart());
  }, [])
  return (
    <Container>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 h-1/2 shadow-md shadow-secondary/50 rounded-lg flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-center text-green-600">Payment successfull</h1>
        <p className="text-center">confirm your order!</p>
        </div>
      </div>
    </Container>
  );
};

export default Success;
