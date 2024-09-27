import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function App() {
//   return (
//     <div>
//       <Profile
//         image="spider.jpg"
//         name="SPIDERMAN: MILES MORALES"
//         bio="Full-stack web developer and student at EKSU. When not coding or using
//           my laptop, I like to play games and eat."
//         skill1="HTML+CSS"
//         skill2="JAVASCRIPT"
//         skill3="WEB DEVELOPMENT"
//         skill4="GIssT AND GITHUB"
//         skill5="REACT"
//       />
//       <Profile
//         image="gojo.jpg"
//         name="SPIDERMAN: MILES MORALES"
//         bio="Full-stack web developer and student at EKSU. When not coding or using
//           my laptop, I like to play games and eat."
//         skill1="HTML+CSS"
//         skill2="JAVASCRIPT"
//         skill3="WEB DEVELOPMENT"
//         skill4="GIT AND GITHUB"
//         skill5="REACT"
//       />
//     </div>
//   );
// }
//

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="spider.jpg" alt="spider" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h3>SPIDERMAN: MILES MORALES</h3>
      <p>
        Full-stack web developer and student at EKSU. When not coding or using
        my laptop, I like to play games and eat.
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" color="green" />
      <Skill skill="REACT" emoji="💥" color="orange" />
      <Skill skill="JAVASCRIPT" emoji="📈" color="pink" />
      <Skill skill="Node" emoji="👌" color="blue" />
    </div>
  );
}
// function Profile(props) {
//   return (
//     <div className="card">
//       <img src={props.image} alt="gojo" className="avatar" />
//       <div className="data">
//         <h3> {props.name} </h3>
//         <p>{props.bio}</p>
//         <ul className="skill-list">
//           <li className="skill"> {props.skill1} </li>
//           <li className="skill"> {props.skill2} </li>
//           <li className="skill"> {props.skill3} </li>
//           <li className="skill"> {props.skill4} </li>
//           <li className="skill"> {props.skill5} </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
