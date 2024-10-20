import { siteConfig } from "@/config/site";

const data = siteConfig.timeline;

const Timeline = () => {
    return (
        <div className="relative flex flex-col min-h-[calc(100vh-350px)] md:pt-8 pt-8 items-center justify-center pl-5 lg:pl-0">
            <div className="mb-10 mt-3 ml-20 sm:pe-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{data.title}</h1>
                <p className="text-gray-700 dark:text-gray-200">{data.description}</p>
            </div>

            <ol className="relative border-s border-gray-800 dark:border-gray-700">
                {data.items.map((item, index) => (
                    <li key={index} className={`ms-6 ${index === data.items.length - 1 ? '' : 'mb-10'}`}>
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-700">
                            <svg className="w-2.5 h-2.5 text-blue-900 dark:text-blue-200" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <span className="flex -translate-y-[5px] items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                            {item.status && (
                                <span className="bg-blue-200 text-blue-900 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-700 dark:text-blue-200 ms-3">
                                    {item.status}
                                </span>
                            )}
                        </span>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">
                            {item.time}
                        </time>
                        <p className={`${index === 0 ? "mb-4 -pt-1" : ""}text-base font-normal text-gray-700 dark:text-gray-300`} dangerouslySetInnerHTML={{ __html: item.description }}>
                        </p>
                        {item.link && (
                            <a href={item.link.href}
                               className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-800 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-800 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                {item.link.label}
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                                </svg>
                            </a>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Timeline;
