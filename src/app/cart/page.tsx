import Container from "@/components/Container";
import React from "react";
import CartList from "@/components/cart/CartList";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Cart = async () => {
  const user = await getServerSession();
  if(!user) {
    redirect('/signin')
  }
  return (
    <div>
      <Container>
        <CartList />
      </Container>
    </div>
  );
};

export default Cart;
