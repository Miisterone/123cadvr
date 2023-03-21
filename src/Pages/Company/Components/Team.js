export default function Team() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid">
                <dd className="mb-5 max-lg:ml-[28%] max-md:ml-[20px] text-start text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">Notre équipe</dd>
                <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <img src="../images/mathieu.png" alt="image of mathieu"/>
                        <dd className="text-start text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Mathieu
                            Flacelière
                        </dd>
                        <dt className="text-base text-start leading-7 text-gray-600">CEO</dt>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <img src="../images/anthony.png" alt="image of anthony"/>
                        <dd className="text-start text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Anthony
                            Poineau
                        </dd>
                        <dt className="text-base text-start leading-7 text-gray-600">Animateur</dt>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <img src="../images/joris.png" alt="image of joris"/>
                        <dd className="text-start text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Joris
                            Pader
                        </dd>
                        <dt className="text-base text-start leading-7 text-gray-600">Développeur VR & WEB</dt>
                    </div>
                </dl>
            </div>
        </div>
    )
}
