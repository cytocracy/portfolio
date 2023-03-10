import logo from '../logo.svg';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import TypeAnimation from 'react-type-animation'; 
import ProjectCard from '../components/ProjectCard';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header flex   place-content-start justify-center">
        <div className="w-full flex flex-col md:flex-row m-[2rem] md:m-[4rem] max-w-7xl">
          <div className="pfp flex justify-center md:mr-5 shrink-0 ">
            <img className="rounded-full w-[60vw] md:w-[11rem]" src="https://avatars.githubusercontent.com/u/87245945" />
          </div>
          <div className="header-text flex flex-col grow justify-start items-start text-slate-50 whitespace-nowrap">
            <p className="text-5xl font-bold mt-[2rem] md:mt-0">Theo Parker</p>
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
            <div className="contact text-md font-light mt-5 flex flex-col text-left place-items-start sm:block">
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
                  <span className="text-left">cyto#7288</span>
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
                <span>High School '24</span>
              </span>
            </div>
          </div>

        </div>  

      </header>

      <section id="about" className="text-base  text-left flex w-full justify-center text-slate-800">
        <div className="flex max-w-7xl w-full justify-start text-left m-[2rem] md:m-[4rem] flex-col">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-2">I'm a current high school student with an interest in computer science and a love for learning.</p>
          <p className="">Some things I'd like to learn more about are machine learning, game development, and data science.</p>
          <p className="">In my free time, I play videogames with friends, learn to play songs on piano and trumpet, design lights for theatre, and build cool robots.</p>
          <p>Please feel free to reach out to me at any of the socials linked above (though I'll probably respond quickest on discord). I am always open to trying new things, and would love to help you out with whatever new thing you are building.</p>
          
        </div>
      </section>

      <section id="projects" className="text-base  text-left flex w-full justify-center text-slate-800">
        <div className="flex max-w-7xl w-full justify-start text-left  mt-0 flex-col m-[2rem] md:m-[4rem] md:mt-0">
          <h1 className="text-3xl font-bold">Projects</h1>
          <div id="cards" className="flex flex-wrap justify-items-stretch flex-grow w-full relative mx-[-0.5rem]">
              <ProjectCard 
                name="Advent of Code"
                slogan="Advent coding puzzle solutions."
                image="/images/aoc.png"
                // logo="/images/aoclogo.png"
                languages={[
                  faPython,
                  faJava,
                ]}
                links={[{"name": "GitHub", "url": "https://github.com/cytocracy/AdventOfCode2022"}]}
                description="My solutions to the Advent of Code 2022 puzzles. Top placement was 105th global on day 4, so close to leaderboarddddd :')"
              />
              <ProjectCard 
                name="NxS"
                slogan="Sync schoology with notion."
                image="/images/notion.png"
                logo="/images/sn.png"
                languages={[
                  faPython,
                  
                ]}
                links={[{"name": "GitHub", "url": "https://github.com/cytocracy/Notion-Schoology-Public"}]}
                description="A program that imports all schoology assignments into a Notion database and keeps them in sync so you never have to touch Schoology again (ew). Currently in use, running on a cron job every minute and it has worked great for me so far."

              />
              <ProjectCard 
                name="Rehearsal Notifier"
                slogan="Never send a rehersal call again."
                image = "/images/email.png"
                languages={[
                  faPython,
                ]}
                links={[{"name": "GitHub", "url": "https://github.com/cytocracy/notion-email"}]}
                description="A program that sends an email to all cast members of a show of the rehearsal call for the next day. Currently in use by my school's theatre department."
              />
              <ProjectCard
                name="ATCS"
                slogan="Essentially a data structures course"
                image="/images/atcs.png"
                logo="/images/cpp.png"
                languages={[
                  faC,

                ]}
                links={[{"name": "GitHub", "url": "https://github.com/cytocracy/ATCS"}]}
                description="Coursework and projects from my Advanced Topics in Computer Science class. Taught in C++, I learned about data structures, algorithms, file compression, graph theory, machine learning, and more."
              />
              <ProjectCard
                name="ChessClub"
                slogan="Lichess rating tracker"
                logo="/images/clublogo.png"
                languages={[
                  faSquareJs,
                  faGoogle,
                ]}
                links={[{"name": "GitHub", "url": "https://github.com/cytocracy/chessclub/"}]}
                description="A web app that uses Google's graphing API to plot users' lichess ratings over time. Fun competition for my chess club."
              />
              <ProjectCard 
                name="Paradisu"
                slogan="Recreating themeparks virtually."
                image="/images/paradisu.jpg"
                logo="/images/paradisulogo.png"
                languages={[
                  faJava,
                ]}
                links={[
                  {"name": "GitHub", "url": "https://github.com/Paradisu/ParadisuPlugin"},
                  {"name": "Website", "url": "https://paradisu.net"}
                ]}
                description="Paradisu is a hobby Minecraft server that aims to make accurate recreations of real-world themeparks. ParadisuPlugin was developed to provide custom functionality beyond Minecraft's standard feature set. "
              />

              <ProjectCard 
                name="Codology"
                slogan="By techies, for techies."
                image="/images/codology.jpg"
                logo="/images/codologylogo.png"
                languages={[
                  faPython,
                  faSquareJs
                ]}
                links={[
                  {"name": "Website", "url": "https://codology.org"},
                  {"name": "GitHub", "url": "https://github.com/codologyorg"}
                ]}
                description={"Codology offers free, hands-on computer science courses for aspiring young adults. At Codology, each program consists of unique activities and topics, so students have something different to explore in every course. Students are able to learn from the comfort of home. Sign up your child for free courses today!"}
              />

              <ProjectCard 
                name="Request Love"
                slogan="Song requests made fun."
                // image="/images/requestlove.png"
                logo="/images/requestlovelogo.png"
                languages={[
                  faReact,
                  faPython
                ]}
                links={[
                  {"name": "*coming soon*", "url": "https://youtu.be/xvFZjo5PgG0"},
                ]}
                description={"Request Love is a product that aims to increase tip revenue for cover bands by giving fans the chance to request a song by leaving a tip. With a leaderboard for the top donations and public display of all song requests, Request Love keeps shows entertaining for fans and profitable for bands."}
              />

              {/* <ProjectCard 
                name="LightLab"
                slogan="*Cue Jeopardy theme*"
                description="In progress, check back for updates."
                links={[
                  {"name": "GitHub", "url": "https://github.com/cytocracy/LightLab"},
                ]}
              /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
