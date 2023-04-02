import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
export function FirstContent() {
    return (
        <div className="firstcontent">
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <blockquote
                        className="text-center text-4xl font-extrabold leading-8 text-gray-900 sm:text-5xl sm:leading-9">
                        <p>Team building, Afterwork</p>
                    </blockquote>
                    <figure className="mt-10">
                        <blockquote className="text-center text-lg font-semibold leading-8 text-gray-900 sm:text-lg">
                            <p>Besoin d’une activité original ? La réalité virtuelle est le bon choix.</p>
                        </blockquote>
                    </figure>
                    <Link to={"/contact"} className="w-fit border-[#09397D] m-auto border-2 text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-10 flex button">Contactez-nous</Link>
                </div>
                <LazyLoadImage src="../images/presentation.svg" alt="presentation image" className="rounded-lg mt-10 m-auto"/>
            </section>
        </div>
    );
}
