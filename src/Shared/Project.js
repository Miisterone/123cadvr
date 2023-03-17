import "./Project.css";

const Project = (props) => {
    return (
        <section className="project mt-20 relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-white underline text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                        <p>
                            Un projet ?
                        </p>
                    </blockquote>
                </figure>
                <figure className="mt-10">
                    <blockquote className="text-center sm:mb-8  sm:text-3xl md:text-3xl text-white text-xl font-semibold leading-8 text-gray-900 ">
                        <p>
                            Contactez-nous où décrivez-nous votre souhait.
                        </p>
                    </blockquote>
                </figure>
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <a href="#" className="w-fit h-fit bg-white text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-8 text-center text-xl sm:text-xl">Contactez-nous</a>
                    </blockquote>
                </figure>
            </div>
        </section>
    );
}

export default Project;