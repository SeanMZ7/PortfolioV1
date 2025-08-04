// src/containers/projects/Projects.js

import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss"; // make sure file is named exactly this
import { socialMediaLinks, openSource } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";

const GithubRepoCard = lazy(() =>
  import("../../components/githubRepoCard/GithubRepoCard")
);

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    fetch("/profile.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch pinned repos.");
        return res.json();
      })
      .then((data) => {
        setRepos(data.data.user.pinnedItems.edges);
      })
      .catch((error) => {
        console.error(
          `GitHub Repo Fetch Error: ${error} — No projects rendered.`
        );
        setRepos([]);
      });
  }, []);

  if (!openSource.display || !Array.isArray(repos)) return null;

  return (
    <Suspense fallback={<Loading />}>
      <div className="main" id="projects">
        <div className="projects-header">
          <h1 className="project-title">Portfolio</h1>
          <p className="subTitle project-subtitle">Selected Projects</p>
        </div>
        <div className="repo-cards-div-main">
          {repos.map((repoItem) => (
            <GithubRepoCard
              repo={repoItem}
              key={repoItem.node.id}
              isDark={isDark}
            />
          ))}
        </div>
        <div className="more-projects-btn">
          <Button
            text="More Projects"
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </div>
    </Suspense>
  );
}
