import { Link } from "react-router-dom"
import logo from "../assets/head-logo.png"

interface HeaderProps {
    onChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onChange }) => {


    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event?.target.value);
    }

    return (
        <div className="w-full text-base  p-5 text-white h-[25vh]  bg-gray-200 grid grid-cols-2 xl:flex xl:flex-row xl:h-[15vh] xl: text-xl ">



            <div className="flex col-span-2 justify-between	 items-center text-black md:space-x-5 xl:w-[100%]  xl:space-between">
                <Link className="nav new md:mx-5" to={'/about'}>Про сайт</Link>
                <Link className="nav md:mx-5" to={'/gallery'}>Галарея картинок</Link>
                <img src={logo} alt="logo" className="w-[13vw] h-[10vh] xl:w-[15%] xl:h-[15vh] md:w-[10%]  " />

                <Link className="nav md:mx-5" to={'/'}>Головна</Link>
                <Link className="nav md:mx-5" to={'/contacts'}>Контакти</Link>

            </div>
            <div className="search-bar w-[48vw] lg:h-[5vh] lg:w-[50vw] lg:h-full xl:w-full xl:h-[5vh] xl:w-[40%] mt-[2.5vh] ">
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <g clipPath="url(#clip0_1_6)">
                        <path d="M21.318 19.222L16.1068 14.7903C15.5678 14.305 14.9916 14.0836 14.5269 14.1042C15.9099 12.4825 16.6117 10.3883 16.485 8.26067C16.3583 6.133 15.4131 4.13693 13.8474 2.69069C12.2817 1.24445 10.2171 0.460296 8.08607 0.502538C5.95506 0.544779 3.92309 1.41014 2.41594 2.91729C0.908795 4.42444 0.0434366 6.4564 0.00119491 8.58742C-0.0410467 10.7184 0.743106 12.7831 2.18934 14.3488C3.63558 15.9145 5.63166 16.8597 7.75932 16.9863C9.88699 17.113 11.9811 16.4113 13.6029 15.0282C13.5809 15.493 13.8036 16.0691 14.289 16.6081L18.7206 21.8194C19.4796 22.6622 20.7185 22.7337 21.4748 21.9775C22.231 21.2212 22.1595 19.981 21.3166 19.2233L21.318 19.222ZM8.25001 14.25C6.79132 14.25 5.39237 13.6705 4.36092 12.6391C3.32947 11.6076 2.75001 10.2087 2.75001 8.74998C2.75001 7.29128 3.32947 5.89234 4.36092 4.86089C5.39237 3.82944 6.79132 3.24998 8.25001 3.24998C9.7087 3.24998 11.1076 3.82944 12.1391 4.86089C13.1705 5.89234 13.75 7.29128 13.75 8.74998C13.75 10.2087 13.1705 11.6076 12.1391 12.6391C11.1076 13.6705 9.7087 14.25 8.25001 14.25Z" fill="#BDBDBD" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_6">
                            <rect width="22" height="22" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <input type="text" id="searchInput" className="search-input text-black w-full" placeholder="Введіть текст" onChange={(event) => { handleNameChange(event) }} />
            </div>

        </div>

    )
}

export default Header
