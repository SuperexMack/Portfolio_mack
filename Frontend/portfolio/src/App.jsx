import './App.css'
import { Project } from './Projects/Project'
import { User } from './UserSection/User'

function App() {
  return (
    <>
      <div className="h-[9000px] w-full bg-gray-900 text-white flex flex-col items-center space-y-20 py-10">
        <User />
        <div className="bg-teal-600 w-[40%] h-[1px]" />
        <Project />
      </div>
    </>
  )
}

export default App
