import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Solution = () => {
    return (
        <div className="mt-20 m-2 lg:m-10 lg:mt-16">
            <div className="grid mx-3 md:grid-cols-2 gap-5">
                <div className="flex md:self-center justify-end">
                    <LazyLoadImage src="../Images/vrpro.png" alt="vr pro image" className="rounded-lg"/>
                </div>
                <div className="md:self-center justify-end">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 underline sm:text-3xl md:text-4xl">Réalité Virtuelle Pro</h2>
                    <p className="mt-4 text-gray-500 md:text-xl">Formation ,expérience interactive VR/AR.</p>
                    <Link to={"/vr-professionnel"} className="w-fit border-[#09397D] border-2 text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-4 flex button md:text-lg">Découvrir</Link>
                </div>
            </div>
            <div className="mt-20 mx-3 grid md:grid-cols-2 gap-5 max-sm:hidden">
                <div className="md:self-center justify-start md:text-right">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 underline sm:text-3xl md:text-4xl">Réalité Virtuelle Ludique</h2>
                    <p className="mt-4 text-gray-500 md:text-xl">Team Building,After Work,Séminaire ou découvert de la réalité virtuelle</p>
                    <Link to={"/vr-ludique"} className="w-fit border-[#09397D] border-2 text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-4 flex ml-auto button md:text-lg">Découvrir</Link>
                </div>
                <div className="flex md:self-center justify-start">
                    <LazyLoadImage src="../Images/vrludique.png" alt="vr pro image" className="rounded-lg"/>
                </div>
            </div>
            {/*Mobile*/}
            <div className="mt-20 mx-3 grid md:grid-cols-2 gap-5 sm:hidden">
                <div className="flex md:self-center justify-end">
                    <LazyLoadImage src="../Images/vrludique.png" alt="vr pro image" className="rounded-lg"/>
                </div>
                <div className="md:self-center justify-end md:justify-start md:text-right">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl underline md:text-5xl">Réalité Virtuelle Ludique</h2>
                    <p className="mt-4 text-gray-500 md:text-2xl">Team Building,After Work,Séminaire ou découvert de la réalité virtuelle</p>
                    <Link to={"/vr-ludique"} className="w-fit border-[#09397D] border-2 text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-4 flex button md:text-lg">Découvrir</Link>
                </div>
            </div>

            {/*<div className="mt-20 mx-3 grid md:grid-cols-2 gap-5">*/}
            {/*    <div className="flex md:self-center justify-end">*/}
            {/*        <img src="../Images/plane.png" alt="vr pro image" className="rounded-lg"/>*/}
            {/*    </div>*/}
            {/*    <div className="md:self-center justify-end">*/}
            {/*        <h2 className="text-3xl font-bold tracking-tight text-gray-900 underline sm:text-3xl md:text-4xl">Ingénierie Catia</h2>*/}
            {/*        <p className="mt-4 text-gray-500 md:text-xl">Conseil,Méthodologie,Conception,*/}
            {/*            Modélisation,Produit Industriel</p>*/}
            {/*        <Link to={"/catia"} className="w-fit border-[#09397D] border-2 text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-4 flex button md:text-lg">Découvrir</Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Solution;