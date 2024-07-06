// import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import "./TabOptions.css";

const tabs = [
  {
    id: 1,
    name: "Snacks",
    active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop: "#FCEEC0",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
  },
  {
    id: 2,
    name: "Home Food",
    active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "#E5F3F3",
    inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
  },
  {
    id: 3,
    name: "Adds",
    active_img: "https://logodownload.org/wp-content/uploads/2019/08/google-adwords-logo-0.png",
    backdrop: "#EDf4FF",
    inactive_img: "https://cdn0.iconfinder.com/data/icons/simplicity/512/ads-512.png"
  },
];
const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className='tab-options'>
      <div className='max-width options-wrapper'>
        {tabs.map((tab) => (
          <div 
          className={`tab-item absolute-center cursor 
          ${activeTab===tab.name && "active-tab"
        }`}
          onClick={() => setActiveTab(tab.name)}
        >
          <div className="tab-image-container absolute-center"
          style={{
            backgroundColor: `${
              activeTab === tab.name ? tab.backdrop:""
          }` ,
           }}
           >
              <img
               className='tab-img' alt={(tab.name)} src={activeTab===tab.name ? tab.active_img : tab.inactive_img}
              />
          </div>
           <div className='tab-name'>{tab.name}</div>
        </div>
       ))}
      </div>
    </div>
  );
};

export default TabOptions
