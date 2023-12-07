import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Links from "../sidebar/links/Links";

const items = [
  {
    id: 1,
    title: "Uber Dashboard with ETL Pipeline",
    img: "public/Vampires.gif",
    desc: "This project analyzes Uber data using GCP technologies (Storage, Compute Instance, BigQuery), Python scripts, and Mage data pipelines. It utilizes the TLC Trip Record dataset for yellow and green taxis, including pick-up/drop-off locations, fares, and passenger counts.",
  },
  {
    id: 2,
    title: "Azure Data Pipeline From Raw to Insights",
    img: "public/Pixel Jeff X Divoom.gif",
    desc: "Implemented a comprehensive Azure data engineering proj using PySpark. Leveraged Azure data warehouse, storage,and other services to construct, train, and deploy ETL pipelines. Successfully moved data within the Azure ecosystem.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>VISIT</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
