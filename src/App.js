import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import ToRead from "./components/ToRead";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  return (
    <div className="Main">
      <h3>Action Items</h3>
      <Tabs>
        <TabList>
        <div>
          <Tab>TO DO</Tab>
          <Tab>TO READ</Tab>
        </div>
        </TabList>

        <TabPanel>
         <Todo/>
        </TabPanel>
        <TabPanel>
          <ToRead/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
