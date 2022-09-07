//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div>
        <h1>
          Learn to paint by
          <br />
          watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div className="box box-blue">
          <p>
            <strong>Try it free 7 days</strong>
            then $20/mo. thereafter
          </p>
        </div>

        <form className="box" id="form">
          <div className="form-control">
            <input type="text" required id="firstname" placeholder="First Name" />
          </div>
          <div className="form-control">
            <input type="text" required id="lastname" placeholder="Last Name" />
          </div>
          <div className="form-control">
            <input type="email" required id="email" placeholder="Email Address" />

          </div>
          <div className="form-control">
            <input type="password" required id="password" placeholder="Password" />

          </div>

          <button>Claim your free trial</button>
          <small>
            By clicking the button, you are agreeing to our
            <a href="www.google.com">Terms and Services</a>
          </small>
        </form>
      </div>
    </div>
  );
}

export default App;
