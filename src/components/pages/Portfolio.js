import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const projects = [
    {
      projectName: "Tech Event Planner",
      type: "Express MySQL",
      github: "https://github.com/hmhtom/tech-event-planner",
      deployed: "https://tech-event-planner.herokuapp.com/",
      imgURL: "tech-event-planner",
    },
    {
      projectName: "Simple Notpad",
      type: "Express",
      github: "https://github.com/hmhtom/simple-notepad",
      deployed: "https://simple-notepad-for-everyone.herokuapp.com/",
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
      projectName: "Weather Dashboard",
      type: "OpenWeather API",
      github: "https://github.com/hmhtom/weather-dashboard",
      deployed: "https://hmhtom.github.io/weather-dashboard/",
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
