import React from "react";
import EventCard from "./components/EventCard";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import GlobalStayle from "./styles/global";

import DefaultPage from "./components/DefaultPage";

const App: React.FC = () => {
  return (
    <>
      <GlobalStayle />
      <TopBar />
      <Sidebar />
      <Main>
        <DefaultPage />
      </Main>
    </>
  );
};

export default App;
