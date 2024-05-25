import React, { useState } from "react";
import "/src/components/tab/TabExample.css";
import { FileText } from "lucide-react";
interface TabContent {
  [key: string]: string;
}
interface contenttab {}

const TabsExample: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Tab 1");

  const tabContent: TabContent = {
    "Tab 1": `<h2>تغییر ریجن اکانت اپیک گیمز Epic games</h2><img src='/src/assets/img/rigen.jpg'/>`,
    "Tab 2": "Content for Tab 2",
    "Tab 3": "Content for Tab 3",
  };

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="bg-slate-50 mr-11 pt-5">
      <button
        className={`tab ${selectedTab === "Tab 1" ? "active" : ""}`}
        onClick={() => handleTabClick("Tab 1")}
      >
        <li>
          <p className="flex items-center">
            <FileText size={18} /> <span>توضیحات</span>
          </p>
          <i className="goosh"></i>
        </li>
      </button>
      <button
        className={`tab ${selectedTab === "Tab 2" ? "active" : ""}`}
        onClick={() => handleTabClick("Tab 2")}
      >
        <li className="mr-10">
          <i className="gooshr"></i>
          <p className="flex items-center">
            <FileText size={18} /> <span> نحوه دریافت سفارش</span>
          </p>
          <i className="goosh"></i>
        </li>
      </button>
      <button
        className={`tab ${selectedTab === "Tab 3" ? "active" : ""}`}
        onClick={() => handleTabClick("Tab 3")}
      >
        <li className="mr-10">
          <i className="gooshr"></i>
          <p className="flex items-center">
            <FileText size={18} /> <span>برچسب ها</span>
          </p>
          <i className="goosh"></i>
        </li>
      </button>

      {/* Display content for the selected tab */}
      {selectedTab && (
        <div
          className="bg-white p-5 pt-8 pb-10 rounded-b-3xl rounded-l-3xl"
          dangerouslySetInnerHTML={{ __html: tabContent[selectedTab] }}
        ></div>
      )}
    </div>
  );
};

export default TabsExample;
