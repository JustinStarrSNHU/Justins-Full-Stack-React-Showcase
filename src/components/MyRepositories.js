import React, { useState, useEffect } from 'react';

const MyRepositories = () => {
  
  const JupyterBadge = "https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white";
  const EclipseBadge = "https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white";
  const JavaBadge = "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white";
  const VisualStudioBadge = "https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white";
  const AndroidStudioBadge = "https://img.shields.io/badge/android%20studio-346ac1?style=for-the-badge&logo=android%20studio&logoColor=white";
  const CBadge = "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white";
  const CPlusPlusBadge = "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white";
  const VSCodeBadge = "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white";
  const JavaScriptBadge = "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E";
  const OpenGLBadge = "https://img.shields.io/badge/OpenGL-%23FFFFFF.svg?style=for-the-badge&logo=opengl";
  const MongoDBBadge = "https://img.shields.io/badge/mongodb-003300?style=for-the-badge&logo=mongodb&logoColor=11FF11";
  const PythonBadge = "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54";
  const PowerShellBadge = "https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white";
  const NumpyBadge = "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white";
  const MatPlotLibBadge ="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black";
  const KerasBadge = "https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white";
  const TensorFlowBadge = "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white";
  const ExpressBadge = "https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=222222";
  const AngularBadge = "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white";
  const NodeBadge = "https://img.shields.io/badge/node.js-002200?style=for-the-badge&logo=nextdotjs&logoColor=green";
  const PostmanBadge = "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white";
  const DockerBadge = "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white";
  const AWSBadge = "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white";
  const DynamoDBBadge = "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white";
  const AmazonS3Badge = "https://img.shields.io/badge/Amazon%20S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white";
  const YAMLBadge = "https://img.shields.io/badge/yaml-%23ffffff.svg?style=for-the-badge&logo=yaml&logoColor=151515";
  const NPMBadge = "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white";
  const JWTBadge = "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens";
  const GitHubBadge = "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white";
  const GITBadge = "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white";  
  const PandasBadge = "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white";
  const ReactBadge = "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB";
  const GCloudBadge = "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white";

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/JustinStarrSNHU/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <div className="padding-bottom">
      <h1>My Repositories</h1>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id} className = "repo-item-padding">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
            {repo.name === "Client-Server-Development" && (
              <div>
                <img 
                  src={MongoDBBadge}
                  alt="MongoDB Badge" 
                  className="badge-padding"
                />
                <img 
                  src={PythonBadge}
                  alt="Python Badge" 
                  className="badge-padding"
                />
                <img 
                  src={JupyterBadge}
                  alt="Jupyter Badge" 
                  className="badge-padding"
                />
                <img 
                  src={NumpyBadge} 
                  alt="Jupyter Badge" 
                  className="badge-padding"
                />
                <img 
                  src={MatPlotLibBadge} 
                  alt="Jupyter Badge" 
                  className="badge-padding"
                />
                <img 
                  src={PandasBadge} 
                  alt="Jupyter Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge} 
                  alt="Jupyter Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Data-Structures-Algorithms---Analysis-and-Design" && (
              <div>
                <img 
                  src={EclipseBadge}
                  alt="Eclipse Badge"
                  className="badge-padding" 
                />
                                <img 
                  src={CPlusPlusBadge}
                  alt="C++ Badge"
                  className="badge-padding" 
                />
                                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge"
                  className="badge-padding" 
                />
              </div>

            )}
            {repo.name === "Embedded-Systems" && (
              <div>
                <img 
                  src={CBadge} 
                  alt="CBadge" 
                  className="badge-padding"
                />
                                <img 
                  src={GitHubBadge} 
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Emerging-Trends" && (
              <div>
                <img 
                  src={JupyterBadge}
                  alt="Jupyter Badge" 
                  className="badge-padding"
                />
                                <img 
                  src={PythonBadge}
                  alt="Python Badge" 
                  className="badge-padding"
                />
                                <img 
                  src={KerasBadge}
                  alt="Keras Badge" 
                  className="badge-padding"
                />
                                <img 
                  src={TensorFlowBadge}
                  alt="Tensor Flow Badge" 
                  className="badge-padding"
                />
                                <img 
                  src={NumpyBadge}
                  alt="Numpy Badge" 
                  className="badge-padding"
                />
                                <img 
                  src={MatPlotLibBadge}
                  alt="MatPlotLib Badge" 
                  className="badge-padding"
                />
                                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Full-Stack-Development-I" && (
              <div>
                <img 
                  src={MongoDBBadge}
                  alt="MongoDB Badge" 
                  className="badge-padding"
                />
                <img 
                  src={ExpressBadge}
                  alt="Express Badge" 
                  className="badge-padding"
                />
                <img 
                  src={AngularBadge}
                  alt="Angular Badge" 
                  className="badge-padding"
                />
                <img 
                  src={NodeBadge}
                  alt="NodeJS Badge" 
                  className="badge-padding"
                />
                <img 
                  src={JavaScriptBadge}
                  alt="JavaScript Badge" 
                  className="badge-padding"
                />
                <img 
                  src={VSCodeBadge}
                  alt="Visual Studio Code Badge" 
                  className="badge-padding"
                />
                <img 
                  src={PostmanBadge}
                  alt="Postman Badge" 
                  className="badge-padding"
                />
                <img 
                  src={PowerShellBadge}
                  alt="Power Shell Badge" 
                  className="badge-padding"
                />
                <img 
                  src={JWTBadge}
                  alt="Java Web Token Badge" 
                  className="badge-padding"
                />
                <img 
                  src={NPMBadge}
                  alt="NPM Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GITBadge}
                  alt="GIT Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Full-Stack-Development-II" && (
              <div>
                <img 
                  src={VSCodeBadge}
                  alt="Visual Studio Code Badge" 
                  className="badge-padding"
                />
                <img 
                  src={PowerShellBadge}
                  alt="Power Shell Badge" 
                  className="badge-padding"
                />
                <img 
                  src={DockerBadge}
                  alt="Docker Badge" 
                  className="badge-padding"
                />
                <img 
                  src={YAMLBadge}
                  alt="YAML Badge" 
                  className="badge-padding"
                />
                <img 
                  src={JavaScriptBadge}
                  alt="JavaScript Badge" 
                  className="badge-padding"
                />
                <img 
                  src={NPMBadge}
                  alt="NPM Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GITBadge}
                  alt="GIT Badge" 
                  className="badge-padding"
                />
                <img 
                  src={MongoDBBadge}
                  alt="Eclipse Badge" 
                  className="badge-padding"
                />
                <img 
                  src={ExpressBadge}
                  alt="Express Badge" 
                  className="badge-padding"
                />
                <img 
                  src={AngularBadge}
                  alt="Angular Badge" 
                  className="badge-padding"
                />
                <img 
                  src={NodeBadge}
                  alt="NodeJS Badge" 
                  className="badge-padding"
                />
                <img 
                  src={AWSBadge}
                  alt="AWS Badge" 
                  className="badge-padding"
                />
                <img 
                  src={AmazonS3Badge}
                  alt="Amazon S3 Badge" 
                  className="badge-padding"
                />
                <img 
                  src={DynamoDBBadge}
                  alt="Amazon DynamoDB Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Graphics-and-Visualization" && (
              <div>
                <img 
                  src={VisualStudioBadge} 
                  alt="Visual Studio Badge" 
                  className="badge-padding"
                />
                <img 
                  src={CPlusPlusBadge} 
                  alt="C++ Badge" 
                  className="badge-padding"
                />
                <img 
                  src={OpenGLBadge} 
                  alt="OpenGL Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge} 
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Mobile-Architecture" && (
              <div>
                <img 
                  src={AndroidStudioBadge}
                  alt="Android Studio Badge" 
                  className="badge-padding"
                />
                <img 
                  src={JavaBadge}
                  alt="Java Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "SDLC" && (
              <div>
                <img 
                  src={EclipseBadge} 
                  alt="Eclipse Badge" 
                  className="badge-padding"
                />
                <img 
                  src={JavaBadge} 
                  alt="Java Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge} 
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Secure-Coding" && (
              <div>
                <img 
                  src={VisualStudioBadge}
                  alt="Visual Studio Badge" 
                  className="badge-padding"
                />
                <img 
                  src={CPlusPlusBadge}
                  alt="C++ Badge" 
                  className="badge-padding"
                />
                <img 
                  src={PowerShellBadge}
                  alt="Power Shell Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Software-Reverse-Engineering" && (
              <div>
                <img 
                  src={VisualStudioBadge}
                  alt="Eclipse Badge" 
                  className="badge-padding"
                />
                <img 
                  src={CPlusPlusBadge}
                  alt="C++ Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Software-Security" && (
              <div>
                <img 
                  src={EclipseBadge}
                  alt="Eclipse Badge" 
                  className="badge-padding"
                />
                <img 
                  src={JavaBadge}
                  alt="Java Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Software-Testing-Automation-and-QA" && (
              <div>
                <img 
                  src={EclipseBadge}
                  alt="Eclipse Badge" 
                  className="badge-padding"
                />
                <img 
                  src={JavaBadge}
                  alt="Java Badge" 
                  className="badge-padding"
                />
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>
            )}
            {repo.name === "System-Analysis-and-Design" && (
              <div>
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "UI-UX-Design" && (
              <div>
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge" 
                  className="badge-padding"
                />
              </div>
            )}
            {repo.name === "learn-angular-from-scratch-step-by-step" && (
              <p>
              (This is the base repository for the work completed in Full-Stack-II Repository)
            </p>
            )}
            {repo.name === "learn-how-to-build-a-mean-stack-application" && (
              <p>
                (This is the base repository for the work completed in Full-Stack-I Repository)
              </p>
            )}
            {repo.name === "Spelling-Test-Personal-Project" && (
              <div>
                <img 
                  src={EclipseBadge}
                  alt="Eclipse Badge"
                  className="badge-padding" 
                />
                <img
                  src={JavaBadge}
                  alt="Java Badge"
                  className="badge-padding"
                />
                <img
                  src={GitHubBadge}
                  alt="GitHub Badge"
                  className="badge-padding"
                />
              </div>

            )}
            {repo.name === "Justins-Full-Stack-React-Showcase" && (
              <div>
                <img 
                  src={MongoDBBadge}
                  alt="MongoDB Badge"
                  className="badge-padding" 
                />
                <img 
                  src={ExpressBadge}
                  alt="Express Badge"
                  className="badge-padding" 
                />
                <img 
                  src={ReactBadge}
                  alt="react Badge"
                  className="badge-padding" 
                />
                <img 
                  src={NodeBadge}
                  alt="NodeJS Badge"
                  className="badge-padding" 
                />
                <img 
                  src={JavaScriptBadge}
                  alt="JavaScript Badge"
                  className="badge-padding" 
                />
                <img 
                  src={VSCodeBadge}
                  alt="Visual Studio Code Badge"
                  className="badge-padding" 
                />
                <img 
                  src={PostmanBadge}
                  alt="Postman Badge"
                  className="badge-padding" 
                />
                <img 
                  src={PowerShellBadge}
                  alt="Power Shell Badge"
                  className="badge-padding" 
                />
                <img 
                  src={NPMBadge}
                  alt="NPM Badge"
                  className="badge-padding" 
                />
                <img 
                  src={GITBadge}
                  alt="GIT Badge"
                  className="badge-padding" 
                />
                <img 
                  src={GitHubBadge}
                  alt="GitHub Badge"
                  className="badge-padding" 
                />
                <img 
                  src={DockerBadge}
                  alt="Docker Badge"
                  className="badge-padding" 
                />
                <img 
                  src={GCloudBadge}
                  alt="Google Cloud Badge"
                  className="badge-padding" 
                />
              </div>

            )}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyRepositories;