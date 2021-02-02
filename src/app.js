import React from "react"
import ReactDOM from "react-dom"
import IndecisionApp from "./components/IndecisionApp"
import Modal from "react-modal"
import "normalize.css/normalize.css"
import "./styles/styles.scss"

const appRoot = document.getElementById("app")
Modal.setAppElement(appRoot)
ReactDOM.render(<IndecisionApp />, appRoot)
