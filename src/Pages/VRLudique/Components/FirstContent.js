import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
export function FirstContent() {
    return (
        <div className="firstcontent">
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl" style={{textAlign: "-webkit-center"}}>
                    <blockquote className="text-center text-4xl title leading-8 text-gray-900 sm:text-5xl sm:leading-9">
                        <p>Team building, Afterwork</p>
                    </blockquote>
                    <figure className="mt-10">
                        <blockquote className="text-center text-lg body leading-8 text-gray-900 sm:text-lg">
                            <p>Besoin d’une activité original ? La réalité virtuelle est le bon choix.</p>
                        </blockquote>
                    </figure>
                    <Link to={"/contact"} className="w-fit border-[#0155a0e6] border-2 text-[#0155a0e6] rounded-md px-3 py-2 text-sm font-medium underline mt-4 flex button md:text-lg transition duration-500 hover:opacity-100 hover:ease-in-out hover:scale-105 hover:underline hover:bg-[#0155a0e6] hover:text-white">Contactez-nous</Link>
                  </div>
                <LazyLoadImage src="../images/presentation.avif" alt="presentation image" className="rounded-lg mt-10 m-auto"/>
            </section>
        </div>
    );
}
