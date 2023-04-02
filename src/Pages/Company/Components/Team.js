import {LazyLoadImage} from "react-lazy-load-image-component";
export default function Team() {
    return (
        <div className="Team">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-transform: uppercase text-gray-900">Notre équipe</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <LazyLoadImage src="../images/mathieu.png" alt="image of mathieu" className="h-full w-full object-cover object-center"/>
                            </div>
                            <p className="mt-6 text-base font-semibold text-gray-900">Mathieu Flacelière</p>
                            <h3 className="text-sm text-gray-500">
                                <span className="absolute inset-0" />
                                CEO
                            </h3>
                        </div>
                        <div className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <LazyLoadImage src="../images/anthony.png" alt="image of anthony" className="h-full w-full object-cover object-center"/>
                            </div>
                            <p className="mt-6 text-base font-semibold text-gray-900">Anthony Poineau</p>
                            <h3 className="text-sm text-gray-500">
                                <span className="absolute inset-0" />Animateur
                            </h3>
                        </div>
                        <div className="group relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <LazyLoadImage src="../images/joris.png" alt="image of joris" className="h-full w-full object-cover object-center"/>
                            </div>
                            <p className="mt-6 text-base font-semibold text-gray-900">Joris Pader</p>
                            <h3 className="text-sm text-gray-500">
                                <span className="absolute inset-0" />
                                Développeur VR & WEB
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
