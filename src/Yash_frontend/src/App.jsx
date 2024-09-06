import { useState } from 'react';
import { Yash_backend } from 'declarations/Yash_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    Yash_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <section>
        <img src="/logo2.svg" alt="DFINITY logo" />
        <h1>Welcome to My Portfolio</h1>
        <p>Hello! I’m [Your Name], a passionate developer with expertise in [Your Skills].</p>
      </section>
      
      <section>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name: &nbsp;</label>
          <input id="name" name="name" type="text" />
          <button type="submit">Submit</button>
        </form>
        <div id="greeting">{greeting}</div>
      </section>
    </main>
  );
}

export default App;
