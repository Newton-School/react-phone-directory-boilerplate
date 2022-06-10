import React from "react";
import "../styles/App.css";
import { useState, useEffect } from "react";
import Trie from "./TrieTree";
import useTrieSeach from "./useTrieSearch";
import contactDB from "./db.json";

const nameTrie = new Trie();
const phoneTrie = new Trie();
contactDB.forEach((contact, index) => {
  nameTrie.insert(contact.name, index);
  phoneTrie.insert(contact.phone, index);
});

const ContactsInput = ({}) => {
  const textHandler = (e) => {};

  const dialpadHandler = (e) => {
    e.preventDefault();
    let num = e.currentTarget.dataset.key;
    if (num === "back") {
    } else if (num == "call") {
      //reset the number when call button is clicked
    } else {
      // set the number
    }
  };

  return (
    <div className="dial-pad">
      <input
        type="text"
        id="name-search"
        className="dial-screen"
        value={""}
      ></input>
      <hr />
      <div className="dial-screen">{}</div>
      <div className="dial-table">
        <div className="dial-table-row">
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="1"
            >
              <div className="dial-key">1</div>
            </div>
          </div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="2"
            >
              <div className="dial-key">2</div>
            </div>
          </div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="3"
            >
              <div className="dial-key">3</div>
            </div>
          </div>
        </div>
        <div className="dial-table-row">
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="4"
            >
              <div className="dial-key">4</div>
            </div>
          </div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="5"
            >
              <div className="dial-key">5</div>
            </div>
          </div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="6"
            >
              <div className="dial-key">6</div>
            </div>
          </div>
        </div>
        <div className="dial-table-row">
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="7"
            >
              <div className="dial-key">7</div>
            </div>
          </div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="8"
            >
              <div className="dial-key">8</div>
            </div>
          </div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="9"
            >
              <div className="dial-key">9</div>
            </div>
          </div>
        </div>
        <div className="dial-table-row">
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="*"
            >
              <div className="dial-key">*</div>
            </div>
          </div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="0"
            >
              <div className="dial-key">0</div>
            </div>
          </div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="#"
            >
              <div className="dial-key">#</div>
            </div>
          </div>
        </div>
        <div className="dial-table-row no-sub-key">
          <div className="dial-table-col"></div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="call"
            >
              <div className="dial-key">
                <i className="fa fa-phone"></i>
              </div>
            </div>
          </div>
          <div className="dial-table-col">
            <div
              className="dial-key-wrap"
              onClick={dialpadHandler}
              data-key="back"
            >
              <div className="dial-key">
                <i className="fa fa-long-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactsList = ({}) => {
  return (
    <div className="contacts">
      <div className="title">Contacts</div>
      {/* <div className="people" key={index}>
            <div className="name">{contact.name}</div>
            <div className="phone">{contact.phone}</div>
          </div> */}
    </div>
  );
};

const App = () => {
  useEffect(() => {
    if (nameSearch == "" && phoneSearch !== "") {
    }
    if (nameSearch !== "" && phoneSearch == "") {
    }
  });

  return (
    <div id="main">
      <div className="dial-pad-wrap">
        <div className="left-pan">
          <ContactsList />
        </div>
        <ContactsInput />
      </div>
    </div>
  );
};

export default App;
