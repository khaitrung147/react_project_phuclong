import React from "react";
import firebase from "firebase";
import Menu from "./Menu";

class Home_admin extends React.Component {

  render() {
    return (
      <>
        <div style={{ height: '100vh' }} className="m-0 row">
          <Menu />
          <div className="col-10 p-3">
            <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/myreactproject-4e4c4.appspot.com/o/Project_react_asm%2Fimages%2FHomepage-background.jpg?alt=media&token=7aeb1a66-b15c-4cf4-8e55-b6b2d74e3640" alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Home_admin;
