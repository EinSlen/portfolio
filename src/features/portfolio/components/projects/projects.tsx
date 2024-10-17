import {basePath} from '@/utils';
import {Button} from "@/components/ui";

const projects = [
    {
        name: 'Okv photogram',
        description:
            "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
        techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/project01.webp`, // Remplace par le bon chemin d'image
    },
    {
        name: 'Okv photogram',
        description:
            "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
        techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/project01.webp`, // Remplace par le bon chemin d'image
    },
    {
        name: 'Okv photogram',
        description:
            "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
        techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/project01.webp`, // Remplace par le bon chemin d'image
    },
    {
        name: 'Okv photogram',
        description:
            "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
        techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/project01.webp`, // Remplace par le bon chemin d'image
    },
];

// @ts-ignore
const ProjectCard = ({ project }) => {
    return (
        <div className="dark:bg-gray-800 dark:border-gray-700 bg-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between shadow-lg mb-8 relative">
            {/* Section texte */}
            <div className="w-full mb-6 md:mb-0 z-10">
                <div className="flex items-center mb-4">
                    <span className="text-3xl mr-2">📸</span>
                    <h3 className="text-3xl font-bold">{project.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techUsed.map((tech: any) => (
                        <span key={tech} className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
              {tech}
            </span>
                    ))}
                </div>
                {/* Boutons visibles uniquement sur desktop et tablette */}
                <div className="flex gap-4 hidden md:flex">
                    <a href={project.siteLink} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                        Visit Site →
                    </a>
                    <a
                        href={project.githubLink}
                        className="text-black border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        GitHub →
                    </a>
                </div>
            </div>

            {/* Section image */}
            <div className="md:w-1/2 w-full flex justify-center relative">
                <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg shadow-2xl rotate-6 transform md:transform md:translate-x-6 md:translate-y-8 lg:translate-x-6 lg:-translate-y-8 w-3/4 md:w-full object-cover"
                />
            </div>

            {/* Boutons visibles uniquement sur mobile */}
            <div className="flex gap-4 pt-8 md:hidden">
                <a href={project.siteLink} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    Visit Site →
                </a>
                <a href={project.githubLink} className="text-black border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    GitHub →
                </a>
            </div>
        </div>
    );
};

export const SelectedWork = () => {
    return (
        <section className="container mx-auto px-4 py-8 pt-32">
            <h2 className="text-4xl font-bold mb-6">Selected Work</h2>
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
            <div className="text-center">
            <Button size="lg" variant={"outline"}>
                <a href={""}>Show more...</a>
            </Button></div>
        </section>
    );
};
