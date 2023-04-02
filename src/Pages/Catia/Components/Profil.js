export function Profil() {
    return (
        <div className="profil">
            <div className="bg-gradient-to-r from-[#3A78D1] to-[#09397D] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2 items-center">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <img src="/images/mathieu-photo.png" alt="photo de mathieu" className="w-auto h-auto"/>
                        </div>
                        <div className="flex max-w-xs flex-col gap-y-4 text-start">
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-4xl">Mathieu Flacelière</dd>
                            <dt className="text-base leading-7 text-white">Expert en conseil et méthodologie Catia,3DX</dt>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
)
}