import React from "react";
import GithubRepoCard from "./GithubRepoCard";

export default function OpenSource() {
  const repos = [
    {
      node: {
        name: "Adaptive Productivity Platform",
        description: "LLM-powered system for mood-aware planning and self-tracking.",
        url: "https://github.com/SeanMZ7/adaptive-productivity",
        diskUsage: 2050,
        languages: {
          edges: [{ node: { name: "Python" } }, { node: { name: "JavaScript" } }]
        }
      }
    },
    {
      node: {
        name: "LSTM Stock Forecasting",
        description: "Multi-horizon deep learning pipeline for securities forecasting.",
        url: "https://github.com/SeanMZ7/stock-forecasting-mh-dl",
        diskUsage: 1500,
        languages: {
          edges: [{ node: { name: "Python" } }]
        }
      }
    },
    {
      node: {
        name: "Scoutek",
        description: "AI system for pitch strategy and scouting based on live game data.",
        url: "https://github.com/SeanMZ7/scoutek",
        diskUsage: 1850,
        languages: {
          edges: [{ node: { name: "Python" } }, { node: { name: "FastAPI" } }]
        }
      }
    }
  ];

  return (
    <div className="repo-cards-div-main">
      {repos.map((repo, index) => (
        <GithubRepoCard key={index} repo={repo} isDark={false} />
      ))}
    </div>
  );
}
