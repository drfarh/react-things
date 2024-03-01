
import './App.css'
import Bio from './Bio'
import Gallery from './Gallery'
import TodoList from './TodoList'

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
      <TodoList />
    </div>
           
    </>
  )
}

export default App
