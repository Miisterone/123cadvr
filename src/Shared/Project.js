import {Link} from "react-router-dom";

const Project = (props) => {
    return (
        <section className="bg-gradient-to-r from-[#0155a0e6] to-[#09397D] mt-20 relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-white text-3xl title sm:text-4xl md:text-5xl">
                        <p>
                            {props.title}
                        </p>
                    </blockquote>
                </figure>
                <figure className="mt-10">
                    <blockquote className="text-center body sm:mb-8 sm:text-2xl md:text-2xl text-white text-xl body leading-8">
                        <p>
                            {props.description}
                        </p>
                    </blockquote>
                </figure>
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9" style={{textAlign: "-webkit-center"}}>
                        <Link to={"/contact"} className="w-fit border-white border-2 text-white rounded-md px-3 py-2 text-sm font-medium mt-4 flex button md:text-lg transition duration-500 hover:opacity-100 hover:ease-in-out hover:scale-105 hover:underline hover:bg-[#0155a0e6] hover:text-white">Découvrir</Link>
                    </blockquote>
                </figure>
            </div>
        </section>
    );
}

export default Project;