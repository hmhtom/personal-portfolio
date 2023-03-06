import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const projects = [
    {
      projectName: "Tech Event Planner",
      type: "MERN Stack",
      github: "https://github.com/hmhtom/tech-event-planner",
      deployed: "https://tech-event-planner.herokuapp.com/",
      imgURL: "tech-event-planner",
    },
    {
      projectName: "NAS-Center",
      type: "MERN Stack/GraphQL",
      github: "https://github.com/hmhtom/NAS-Centre",
      deployed: "https://nas-center.herokuapp.com/",
      imgURL: "simple-notpad",
    },
    {
      projectName: "Tech Blog",
      type: "Express MySQL",
      github: "https://github.com/hmhtom/tech-blog",
      deployed: "https://simple-cms-tech-blog.herokuapp.com/",
      imgURL: "tech-blog",
    },
    {
      projectName: "Your Movie Database",
      type: "jQuery YoutubeAPI TMDBAPI",
      github: "https://github.com/hmhtom/Your-Movie-Databse",
      deployed: "https://hmhtom.github.io/Your-Movie-Databse/",
      imgURL: "ymdb",
    },
    {
      projectName: "Code Quiz",
      type: "HTML CSS  Javascript",
      github: "https://github.com/hmhtom/coding-quiz",
      deployed: "https://hmhtom.github.io/coding-quiz/",
      imgURL: "code-quiz",
    },
    {
      projectName: "E-Commerce Platform",
      type: "MERN Stack/Apollo GraphQL",
      github: "https://github.com/hmhtom/e-commerce-platform",
      deployed: "https://github.com/hmhtom/e-commerce-platform",
      imgURL: "weather-dashboard",
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
