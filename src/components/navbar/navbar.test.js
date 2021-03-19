import { render } from "react-dom"
import NavBar from "."
import { mainMenu } from "./constants"

describe("render navbar in main application", () => {
  test("should render with desktop", () => {
    const tempFun = jest.fn()
    render(<NavBar setActiveMenu={tempFun} mainMenuData={mainMenu} />)
  })
})
