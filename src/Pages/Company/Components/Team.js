import {LazyLoadImage} from "react-lazy-load-image-component";
export default function Team() {
    return (
        <div className="Team">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-16 lg:max-w-none lg:py-16">
                    <h2 className="text-3xl title text-transform: uppercase text-gray-900">Notre équipe</h2>

                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">

                        <div className="group relative" style={{textAlign: "-webkit-center"}}>
                            <div className="mt-20 relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 max-lg:w-80">
                                <LazyLoadImage src="../images/anthony.avif" alt="image of anthony" className="h-full w-full object-cover object-top"/>
                            </div>
                            <p className="mt-6  text-2xl body font-semibold text-gray-900 lg:text-center">Anthony Poineau</p>
                            <h3 className="text-xl body text-gray-500 lg:ml-[53px] xl:ml-[95px]">
                                <span className="absolute inset-0" />Animateur
                            </h3>
                        </div>

                        <div className="group relative" style={{textAlign: "-webkit-center"}}>
                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 max-lg:w-80">
                                <LazyLoadImage src="../images/mathieu.avif" alt="image of mathieu" className="h-full w-full object-cover object-top"/>
                            </div>
                            <p className="mt-6 text-2xl body font-semibold text-gray-900 lg:text-center">Mathieu Flacelière</p>
                            <h3 className="text-xl body text-gray-500 lg:ml-[45px] xl:ml-[88px]">
                                <span className="absolute inset-0" />
                                CEO
                            </h3>
                        </div>

                        <div className="group relative" style={{textAlign: "-webkit-center"}}>
                            <div className="mt-20 relative h-64 w-full overflow-hidden rounded-lg bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 max-lg:w-80">
                                <LazyLoadImage src="../images/joris.avif" alt="image of joris" className="h-full w-full object-cover object-center"/>
                            </div>
                            <p className="mt-6  text-2xl body font-semibold text-gray-900 lg:text-center">Joris Pader</p>
                            <h3 className="text-xl body text-gray-500 lg:ml-[86px] xl:ml-[75px]">
                                <span className="absolute inset-0" />
                                Développeur VR/WEB
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
