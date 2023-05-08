import React, { Component } from "react";

class Works extends Component {
  render() {
    return (
      <div className="container-fluid page" id="work">
        <div className="table-responsive center-div">
          <h1 style={{textAlign: 'center', marginBottom: 50}}>
            List of my projects
          </h1>
          <table className="table border-dark table-bordered table-secondary">
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Project Description</th>
                <th scope="col">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2">University Projects</td>
                <td>JRPG Game</td>
                <td>
                  <a
                    href="https://github.com/JMOatey/CapstoneProject"
                    target="_blank"
                  >
                    Github
                  </a>
                </td>
              </tr>
              <tr>
                <td>Photo-to-Sketch Conversion</td>
                <td>
                  <a
                    href="https://github.com/HO-COOH/CS4650-Project"
                    target="_blank"
                  >
                    Github
                  </a>
                </td>
              </tr>

              <tr>
                <td rowSpan="3">Web Dev Projects</td>
                <td>Rock-Paper-Scissors</td>
                <td>
                  <a
                    href="https://github.com/songvunguyen/rock-paper-scissors"
                    target="_blank"
                  >
                    Github
                  </a>
                </td>
              </tr>
              <tr>
                <td>Etch-a-Sketch</td>
                <td>
                  <a
                    href="https://github.com/songvunguyen/Etch-a-Sketch"
                    target="_blank"
                  >
                    Github
                  </a>
                </td>
              </tr>
              <tr>
                <td>Calculator</td>
                <td>
                  <a
                    href="https://github.com/songvunguyen/calculator"
                    target="_blank"
                  >
                    Github
                  </a>
                </td>
              </tr>

              <tr>
                <td rowSpan="4">Game Dev Projects</td>
                <td>Pong like game</td>
                <td>
                  <a href="https://github.com/songvunguyen/PP" target="_blank">
                    Github
                  </a>
                  <a href="https://songvunguyen.itch.io/pp" target="_blank">
                    Itch.io
                  </a>
                </td>
              </tr>
              <tr>
                <td>Snake like game</td>
                <td>
                  <a
                    href="https://github.com/songvunguyen/SnakeG"
                    target="_blank"
                  >
                    Github
                  </a>

                  <a href="https://songvunguyen.itch.io/sankeg" target="_blank">
                    Itch.io
                  </a>
                </td>
              </tr>
              <tr>
                <td>Alien Blaster game</td>
                <td>
                  <a
                    href="https://github.com/songvunguyen/AlienB"
                    target="_blank"
                  >
                    Github
                  </a>
                </td>
              </tr>
              <tr>
                <td>2D Platformer game</td>
                <td>
                  <a
                    href="https://github.com/songvunguyen/ProjectRunway"
                    target="_blank"
                  >
                    Github
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Works;
