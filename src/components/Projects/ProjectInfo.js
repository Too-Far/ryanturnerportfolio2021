import missing from "./MIssingPerson404.png";
import canvasser from "./CanvasserScreenShot.png";
import WannaVote from "./WannaVoteScreenShot.png";
import cookin from "./WcScreenShot.png";

export const projects = [
  {
    name: "Missing Person 404",
    image: missing,
    blurb:
      "This is personal NPM project. Every night the backend scrapes a missing person site and catalogues the results. Then the results are randomized and displayed here, in place of a regular 404 page. Built with React, Python and  django. The API access point is deployed to Heroku.",
  },
  {
    name: "Whats Cookin",
    image: cookin,
    blurb:
      "This app aims to bring communities together. The principal idea behind the app is to allow neighbors to make 'offerings' to each other. Whether these offers are food, or activity. This is a startup I have been heavilly involved in. The front end of this project is React, the backend is Python/Django with Docker and AWS.",
  },
  {
    name: "Wanna Vote Canvasser",
    image: canvasser,
    blurb:
      "This app was created for a non-profit in the Election integrity space. For this project I built out the entire front end with React. This part of the Wanna Vote Application is to verify the authenticity of a voter taking the survey. The backend is created with C# and ASP.net in Azure.",
  },
  {
    name: "Wanna Vote Survey",
    image: WannaVote,
    blurb:
      "This is the Survey portion of the Wanna Vote Application. The principle idea behind this app is to survey voters as to how they voted, save that data in a database and compare it to the official results. This is built using React, Survey.js C# and ASP.net in Azure.",
  },
];
