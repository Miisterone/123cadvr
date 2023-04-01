const datas = [
    {
        imageSrc: '/images/laroche.png',
        imageAlt: 'laroche logo',
    },
    {
        imageSrc: '/images/lamelee.png',
        imageAlt: 'la mêlée numérique logo',
    },
    {
        imageSrc: '/images/girandiere-logo.png',
        imageAlt: 'les girandières logo',
    },
    {
        imageSrc: '/images/marie-louise.png',
        imageAlt: 'fondation marie louise logo',
    },
]
export function Clients(){
    return (
        <div className="clients">
            <section className="relative isolate overflow-hidden bg-white px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <blockquote
                        className="text-center text-2xl font-extrabold leading-8 text-gray-900 sm:text-5xl sm:leading-9 underline">
                        <p>Clients & Partenaires</p>
                    </blockquote>
                </div>
            </section>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 mt-10 mb-10">
                    {datas.map((data) => (
                        <div className="mx-auto flex max-w-xs flex-col">
                            <img src={data.imageSrc} alt={data.imageAlt} className="rounded-lg mt-5 m-auto h-[200px] w-[200px]"/>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}