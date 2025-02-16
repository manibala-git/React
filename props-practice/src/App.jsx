import './App.css'
import { ArrayProps } from './ArrayProps';
import { List } from './Components/List';

function App() {

  const items = [
    { id: 1, name: "Item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
  ];

  return (
    <>
      <List year="2nd" dept="IT" roll="303" />
      <List name="Akil" year="4th" dept="CSE" roll="301" />
      <List name="Ram" year="2th" dept="CSE" roll="019" />
      <List name="Kumar" year="3th" dept="ECE" roll="59" />
      <List dept="CSE" roll="19" />
      <ArrayProps items={items} />


    </>
  )
}



export default App
