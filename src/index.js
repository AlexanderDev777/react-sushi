import React from "react"
import ReactDOM from "react-dom/client"

import "./style.scss"
import "macro-css"

import App from "./App"

const myStyle = {
	backgroundImage: "url('/img/bg2.png')",
};
const body = document.querySelector('body');
body.style.background = myStyle.backgroundImage;

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
