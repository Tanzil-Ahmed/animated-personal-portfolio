import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I drive impactful strategic initiatives and foster innovation
          <br /> to propel your companys growth and future success.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="/public/Relax GIF by Wegow - Find & Share on GIPHY.gif"
            alt=""
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>TECHNICAL</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>EXPERTISE</motion.b>{" "}
          </h1>
          <button>SKILL SET</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>PROGRAMING LANGUAGE</h2>
          <p>
            <br /> - Java
            <br />- C++
            <br /> - Python
          </p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DATABASE</h2>
          <p>
            - MySQL
            <br /> -MongoDB
          </p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>WEB TECHNOLOGIES</h2>
          <p>
            {" "}
            <br /> - HTML <br />
            - CSS
            <br />- JavaScript
            <br />- React JS
            <br />- Node JS
          </p>
          <button></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CLOUD COMPUTING</h2>
          <p>
            {" "}
            - GOOGLE CLOUD PLATFORM <br /> - MICROSOFT AZURE <br /> - AMAZON AWS
          </p>
          <button></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
