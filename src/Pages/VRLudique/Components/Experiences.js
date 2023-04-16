export function Experiences() {
    return (
        <div className="experiences">
            <section className="relative isolate overflow-hidden bg-white px-6 py-10 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <blockquote className="text-center text-2xl title leading-8 text-gray-900 sm:text-5xl sm:leading-9 underline">
                        <p>Vivre des expériences</p>
                    </blockquote>
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl body leading-8 text-gray-900 sm:text-xl">
                            <p>Pour une première découverte, en toute tranquillité</p>
                        </blockquote>
                    </figure>
                </div>
            </section>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2 mt-10 mb-10">
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl title leading-8 text-gray-900 sm:text-xl">Expériences Film</dt>
                        <iframe className="rounded-lg mt-5 m-auto max-[320px]:w-[270px] h-[315px]" src="https://www.youtube.com/embed/QYuMF0fP6vk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl title leading-8 text-gray-900 sm:text-xl">Expériences Hand Tracking</dt>
                        <iframe className="rounded-lg mt-5 m-auto max-[320px]:w-[270px] h-[315px]" src="https://www.youtube.com/embed/u4FXtABlnFY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>
                </dl>
            </div>

            <section className="mt-20 relative isolate overflow-hidden bg-white px-6 py-10 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <blockquote className="text-center text-2xl title leading-8 text-gray-900 sm:text-4xl sm:leading-9">
                        <p>Pour des personnes expérimenter</p>
                    </blockquote>
                </div>
            </section>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2 mt-10 mb-10">
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl title leading-8 text-gray-900 sm:text-xl">Expériences Sportive</dt>
                        <iframe className="rounded-lg mt-5 m-auto max-[320px]:w-[270px] h-[315px]" src="https://www.youtube.com/embed/vL39Sg2AqWg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl title leading-8 text-gray-900 sm:text-xl">Expériences Interactives</dt>
                        <iframe className="rounded-lg mt-5 m-auto max-[320px]:w-[270px] h-[315px]" src="https://www.youtube.com/embed/faNsP7ExSt0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl title leading-8 text-gray-900 sm:text-xl">Expériences Horrifique</dt>
                        <iframe className="rounded-lg mt-5 m-auto max-[320px]:w-[270px] h-[315px]" src="https://www.youtube.com/embed/-FmO92a3r2o?start=2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl title leading-8 text-gray-900 sm:text-xl">Expériences artistiques</dt>
                        <iframe className="rounded-lg mt-5 m-auto max-[320px]:w-[270px] h-[315px]" src="https://www.youtube.com/embed/0aoUlwZxzow?start=2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                    </div>
                </dl>
            </div>
        </div>
    );
}