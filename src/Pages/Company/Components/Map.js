export default function Map() {
    return (
        <div className="bg-white py-20 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid">
                <div className="grid grid-cols-1 text-center lg:grid-cols-2 bg-gradient-to-r from-[#0155a0e6] to-[#09397D]">
                    <div className="flex flex-col">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5771.920500339475!2d1.4258142660433206!3d43.669796513884144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aea5937023240f%3A0x817c9f4013e14394!2s123cad!5e0!3m2!1sfr!2sfr!4v1679410613170!5m2!1sfr!2sfr"
                            className="w-full h-72 lg:h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col justify-center m-10 body">
                        <div className="text-start text-xl tracking-tight text-white mb-10 sm:text-lg">NOTRE BUREAU</div>
                        <div className="text-start text-3xl font-bold tracking-tight text-white sm:text-3xl">123 CAD</div>
                        <div className="text-start text-xl tracking-tight text-white sm:text-xl ">34 Chem. des Carrières</div>
                        <div className="text-start text-xl tracking-tight text-white sm:text-xl">31140 Aucamville</div>
                        <div className="text-start text-xl tracking-tight text-white sm:text-xl">06 25 05 38 88 </div>
                        <div className="text-start text-xl text-orange-500 tracking-tight sm:text-xl">contact@123cadvr.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}