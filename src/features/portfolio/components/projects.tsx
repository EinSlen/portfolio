import {basePath} from '@/utils';
import {Button} from "@/components/ui";

const projects = [
    {
        name: 'TEST',
        description:
            "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
        techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/Flatcraft.webp`,
    },
    {
        name: 'TEST',
        description:
            "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
        techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/Raytracer.webp`,
    },
    {
        name: 'TEST',
        description:
            "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
        techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/image.webp`,
    },
    {
        name: 'TEST',
        description:
            "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
        techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/pokemon.webp`,
    },
];

// @ts-ignore
const ProjectCard = ({ project }) => {
    return (
        <div className="dark:bg-gray-800 dark:border-gray-700 bg-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between shadow-lg mb-8 relative">
            <div className="w-full mb-6 md:mb-0 z-10">
                <div className="flex items-center mb-4">
                    <span className="text-3xl mr-2">📸</span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techUsed.map((tech: any) => (
                        <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 hidden md:flex">
                    {project?.siteLink && (
                        <a href={project.siteLink} className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200 border border-gray-900">
                            Visit Site →
                        </a>
                    )}
                    <a
                        href={project.githubLink}
                        className="text-gray-900 dark:text-gray-200 bg-transparent dark:bg-gray-700 border border-gray-900 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200"
                        aria-label={`View ${project.name} on GitHub`}
                    >
                        GitHub →
                    </a>
                </div>
            </div>

            <div className="md:w-1/2 w-full flex justify-center relative">
                <img
                    src={project.image}
                    alt={`Screenshot of ${project.name} project`}
                    className="rounded-lg shadow-2xl rotate-6 transform md:transform md:translate-x-6 md:translate-y-8 lg:translate-x-6 lg:-translate-y-8 w-3/4 md:w-full object-cover"
                    loading="lazy"
                />
            </div>

            <div className="flex gap-4 pt-8 md:hidden">
                {project?.siteLink && (
                    <a href={project.siteLink} className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200 border border-gray-900">
                        Visit Site →
                    </a>
                )}
                <a
                    href={project.githubLink}
                    className="text-gray-900 dark:text-gray-200 bg-transparent dark:bg-gray-700 border border-gray-900 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200"
                    aria-label={`View ${project.name} on GitHub`}
                >
                    GitHub →
                </a>
            </div>
        </div>
    );
};

const SelectedWork = () => {
    return (
        <section className="container mx-auto px-4 py-8 pt-32">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Selected Work</h2>
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
            <div className="text-center">
                <a href="https://github.com/EinSlen?tab=repositories">
                    <Button key="show more" ariaLabel="Show more" size="lg" variant="outline">
                        Show more...
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default SelectedWork;