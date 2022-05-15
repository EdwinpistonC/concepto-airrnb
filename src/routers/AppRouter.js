import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//React components
import Home from "navigation/Home";
import Chat from "navigation/Chat";
import Pago from "navigation/Pago";
import Login from "navigation/Login";

export const AppRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* compañero */}
        <Route path="chat" element={<Chat />}></Route>
        <Route path="pago" element={<Pago />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {children}
    </BrowserRouter>
  );
};
