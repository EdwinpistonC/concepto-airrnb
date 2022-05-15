import React, { useRef, useState } from "react";
import styled from "styled-components";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

//React Components
//import PreviewMessage from "components/atom/PreviewMessage";
import UserListSection from "components/organism/UserListSection";

import { firebaseConfig } from "server/Firebase";

//React Components
import Header from "components/organism/Header";
import Footer from "components/organism/Footer";

firebase.initializeApp(firebaseConfig);
const uid = 10,
  photoURL = "https://api.adorable.io/avatars/23/abott@adorable.png";

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const Chat = styled.div`
  width: 50%;
  height: fit-content;
  margin: auto;
  display: block;
  > p {
    margin-left: 10%;
    margin-bottom: 10%;
  }
`;
const id = 20;

const Room = styled.div`
  flex-grow: 1;
  height: fit-content;
`;

export default function index() {
  return (
    <Chat>
      <ChatRoom />
    </Chat>
  );
}

const Message = styled.div`
  background: #dddddd;
  border-radius: 7px;
`;

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages-" + id);
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const collChats = [];
  messages.map(
    (msg) =>
      function () {
        if (msg.id > id) {
          collChats.add(firestore.collection("chat-" + id + "-" + msg.id));
        } else {
          collChats.add(firestore.collection("chat-" + msg.id + "-" + id));
        }
      }
  );

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    //const { uid , photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {" "}
      <Header></Header>
      <Room>
        <main>
          <span ref={dummy}>
            {messages &&
              messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          </span>
        </main>

        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Mandar mensaje"
          />

          <button type="submit" disabled={!formValue}>
            🕊️
          </button>
        </form>
      </Room>
      <Footer></Footer>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid ? "sent" : "received";
  return (
    <>
      <Message>
        <p>
          <strong>Persona</strong>
        </p>
        <img
          src={
            photoURL ||
            "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
          }
        />
        <p>{text}</p>
      </Message>
    </>
  );
}
