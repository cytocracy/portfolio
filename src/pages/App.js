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
import TypeAnimation from 'react-type-animation'; 


function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-wrap  place-content-start justify-center">
        <div className="w-full flex flex-wrap m-[4rem] max-w-7xl">
          <div className="pfp flex justify-self-start mr-5 shrink-0">
            <img className="rounded-full h-[11rem]" src="https://avatars.githubusercontent.com/u/87245945" />
          </div>
          <div className="header-text flex flex-col grow justify-start items-start text-slate-50 whitespace-nowrap">
            <p className="text-5xl font-bold ">Theo Parker</p>
            {/* <p className="text-lg font-light ml-1">Nice to meet you. I like to make cool things.</p> */}
            <TypeAnimation className="text-lg font-light ml-1"
              cursor={true}
              sequence={[
                "Nice to meet you.", 2000, "", 500,
                "I like to make cool things.", 2000, "", 500,
              ]}
              wrapper="p"
              repeat={Infinity}
            />
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

      <section id="about" className="text-base  text-left flex w-full justify-center text-slate-800">
        <div className="flex max-w-7xl w-full justify-start text-left m-[4rem] flex-col">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-2">I'm a current high school student with an interest in computer science and a love for learning.</p>
          <p className="">Some things I'd like to learn more about are machine learning, game development, and data science.</p>
          <p className="">In my free time, I play videogames with friends, learn to play songs on piano and trumpet, design ights for theatre, and build cool robots.</p>
          <p>Please feel free to reach out to me at any of the socials linked above (though I'll probably respond quickest on discord). I am always open to trying new things, and would love to help you out with whatever new thing you are building.</p>
          
        </div>
      </section>

      <section id="projects" className="text-base  text-left flex w-full justify-center text-slate-800">
        <div className="flex max-w-7xl w-full justify-start text-left m-[4rem] mt-0 flex-col">
          <h1 className="text-3xl font-bold">Projects</h1>
          <div id="cards" className="flex flex-wrap justify-items-stretch flex-grow w-full relative mx-[-1rem]">
              <div id="paradisu" className="card">
                <div className="bg-slate-50 rounded-md">
                  <div className="card-image">
                    <figure className="image">
                      <img src={require("../images/paradisu.jpg")} className="rounded-t-md" alt="Paradisu" />
                    </figure>
                  </div>
                  <div className="card-content ">
                    <div className="media flex m-5 items-center">
                      <div className="media-left mr-3">
                        <figure className="logo">
                          <img src={require("../images/Paradisulogo.png")} className="rounded-full w-10" alt="Paradisu Logo" />
                        </figure>
                      </div>
                      <div className="media-content flex flex-col">
                        <p className="text-2xl font-bold">Paradisu</p>
                        <p className="text-md">Recreating themeparks virtually.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
