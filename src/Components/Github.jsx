import React from "react";
import GitHubCalendar from "react-github-calendar";
import githubStyle from "../Styles/Github.module.css";
const Github = () => {
  return (
    <div className={githubStyle.github}>
      <p style={{ fontSize: "55px", fontWeight: "900", color: "black" }}>
        GITHUB
      </p>
      <div className={githubStyle.streakStatsContainer}>
        {/* https://streak-stats.demolab.com/demo/ */}
        <div className={githubStyle.streak}>
          <a href="https://github.com/sathyaPrasad650/github-readme-streak-stats">
            <img
              style={{ color: "red" }}
              title="🔥 Get streak stats for your profile at git.io/streak-stats"
              alt="sathyaPrasad650 streak"
              src="https://streak-stats.demolab.com?user=sathyaPrasad650&theme=dark&hide_border=true&border_radius=5&dates=FFFFFF&background=0071E3&border=FFFFFF&stroke=FFFFFF&ring=FFFFFF&fire=FFFFFF&currStreakNum=FFFFFF&sideNums=FFFFFF&currStreakLabel=FFFFFF&sideLabels=FFFFFF)](https://git.io/streak-stats"
            />
          </a>
        </div>

        <div className={githubStyle.stats}>
          <a href="https://github.com/sathyaPrasad650/github-readme-stats">
            <img
              alt="sathyaPrasad650 Github Stats"
              src="https://github-readme-stats.vercel.app/api?username=sathyaPrasad650&show_icons=true&locale=en&theme=react&hide_border=true&title_color=FFFFFF&bg_color=0071E3"
            />
          </a>
        </div>
      </div>

      {/* https://github.com/anuraghazra/github-readme-stats */}
      <div className={githubStyle.lang}>
        <a href="https://github.com/sathyaPrasad650/github-readme-stats">
          <img
            alt="sathyaPrasad650 Top Languages"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sathyaPrasad650&langs_count=8&count_private=true&layout=compact&theme=react&title_color=FFFFFF&hide_border=true&bg_color=0071E3"
          />
        </a>
      </div>

      {/* Need help in matching the website theme */}
      {/* <div align="center">
        <a href="https://github.com/sathyaPrasad650">
          <span>
            <img
              style={{ color: "red" }}
              alt=""
              align="center"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sathyaPrasad650&theme=github_dark"
            />
          </span>
        </a>
      </div> */}
      {/* Need help in matching the website theme */}

      {/* https://github.com/Ashutosh00710/github-readme-activity-graph#available-themes */}
      <div className={githubStyle.graph}>
        <a href="https://github.com/sathyaPrasad650/github-readme-activity-graph">
          <img
            alt="sathyaPrasad650 Activity Graph"
            src="https://activity-graph.herokuapp.com/graph?username=sathyaPrasad650&bg_color=0071E3&color=FFFFFF&line=FFFFFF&point=FFFFFF&area=true&hide_border=true&area_color=ECECEC"
          />
        </a>
      </div>

      {/* https://www.npmjs.com/package/react-github-calendar */}
      <div className={githubStyle.calendar}>
        <b>
          <p>GitHub Contribution Calendar</p>
        </b>
        <div>
          <GitHubCalendar
            username="sathyaPrasad650"
            color="#aacdf0"
            blockSize={17}
            fontSize={20}
            align="center"
          />
        </div>
      </div>
    </div>
  );
};

export default Github;
