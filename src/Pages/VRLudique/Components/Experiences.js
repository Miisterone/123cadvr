import {LazyLoadImage} from "react-lazy-load-image-component";
export function Experiences() {
    return (
        <div className="experiences">
            <section className="relative isolate overflow-hidden bg-white px-6 py-10 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <blockquote className="text-center text-2xl font-extrabold leading-8 text-gray-900 sm:text-5xl sm:leading-9 underline">
                        <p>Vivre des expériences</p>
                    </blockquote>
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-xl">
                            <p>Pour une première découverte, en toute tranquillité</p>
                        </blockquote>
                    </figure>
                </div>
            </section>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2 mt-10 mb-10">
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences Film</dt>
                        <a href="https://www.youtube.com/watch?v=QYuMF0fP6vk" target="_blank">
                            <LazyLoadImage src="../images/jw.png" alt="jurassic world image" className="rounded-lg mt-5 m-auto"/>
                        </a>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences Hand Tracking</dt>
                        <a href="https://www.youtube.com/watch?v=u4FXtABlnFY" target="_blank" rel="opener">
                            <LazyLoadImage src="../images/elixir.png" alt="elixir image" className="rounded-lg mt-5 m-auto"/>
                        </a>
                    </div>
                </dl>
            </div>

            <section className="mt-20 relative isolate overflow-hidden bg-white px-6 py-10 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <blockquote className="text-center text-2xl font-bold leading-8 text-gray-900 sm:text-4xl sm:leading-9">
                        <p>Pour des personnes expérimenter</p>
                    </blockquote>
                </div>
            </section>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2 mt-10 mb-10">
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences Sportive</dt>
                        <a href="https://www.youtube.com/watch?v=vL39Sg2AqWg" target="_blank">
                            <LazyLoadImage src="../images/beatsaber.png" alt="beat saber image" className="rounded-lg mt-5 m-auto"/>
                        </a>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences Interactives</dt>
                        <a href="https://www.youtube.com/watch?v=faNsP7ExSt0" target="_blank">
                            <LazyLoadImage src="../images/richie.png" alt="elixir image" className="rounded-lg mt-5 m-auto"/>
                        </a>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences Horrifique</dt>
                        <a href="https://www.youtube.com/watch?v=-FmO92a3r2o" target="_blank">
                            <LazyLoadImage src="../images/dropdead.png" alt="drop dead image" className="rounded-lg mt-5 m-auto"/>
                        </a>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences artistiques</dt>
                        <a href="https://www.youtube.com/watch?v=0aoUlwZxzow" target="_blank">
                            <LazyLoadImage src="../images/gravity.png" alt="gravity image" className="rounded-lg mt-5 m-auto"/>
                        </a>
                    </div>
                </dl>
            </div>
        </div>
    );
}