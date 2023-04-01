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
                        <img src="../Images/jw.png" alt="jurassic world image" className="rounded-lg mt-5 m-auto"/>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences Hand Tracking</dt>
                        <img src="../Images/elixir.png" alt="elixir image" className="rounded-lg mt-5 m-auto"/>
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
                        <img src="../images/beatsaber.png" alt="beat saber image" className="rounded-lg mt-5 m-auto"/>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences Interactives</dt>
                        <img src="../images/richie.png" alt="elixir image" className="rounded-lg mt-5 m-auto"/>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences Horrifique</dt>
                        <img src="../images/dropdead.png" alt="drop dead image" className="rounded-lg mt-5 m-auto"/>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col">
                        <dt className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl">Expériences artistiques</dt>
                        <img src="../images/gravity.png" alt="gravity image" className="rounded-lg mt-5 m-auto"/>
                    </div>
                </dl>
            </div>
        </div>
    );
}