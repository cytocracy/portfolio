import React from 'react';

const ProjectCard = (props) => {
    let { name, slogan, image, logo, description, links } = props;


    return (
        <div id={name} className="card xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full">
            <div className="bg-slate-50 rounded-md">
                {image && <div className="card-image">
                    <figure className="image">
                        <img src={process.env.PUBLIC_URL + image} className="rounded-t-md aspect-video" alt={name} />
                    </figure>
                </div>}
                <div className="card-content">
                    <div className="flex p-5 items-center">
                        {logo && <div className="mr-3 shrink-0">
                            <figure className="logo">
                                <img src={process.env.PUBLIC_URL + logo} className="rounded-full w-10" alt={`${name} Logo`} />
                            </figure>
                        </div>}
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold">{name}</p>
                            <p className="text-md">{slogan}</p>
                        </div>
                    </div>
                    <div className="p-5 pt-0 text-sm">{description}</div>
                    <footer className="buttons flex  grow h-10  text-center w-full justify-items-stretch items-stretch">
                        {links.map((link, index) => {
                            let classes = (index < links.length - 1) ? "border-r-[1px] border-r-neutral-300" : "";
                            return (
                                <div key={link.name} className={classes + " " + "border-t-[1px] border-t-neutral-300 wrapper grow flex items-center justify-center"}>
                                    <a href={link.url} key={index} className={"button text-sm text-slate-800 text-center text flex items-center justify-center h-full w-full hover:text-slate-600"}>
                                        {link.name}
                                    </a>
                                </div>


                            )
                        }, this)}
                    </footer>
                </div>
            </div>
        </div>
    );

}

export default ProjectCard;
