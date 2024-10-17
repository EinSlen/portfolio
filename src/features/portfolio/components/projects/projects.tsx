
import Card from "@/components/Card";
import Typography from "@/components/Typography";
import { Metadata } from "next";
import {siteConfig} from "@/config";

export const Projects = async () => {
    const professionalProjectsData: any = siteConfig.projects;

    return (
        <main className="container pt-16">
            <div className="flex flex-col gap-2  my-12">
                <Typography size="h3/semi-bold" className="!text-3xl sm:text-4xl">
                    Projects
                </Typography>
                <Typography size="body2/normal" variant="secondary">
                    Projects, I’ve worked on
                </Typography>
            </div>
            <span className="w-full block border border-primary-300 absolute right-0"></span>

            <div className="flex flex-col gap-2 my-4 mt-20">
                <Typography size="h5/semi-bold" variant="secondary">
                    Professional
                </Typography>

                <div className="flex flex-col gap-8 mb-4 ">
                    {professionalProjectsData.length ? (
                        professionalProjectsData
                            .sort(
                                (a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) =>
                                    new Date(b.createdAt).getTime() -
                                    Number(new Date(a.createdAt).getTime())
                            )
                            .map((data: { _id: any; title: any; description: any; demoLink: any; githubLink: any; logo: any; thumbnail: any; techUsed: any; }, index: any) => (
                                <Card
                                    key={data._id}
                                    title={data.title}
                                    description={data.description}
                                    actionLink={data.demoLink}
                                    actionText="Visit Site"
                                    secondaryActionLink={data.githubLink}
                                    secondaryActiontext="Github"
                                    projectLogoSrc={data.logo}
                                    projectScreenshotSrc={data.thumbnail}
                                    techUsed={data.techUsed}
                                    variant="projectCard"
                                />
                            ))
                    ) : (
                        <Typography>No Data found</Typography>
                    )}
                </div>
            </div>
        </main>
    );
};
