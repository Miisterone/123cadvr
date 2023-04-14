import React from 'react';
import {Transition} from '@headlessui/react';
import {LazyLoadImage} from "react-lazy-load-image-component";

export function Container() {
    return (
        <div className="profil">
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 font-roboto">
                <div className="relative py-3 sm:max-w-3xl sm:mx-auto">

                    <header>
                        <h1 className="text-3xl font-bold text-center">La réalité virtuelle en ingénierie</h1>
                    </header>

                    <div className="mt-10 grid mx-3 md:grid-cols-2 gap-5">
                        <div className="flex md:self-center justify-end mb-10">
                            <LazyLoadImage src="../images/ingenierie.avif" alt="ingénierie image" className="rounded-lg"/>
                        </div>
                        <div className="md:self-center justify-end">
                            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                            <p className="text-justify text-xl">
                                La réalité virtuelle (VR) est de plus en plus présente dans le monde de l'ingénierie.
                                Elle offre des possibilités de conception, de simulation et de formation inégalées pour
                                les ingénieurs de différentes disciplines.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 mx-3 grid md:grid-cols-2 gap-5">
                        <div className="md:self-center justify-start md:text-right">
                            <h2 className="text-2xl font-bold mb-4">Expérience</h2>
                            <p className="text-justify text-xl">
                                Mathieu Flacelière, expert CATIA avec plus de 15 ans
                                d'expérience. Mathieu connaît bien les enjeux de l'ingénierie et les avantages que la VR
                                peut apporter.
                            </p>
                        </div>
                        <div className="flex md:self-center justify-start">
                            <LazyLoadImage src="/images/team.avif" alt="team image" className="rounded-lg"/>
                        </div>
                    </div>

                    <div className="mt-20 p-8 flex items-center space-x-4">
                        <div className="w-auto">
                            <h2 className="text-2xl font-bold mb-4">Avantages et cas d'utilisation de la réalité
                                virtuelle en ingénierie</h2>
                            <Transition
                                show={true}
                                enter="transition-opacity duration-700"
                                enterFrom="opacity-0"
                                enterTo="opacity-100" className="text-xl">
                                <p>La réalité virtuelle offre de nombreux avantages pour les ingénieurs, notamment :</p>
                                <ul className="list-disc pl-6">
                                    <li>Permet de visualiser et d'interagir avec des modèles 3D complexes</li>
                                    <li>Facilite les tests de conception et l'itération rapide</li>
                                    <li>Réduit les coûts et les délais de prototypage physique</li>
                                    <li>Améliore la formation et la collaboration entre les équipes</li>
                                </ul>
                                <p className="mt-4">Voici quelques cas d'utilisation courants :</p>
                                <ul className="list-disc pl-6">
                                    <li>Conception de produits et de machines</li>
                                    <li>Simulation de processus industriels</li>
                                    <li>Formation à l'utilisation d'équipements et de logiciels spécialisés</li>
                                    <li>Visualisation de données complexes et d'environnements de travail</li>
                                </ul>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}