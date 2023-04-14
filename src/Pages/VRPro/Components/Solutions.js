import {LazyLoadImage} from "react-lazy-load-image-component";
export default function Solutions() {
    return (
        <div className="Solutions">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-20">
                    <h1 className="text-5xl title text-gray-900">Solutions</h1>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                        <a href={"https://youtu.be/wVaHKXUkkao"} className="group">
                            <div className="group relative">
                                <div
                                    className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <LazyLoadImage src="../images/airbus.avif" alt="image of anthony" className="h-full w-full object-cover object-center"/>
                                </div>
                                <h3 className="mt-6 text-2xl title text-gray-900 ">
                                    <span className="absolute inset-0"/>Airbus VR
                                </h3>
                                <div className="border-2 w-[100px] mb-1 border-[#104999] rounded-xl"/>
                                <p className="body text-xl text-gray-500 mb-6">Expérience en réalité virtuelle visant à découvrir les possibilités de la vr pour simplifié les revues techniques.</p>
                            </div>
                        </a>
                        <div className="group">
                            <div className="group relative">
                                <div
                                    className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <LazyLoadImage src="../images/senior.avif" alt="image of anthony" className="h-full w-full object-cover object-center blur-xl"/>
                                </div>
                                <h3 className="mt-6 text-2xl title text-gray-900 ">
                                    <span className="absolute inset-0"/>Senior VR
                                </h3>
                                <div className="border-2 w-[100px] mb-1 border-[#104999] rounded-xl "/>
                                <p className="body text-xl text-gray-500">Application pour découvrir la vr avec des vidéos 360°, jeux interactifs et vidéo d'histoires.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
