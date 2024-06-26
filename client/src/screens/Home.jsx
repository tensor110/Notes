import React from "react";
import Card from "../components/Card";
import CardData from "../data/script";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="m-8 flex gap-8 flex-wrap justify-center">
        {CardData.map((item, index) => (
          <Card
            key={index}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
            learn_path={item.learn_path}
            question_path={item.question_path}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
