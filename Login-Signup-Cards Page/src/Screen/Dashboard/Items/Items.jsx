import React from "react";
import { useParams } from "react-router-dom";
import { ItemsData } from "../ItemsData/ItemsData";
import { Container } from "@mui/system";
import style from "./Items.module.css";

const Items = () => {
  let { id } = useParams();
  let filterData = ItemsData.filter((e) => {
    return e.id == id;
  });
  console.log(filterData);
  return (
    <Container>
      <div className={style.body}>
        <h1 style={{ marginTop: "3%", fontFamily: "cursive" }}>
          Items Details
        </h1>
        {filterData.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p
              style={{
                marginTop: "3%",
                marginLeft: "25%",
                marginRight: "25%",
                fontFamily: "monospace",
              }}>
              {item.description}
            </p>
            <img
              style={{ width: "30%", marginLeft: "30%", marginTop: "3%" }}
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
        <button className={style.btn} onClick={() => window.location.reload()}>
          Refresh
        </button>
        <button className={style.btn} onClick={() => window.history.back()}>
          Back
        </button>
      </div>
    </Container>
  );
};

export default Items;
