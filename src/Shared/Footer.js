import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
                <span className="text-base max-sm:text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023 123 CAD - Tous droits réservés.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.linkedin.com/company/123cad/"><Icon icon="ant-design:linkedin-outlined" color="white" className="w-[40px] h-[40px] ml-auto"/></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;