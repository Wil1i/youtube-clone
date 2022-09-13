import React from "react";
import UpSide from "./components/UpSide/UpSide";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Videos from "./components/Videos/Videos";

const App = () => {
  return (
    <div>
      <UpSide />
      <LeftMenu />
      <Videos />
    </div>
  );
};

export default App;
