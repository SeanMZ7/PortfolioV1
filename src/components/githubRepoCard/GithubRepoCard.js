// src/components/githubRepoCard/GithubRepoCard.js

import React from "react";
import "./GithubRepoCard.scss";
import { Fade } from "react-reveal";
import { formatFileSizeDisplay } from "../../utils";

export default function GithubRepoCard({ repo, isDark }) {
  const openInNewTab = (url) => {
    if (!url) return;
    const win = window.open(url, "_blank");
    win?.focus();
  };

  const { name, description, url, diskUsage, languages } = repo.node;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
        onClick={() => openInNewTab(url)}
      >
        <div className="repo-card-header">
          <h3 className="repo-name">{name}</h3>
        </div>

        {description && (
          <p className="repo-description">{description}</p>
        )}

        <div className="repo-card-footer">
          <div className="repo-languages">
            {languages?.edges?.map(({ node: lang }, idx) => (
              <span className="repo-language" key={idx}>
                {lang.name}
              </span>
            ))}
          </div>
          <div className="repo-size">
            {diskUsage ? formatFileSizeDisplay(diskUsage) : "—"}
          </div>
        </div>
      </div>
    </Fade>
  );
}
