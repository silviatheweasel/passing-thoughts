import './App.css';
import ThoughtInputForm from '../ThoughtInputForm/ThoughtInputForm';
import Thought from '../Thought/Thought';
import { getExpireTime, generateID } from '../../Utilities/Utilities';
import { useState } from "react";

function App() {
  const [thoughts, setThoughts] = useState([
    { id: generateID(),
      text: "This is a place for your passing thoughts.",
      expireTime: getExpireTime()
    },
    { id: generateID(),
      text: "They'll be removed after 15 seconds.",
      expireTime: getExpireTime()
    }
  ]);

  const addThought = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
  }

  const removeThought = (IDtoRemove) => {
    setThoughts((thoughts) => thoughts.filter(thought => thought.id !== IDtoRemove));
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
          <ThoughtInputForm addThought={addThought}/>
          <ul>
            {thoughts.map((thought) => (
              <Thought 
                thought={thought}
                key={thought.id}
                removeThought={removeThought}
              />
            ))}
          </ul>

      </main>     
    </div>
  );
}

export default App;
