import {Link} from "react-router-dom";

const Histoire = () => {
    return (
        <div className="mt-10 mx-3 m-2 lg:m-10 lg:mt-16">
            <div className="grid h-60 sm:h-[500px] justify-items-center content-center bg-[url('/public/images/histoire.jpg')] bg-center bg-no-repeat">
                <p className="text-3xl font-bold text-white sm:text-6xl">Qui Sommes-Nous ?</p>
                <Link to={"/company"} className="w-fit h-fit bg-white text-[#09397D] rounded-md px-3 py-2 text-sm font-medium underline mt-8 text-center sm:text-xl">Découvrir</Link>
            </div>
        </div>
    )
}

export default Histoire;