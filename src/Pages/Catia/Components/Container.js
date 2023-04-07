import React from 'react';
import {Transition} from '@headlessui/react';

export function Container() {
    return (
        <div className="profil">
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 font-roboto">
                <div className="relative py-3 sm:max-w-3xl sm:mx-auto">

                    {/* Header */}
                    <header className="mb-12">
                        <h1 className="text-3xl font-bold text-center">La réalité virtuelle en ingénierie</h1>
                    </header>

                    {/* Section 1 */}
                    <div className="p-8 flex items-center space-x-4">
                        <div className="w-1/2">
                            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                            <p>
                                La réalité virtuelle (VR) est de plus en plus présente dans le monde de l'ingénierie.
                                Elle offre des possibilités de conception, de simulation et de formation inégalées pour
                                les ingénieurs de différentes disciplines.
                            </p>
                        </div>
                        <img src="/images/image.avif" alt="Illustration réalité virtuelle" className="w-1/2 rounded-lg shadow-lg"/>
                    </div>

                    {/* Section 2 */}
                    <div className="p-8 flex items-center space-x-4">
                        <img src="/images/image.avif" alt="Mathieu Flacelière" className="w-1/2 rounded-lg shadow-lg"/>
                        <div className="w-1/2">
                            <h2 className="text-2xl font-bold mb-4">Notre équipe d'experts</h2>
                            <p>
                                Notre équipe est dirigée par Mathieu Flacelière, expert CATIA avec plus de 15 ans
                                d'expérience. Mathieu connaît bien les enjeux de l'ingénierie et les avantages que la VR
                                peut apporter.
                            </p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="p-8 flex items-center space-x-4">
                        <div className="w-auto">
                            <h2 className="text-2xl font-bold mb-4">Avantages et cas d'utilisation de la réalité
                                virtuelle en ingénierie</h2>
                            <Transition
                                show={true}
                                enter="transition-opacity duration-700"
                                enterFrom="opacity-0"
                                enterTo="opacity-100">
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