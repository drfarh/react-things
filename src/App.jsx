
import './App.css'
import Bio from './Bio'
import Gallery from './Gallery'
import TodoList from './TodoList'
import TodoListChl2 from './TodoListChl2'
import TodoListChl3 from './TodoListChl3'

function App() {

  return (
    <>
    {/* Branch-2 */}
    <div>
      <h1>Branch 2 Importing - Exporting Components</h1>
      <Gallery/>
    </div>

    {/* Branch-3   */}
    <div>
      <h1>Branch 3 Markup with JSX</h1>
      <Bio />
    </div>

    {/* Branch-4 */}
    <div>
      <h1>Branch 4 JavaScript in JSX with curly braces </h1>
      <h2>Challange 1: Fix the code crashes </h2>
      <TodoList />
      <h2>Challange 2: Extract information into an object</h2>
      <TodoListChl2 />
      <h2>Challange 3: Write an expression inside JSX curly braces</h2>
      <TodoListChl3 />
    </div>
           
    </>
  )
}

export default App
