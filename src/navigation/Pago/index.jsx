import React, { useRef, useState } from "react";
import styled from "styled-components";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

//React Components
import Header from "components/organism/Header";
import Footer from "components/organism/Footer";
const onApprove = () => {
  alert("pago realizado");
};

export default function Pago() {
  return (
    <>
      <Header></Header>

      <PayPalScriptProvider options={{ "client-id": "test" }}>
        <PayPalButtons style={{ layout: "horizontal" }} onApprove={onApprove} />
      </PayPalScriptProvider>
      <Footer></Footer>
    </>
  );
}
