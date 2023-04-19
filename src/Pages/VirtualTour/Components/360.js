import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Video360 = () => {
    return (
        <div className="video360">
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 font-roboto">
                <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
                    <header>
                        <h1 className="text-4xl title text-center">Avantages des vidéos 360° et visites virtuelles pour les entreprises de voyage</h1>
                    </header>

                    <div className="mt-20 grid mx-3 md:grid-cols-2 gap-5">
                        <div className="flex justify-end self-stretch">
                            <LazyLoadImage src="../images/voyage.avif" alt="voyage image" className="rounded-lg"/>
                        </div>
                        <div className="md:self-center justify-end">
                            <h2 className="text-2xl title mb-4">Introduction</h2>
                            <p className="text-justify body text-xl">
                                Les vidéos 360° et les visites virtuelles offrent des expériences immersives pour les
                                clients des
                                entreprises de voyage et du secteur touristique. Elles permettent aux utilisateurs de
                                découvrir des
                                destinations et des établissements avant de prendre une décision de réservation.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 mx-3 grid md:grid-cols-2 gap-5">
                        <div className="md:self-center justify-start md:text-right">
                            <h2 className="text-2xl title mb-4">Expérience</h2>
                            <p className="text-justify body text-xl">
                                Les vidéos 360° et les visites virtuelles offrent une expérience unique et réaliste aux
                                clients,
                                leur permettant de se projeter dans les lieux visités, d'explorer les attractions et de
                                mieux
                                planifier leur voyage.
                            </p>
                        </div>
                        <div className="flex self-stretch justify-start">
                            <LazyLoadImage src="/images/explore.avif" alt="exploration virtuelle image" className="rounded-lg"/>
                        </div>
                    </div>

                    <div className="mt-20 p-8 flex items-center space-x-4">
                        <div className="w-auto">
                            <h2 className="text-2xl title mb-4">Avantages et cas d'utilisation des vidéos 360° et des visites virtuelles</h2>
                            <p className="body text-xl">Les vidéos 360° et les visites virtuelles présentent de nombreux avantages pour les
                                entreprises de voyage, notamment :</p>
                            <ul className="list-disc pl-6 body text-xl">
                                <li>Offrir une expérience immersive et engageante aux clients</li>
                                <li>Permettre aux clients de découvrir les lieux avant de réserver</li>
                                <li>Faciliter la promotion des destinations et des hébergements</li>
                                <li>Améliorer la satisfaction et la fidélisation des clients</li>
                            </ul>
                            <p className="mt-4 body text-xl">Voici quelques cas d'utilisation courants :</p>
                            <ul className="list-disc pl-6 body text-xl">
                                <li>Présentation de destinations touristiques</li>
                                <li>Visites virtuelles d'hôtels, de restaurants et d'attractions</li>
                                <li>Mise en avant d'activités et d'expériences spécifiques</li>
                                <li>Formation et familiarisation du personnel avec les lieux et les offres</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 mx-3 grid md:grid-cols-2 gap-5">
                        <div className="md:self-center justify-end">
                            <h2 className="text-2xl title mb-4">Impact sur le secteur du voyage</h2>
                            <p className="text-justify body text-xl">
                                L'adoption des vidéos 360° et des visites virtuelles par les entreprises de voyage contribue à transformer le secteur en offrant une expérience client améliorée et en aidant les entreprises à se démarquer de la concurrence. Ces technologies innovantes aident également à attirer de nouveaux clients et à fidéliser les clients existants.
                            </p>
                        </div>
                        <div className="flex justify-end self-stretch">
                            <LazyLoadImage src="../images/impact.avif" alt="impact sur le secteur du voyage image" className="rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};