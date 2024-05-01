import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  
  // console.log("projectId is ",id)
  // console.log("project is ",project);

  // console.log("projectUrl is ",project.gitHubUrl)
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
