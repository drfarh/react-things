
import './App.css'
import Avatar from './Avatar'
import Bio from './Bio'
import Gallery from './Gallery'
import List from './List'
import PackingList from './PackingList'
import TeaSet from './TeaSet'
import TodoList from './TodoList'

import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

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

    {/* Branch-5 */}
    <div>
      <h1>Branch 5 Passing props to a component </h1>
      <Avatar size={300} person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}/>
    </div>
    {/* Branch-6 */}
    <div>
    <h1>Branch 6 Conditional Rendering </h1>
      <PackingList />
    </div>

    {/* Branch-7 */}
  <div>
    <h1>Branch 7 Rendering Lists </h1>
    <List />
 </div>

  {/* Branch 8 */}
<div>
  <h1>Branch 8  Keeping Components Pure </h1>
  <TeaSet />
</div>

  {/* Branch 9 */}
<div>
  <h1>Branch 9 Your UI as a Tree</h1>
  <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
</div>

           
    </>
  )
}

export default App
