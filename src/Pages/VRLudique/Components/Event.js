import {LazyLoadImage} from "react-lazy-load-image-component";

const datas = [
    {
        name: 'Double jeux',
        date: '25.02.23 (mensuel)',
        lieu: "Toulouse",
        imageSrc: '/images/doublejeux.png',
        imageAlt: 'image de double jeux',
    },
    {
        name: 'La mélée numérique',
        date: '28.09.22',
        lieu: "Toulouse",
        imageSrc: '/images/melee.png',
        imageAlt: 'image de la mélée numérique',
    },
    {
        name: 'Palais des sports',
        date: '24.04.22',
        lieu: "Toulouse",
        imageSrc: '/images/palais.png',
        imageAlt: 'image du palais des sports',
    },
    {
        name: 'Les girandières',
        date: '04.03.22',
        lieu: "Toulouse",
        imageSrc: '/images/girandiere.png',
        imageAlt: 'image des girandières',
    },
]

export function Event() {
    return (
        <div className="event bg-gradient-to-r from-[#3A78D1] to-[#09397D] p-5">
            <section className="relative isolate overflow-hidden px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <blockquote className="text-center text-white text-2xl font-extrabold leading-8 sm:text-5xl sm:leading-9 underline">
                        <p>Événements</p>
                    </blockquote>
                </div>
            </section>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 mt-10 mb-10">
                    {datas.map((data) => (
                        <div className="max-w-sm rounded border-2 overflow-hidden shadow-lg bg-white">
                            <LazyLoadImage className="w-full"  src={data.imageSrc} alt={data.imageAlt}/>
                            <div className="px-6 py-4">
                                <div className="grid grid-cols-2">
                                    <p className="text-gray-700 text-xl text-semibold text-start">{data.date}</p>
                                    <p className="text-gray-700 text-xl text-semibold text-right">{data.lieu}</p>
                                </div>
                                <p className="text-gray-700 text-xl text-semibold text-start mt-5">{data.name}</p>
                            </div>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}