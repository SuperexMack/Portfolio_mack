import './App.css'
import { FindMe } from './FIndMe/FindMe'
import { PeopleSay } from './People/People'
import { Project } from './Projects/Project'
import { User } from './UserSection/User'

function App() {
  return (
    <>
      <div className="h-auto  w-full bg-gray-900 text-white flex flex-col items-center space-y-20 py-10">
        <User />
        <div className="bg-teal-600 w-[40%] h-[1px]" />
        <Project />
        <PeopleSay></PeopleSay>
        <FindMe></FindMe>
      </div>
    </>
  )
}

export default App
