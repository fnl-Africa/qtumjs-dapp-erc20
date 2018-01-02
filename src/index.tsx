import "bulma/css/bulma.css"
import "font-awesome/css/font-awesome.css"

import "./index.css"

import * as React from "react"
import { render } from "react-dom"

import { autorun } from "mobx"
import { Provider } from "mobx-react"

import { App } from "./views/App"
import { Store } from "./Store"

function main() {
  const store = new Store()
  store.init()

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root"))
}

window.addEventListener("load", main)
