import welcomeFunc from "./app";
import "./App.css";

const root = document.getElementById("root");
root.innerHTML = `${welcomeFunc()}`;
