import {LazyLoadImage} from "react-lazy-load-image-component";

const datas = [
    {
        name: 'Airbus VR',
        description: 'Expérience en réalité virtuelle visant à découvrir les possibilités de la vr pour simplifié les revues techniques.',
        imageSrc: '/images/airbus.avif',
        imageAlt: 'Airbus plane',
        href: 'https://youtu.be/wVaHKXUkkao',
    },
    {
        name: 'Senior VR',
        description: 'Application pour découvrir la vr avec des vidéos 360°, jeux interactifs et vidéo d\'histoires.',
        imageSrc: '/images/senior.avif',
        imageAlt: 'Senior VR',
        href: 'vr-professionnel'
    }
]
export default function Solutions() {
    return (
        <div className="Solutions">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
                <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-10">
                    <h1 className="text-5xl title text-gray-900 mb-20">Solutions</h1>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        {datas.map((data) => (
                            <div key={data.name} className="group relative">
                                <div
                                    className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                                    <LazyLoadImage src={data.imageSrc} alt={data.imageAlt}
                                                   className="h-full w-full object-cover object-center"/>
                                </div>
                                <a href={data.href}>
                                    <h3 className="mt-6 mb-2 text-2xl title text-gray-900 ">
                                        <span className="absolute inset-0"/>
                                        {data.name}
                                    </h3>
                                </a>
                                <p className="body text-xl text-gray-500">{data.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
