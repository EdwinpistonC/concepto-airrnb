import React, { useRef, useState } from "react";
import styled from "styled-components";

import { GoogleLogin } from "react-google-login";

//React Components
import Header from "components/organism/Header";
import Footer from "components/organism/Footer";
const responseGoogle = (response) => {
  console.log(response);
  if (response.error == "popup_closed_by_user") {
    alert("usuario cerro el login");
    return;
  }
  alert("logueado! ");
};

export default function index() {
  return (
    <>
      <Header />
      <GoogleLogin
        clientId="549736276629-aqvo9h4oo8lnots3ttkto5j28n04ls52.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <Footer />
    </>
  );
}
