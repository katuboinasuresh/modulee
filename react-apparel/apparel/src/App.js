//import logo from './

import './App.css';

function App() {
  return (
    <>
      <header>
        <div class="logo"><img src="./images/logo.svg" alt="logo"></img></div>
      </header>
      <section class="container">
        <div class="left">
          <h1>We're <span>coming soon</span></h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <form action="#">
            <label for="Email">Email Address</label>
            <input name='Email' id="Email" value="" type="email" placeholder="Email Address"></input>
            <button type="submit"><img src="./images/icon-arrow.svg" alt="arrow"></img></button>
          </form>
        </div>
        <div class="right"></div>
      </section>
    </>
  );
}

export default App;
