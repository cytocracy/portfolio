import logo from '../logo.svg';
import '../css/App.css';
import TextAnimation from '../components/animations/TextAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-wrap justify-start place-content-start">
        <div className="w-full flex flex-wrap m-[4rem]">
          <div className="pfp flex justify-self-start mr-5 shrink-0">
            <img className="rounded-full h-[11rem]" src="https://avatars.githubusercontent.com/u/87245945" />
          </div>
          <div className="header-text flex flex-col grow justify-start items-start text-slate-50 whitespace-nowrap">
            <p className="text-5xl font-bold ">Theo Parker</p>
            <p className="text-lg font-light ml-1">Nice to meet you. I like to make cool things.</p>
            <div className="contact text-md font-light mt-5">
              <a href="https://github.com/cytocracy" target="_blank">
                <span className="mr-3">
                  <span className="icon mr-1">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  <span>cytocracy</span>
                </span>
              </a>
              <button id="discord" onClick={() => {
                navigator.clipboard.writeText('cyto#7288');
              }}>
                <span className="mr-3 group">
                  <span className="icon mr-1 relative">
                    <FontAwesomeIcon id="disc-icon" className="icon-default duration-200 group-hover:-translate-y-4 group-hover:opacity-0 ease-in-out" icon={faDiscord} />
                    <FontAwesomeIcon id="disc-icon-copy" className="opacity-0 group-hover:opacity-100 ease-in-out duration-200 icon-hover absolute left-0 translate-y-4 group-hover:translate-y-1" icon={faCopy} />
                  </span>
                  <span>cyto#7288</span>
                </span>
              </button>
              <a href="mailto:theop.parker@gmail.com" target="_blank">
                <span className="mr-3">
                  <span className="icon mr-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>theop.parker@gmail.com</span>
                </span>
              </a>
            </div>
            <div className="location text-md font-light">
              <a href="https://goo.gl/maps/muRsgaoAaLfZBCtx5" target="_blank">
                <span className="mr-3">
                  <span className="icon mr-1">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <span>San Francisco Bay Area</span>
                </span>
              </a>

            </div>
            <div className="school text-md font-light">
              <span className="mr-3">
                <span className="icon mr-1">
                  <FontAwesomeIcon icon={faUniversity} />
                </span>
                <span>Sacred Heart Prep '24</span>
              </span>
            </div>
          </div>

        </div>  

      </header>
    </div>
  );
}

export default App;
