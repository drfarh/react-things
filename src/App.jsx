
import './App.css'
import Avatar from './Avatar'
import Bio from './Bio'
import Canvas from './Canvas'
import Clock from './Clock'
import ColorApp from './ColorApp'
import DrinkListChl3 from './DrinkListChl3'
import FeedbackForm from './FeedbackForm'
import FeedbackFormCh4 from './FeedbackFormCh4'
import Form from './Form'
import Gallery from './Gallery'
import Gallery05 from './Gallery05'
import Gallery11 from './Gallery11'
import Gallery12 from './Gallery12'
import Image from './Image'
import LightSwitch from './LightSwitch'
import ListChl1 from './ListChl1'
import PackingList from './PackingList'
import PackingListChl2 from './PackingListChl2'
import Poem from './Poem'
import Profile05 from './Profile05'
import Profile05Chl3 from './Profile05Chl3'
import ProfileCh2 from './ProfileCh2'
import QueApp from './QueApp'
import RecipeListCh2 from './RecipeListCh2'
import RecipeListCh3 from './RecipeListCh3'
import RequestTracker from './RequestTracker'
import Scoreboard from './Scoreboard'
import Story from './Story'
import TodoList from './TodoList'
import TodoListChl2 from './TodoListChl2'
import TodoListChl3 from './TodoListChl3'
import TrafficLight from './TrafficLight'
import Tree from './Tree'

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

    {/* Branch-5 */}
    <div>
      <h1>Branch 5 Passing props to a component </h1>
      <h2>Challange 1: Extract a component</h2>
      <Gallery05 />
      <h2>Challange 2: Adjust the image size based on a prop</h2>
      <Profile05 />
      <h2>challange 3: Passing JSX in a children prop </h2>
      <Profile05Chl3 />
    </div>

    {/* Branch 6 */}
    <div>
      <h1>Branch 6: Conditional Rendering</h1>
      <h2>Challenge 1: Show an icon for incomplete items with ? :</h2>
      <PackingList />
      <h2>Challenge 2: Show an icon for incomplete items with &&</h2>
      <PackingListChl2 />
      <h2>Challenge 3 of 3: Refactor a series of ? : to if and variables </h2>
      <DrinkListChl3 />
    </div>

    {/* Branch 7 */}
    <div>
      <h1>Branch 7:  Rendering Lists </h1>
      <h2>Challenge 1: Splitting a list in two</h2>
      <ListChl1 />
      <h2>Challenge 2 : Nested lists in one component </h2>
      <RecipeListCh2 />
      <h2>Challenge 3 : Extracting a list item component</h2>
      <RecipeListCh3 />
      <h2>Challenge 4 : List with a separator</h2>
      <Poem />
    </div>

    {/* Branch 8 */}
    <div>
      <h1>Branch 8: Keeping Components Pure</h1>
      <h2>Challenge 1:Fix a broken clock </h2>
      <Clock />

      <h2>Challenge 2: Fix a broken profile</h2>
      <ProfileCh2 person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <ProfileCh2 person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
      
      <h2>Challenge 3: Fix a broken story tray. </h2>
      <Story />
    </div>

    {/* Branch 9 */}
    <div>
      <h1>Branch 9: Your UI as a Tree </h1>
      <Tree />
    </div>

    {/* Branch 10 */}
    <div>
      <h1>Branch 10: Responding to Events </h1>
      <h2>Challenge 1: Fix an event handler </h2>
      <LightSwitch />

      <h2>Challenge 2: Wire up the events </h2>
      <ColorApp />
    </div>

    {/* Branch 11 */}
    <div>
      <h1>Branch 11: State: A Component’s Memory </h1>
      <h2>Challenge 1: Complete the gallery </h2>
      <Gallery11 />

      <h2>Challenge 2: Fix stuck form inputs </h2>
      <Form />

      <h2>Challenge 3: Fix a crash </h2>
      <FeedbackForm />

      <h2>Challenge 4: Remove unnecessary state </h2>
      <FeedbackFormCh4 />
    </div>

    {/* Branch 12 */}
    <div>
      <h1>Branch 12: Render and Commit </h1>
      <h2>Step 1: Trigger a render </h2>
      <Image />
      
      <h2>Step 2: React renders your components</h2>
      <Gallery12 />
    </div>

    {/* Branch 13 */}
    <div>
      <h1>Branch 13: State as a Snapshot </h1>
      <h2>Challenge 1: Implement a traffic light component</h2>
      <TrafficLight />
    </div>

    {/* Branch 14 */}
    <div>
      <h1>Branch 14: Queueing a Series of State Updates </h1>
      <h2>Challenge 1: Fix a request counter </h2>
      <RequestTracker />

      <h2>Challenge 2: Implement the state queue yourself </h2>
      <QueApp />
    </div>

    {/* Branch 15 */}
    <div>
      <h1>Branch 15: Updating Objects in State </h1>
      <h2>Challenge 1: Fix incorrect state updates </h2>
      <Scoreboard />

      <h2>Challenge 2: Find and fix the mutation </h2>
      <Canvas /> <br/><br/><br/><br/><br/><br/><br/><br/>

      <h2>Challenge 3: Update an object with Immer </h2>
      <Canvas />
    </div>


           
    </>
  )
}

export default App
