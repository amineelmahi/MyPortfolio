import { useEffect, useState } from "react";
import "./main.css";
import { projects } from "./MyProducts";

export default function Main() {
  const [ActiveButton, setActiveButton] = useState("All Projects");

  const handleActive = (ButtonName) => {
    setActiveButton(ButtonName);
  };
  const ButtonLabels = [
    "All Projects",
    "HTML & CSS",
    "JavaScript",
    "React & MUI",
    "Node & Express",
  ];

  
  const [Projects, setProjects] = useState(projects);

  useEffect(() => {
    handlefilter();
  }, [ActiveButton]);
  const handlefilter = () => {
    if (ActiveButton === "All Projects") {
      setProjects(projects); // Show all projects
    } else {
      const array = projects.filter((element) => {
        return element.category === ActiveButton;
      });
      setProjects(array);
      console.log(array);
    }
  };

  return (
    <main className="flex">
      <section className="Left-Section flex">
        {ButtonLabels.map((label, index) => (
          <button
            key={index}
            className={label === ActiveButton ? "active" : ""}
            onClick={() => {
              handleActive(label);
              handlefilter();
            }}
          >
            {label}
          </button>
        ))}
      </section>
      <section className="Right-Section flex">
        {Projects.map((item, index) => {
          return (
            <article className="card">
              <img src={item.img} alt="" />
              <div className="core">
                <h1 className="title">{item.title} </h1>
                <p className="subtitle">{item.subtitle}</p>
                <div className="icons flex">
                  <div className="flex" style={{ gap: "15px" }}>
                    <a href="" className="icon-link"></a>
                    <a href="" className="icon-github"></a>
                  </div>
                  <a className="more" href="">
                    More
                    <span className="icon-arrow-right2"></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
