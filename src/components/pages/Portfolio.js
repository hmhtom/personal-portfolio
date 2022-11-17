import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const projects = [
    {
      projectName: "Tech Event Planner",
      type: "React",
      github: "https://github.com/hmhtom/tech-event-planner",
      deployed: "https://simple-cms-tech-blog.herokuapp.com/",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <PortfolioCard project={project} />
      ))}
    </>
  );
}

export default Portfolio;
