import ReactDOMClient from "react-dom/client"
import "sanitize.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const container = document.getElementById("root") as HTMLElement

const root = ReactDOMClient.createRoot(container)

root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line no-console
reportWebVitals(console.log)
