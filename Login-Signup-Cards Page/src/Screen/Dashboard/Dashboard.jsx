import React from "react";
import { ItemsData } from "./ItemsData/ItemsData";
import Cards from "./Cards/Cards";

const Dashboard = () => {
  return (
    <div>
      {ItemsData.map((e, i) => {
        return (
          <Cards
            key={i}
            id={e.id}
            title={e.title}
            desc={e.description}
            image={e.image}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
