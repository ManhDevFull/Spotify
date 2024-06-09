import "./App.css"
import LayoutDefault from "./layout/LayoutDefault/index"
import { Routes, Route } from "react-router-dom"
import Home from "./component/Main/Homepage"
import Library from "./component/Library/Library"
import CLibrary from "./component/Library/index"
import History from "./component/Library/History"
import AllLibrary from "./component/Library/AllLibrary"
import Error404 from "./component/Error404"
function App() {
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                       _ooOoo_
//                      o8888888o
//                      88= . =88
//                      (| -_- |)
//                       O\ = /O
//                   ____/'---'\____
//                   .' \\|   |//'.
//                  / \\||| : |||// \
//                 / _|||||-:-|||||- \
//                  | | \\\ - /// | |
//                | \_| ''\---/'' | |
//                \ .-\__ '-' ___/-. /
//              ___'. .' /--.--\ '. . __
//          ."" '< '.___\_<|>_/___.' >' "".
//            | | : '-\'.;'\_/';.'/-' ; | |
//             \ \ '_. \_ __\/__ _/ .-' / / 
//      ===='-.____'-.___\_____/___.-'____.-'====
//                       '=---='
//          Cầu trời cầu phật code không bug
//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  
  return (
    <>

      <Routes>
        <Route path="/" element={<LayoutDefault />} >
          <Route path="/" element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="alllibrary" element={<Library />} >
            <Route index element={<AllLibrary />} />
            <Route path=":id" element={<CLibrary />} />
          </Route>
        </Route>
       <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}
export default App;