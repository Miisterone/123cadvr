import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Solution = () => {
    return (
        <div className="mt-20 m-2 lg:m-10 lg:mt-16">
            <div className="grid mx-3 md:grid-cols-2 gap-5">
                <div className="flex md:self-center justify-end">
                    <LazyLoadImage src="../images/vrpro.avif" alt="vr pro image" className="rounded-lg"/>
                </div>
                <div className="md:self-center justify-end">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">Réalité Virtuelle Professionnelle</h2>
                    <p className="mt-4 text-gray-500 md:text-xl">Transformez votre entreprise avec des formations et expériences interactives en VR/AR</p>
                    <Link to={"/vr-professionnel"} className="w-fit border-[#09397D] border-2 text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-4 flex button md:text-lg">Découvrir</Link>
                </div>
            </div>

            <div className="mt-20 mx-3 grid md:grid-cols-2 gap-5 max-sm:hidden">
                <div className="md:self-center justify-start md:text-right">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">Évasion en Réalité Virtuelle</h2>
                    <p className="mt-4 text-gray-500 md:text-xl">Team Building, After Work, Séminaires : Partagez des moments uniques</p>
                    <Link to={"/vr-ludique"} className="w-fit border-[#09397D] border-2 text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-4 flex ml-auto button md:text-lg">Découvrir</Link>
                </div>
                <div className="flex md:self-center justify-start">
                    <LazyLoadImage src="../images/vrludique.avif" alt="vr pro image" className="rounded-lg"/>
                </div>
            </div>
            {/*Mobile*/}
            <div className="mt-20 mx-3 grid md:grid-cols-2 gap-5 sm:hidden">
                <div className="flex md:self-center justify-end">
                    <LazyLoadImage src="../images/vrludique.avif" alt="vr pro image" className="rounded-lg"/>
                </div>
                <div className="md:self-center justify-end md:justify-start md:text-right">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">Évasion en Réalité Virtuelle</h2>
                    <p className="mt-4 text-gray-500 md:text-2xl">Team Building, After Work, Séminaires : Partagez des moments uniques</p>
                    <Link to={"/vr-ludique"} className="w-fit border-[#09397D] border-2 text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-4 flex button md:text-lg">Découvrir</Link>
                </div>
            </div>

            <div className="mt-20 grid mx-3 md:grid-cols-2 gap-5">
                <div className="flex md:self-center justify-end">
                    <LazyLoadImage src="../images/plane.avif" alt="avion image" className="rounded-lg"/>
                </div>
                <div className="md:self-center justify-end">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">Expertise catia</h2>
                    <p className="mt-4 text-gray-500 md:text-xl">  Découvrez comment notre équipe d'experts en CATIA peut transformer votre processus de conception et vous donner un avantage compétitif. Expérimentez l'innovation et l'excellence avec nous.</p>
                    <Link to={"/catia"} className="w-fit border-[#09397D] border-2 text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-4 flex button md:text-lg">Découvrir</Link>
                </div>
            </div>
        </div>
    )
}

export default Solution;