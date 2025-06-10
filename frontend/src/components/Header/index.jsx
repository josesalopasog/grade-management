import logo from '../../assets/lg-logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header class="bg-white py-6 px-4 shadow-md flex flex-row">
            <div class="flex items-center justify-between">
                <img src={logo} alt="Logo" class="h-12 w-auto" />
            </div>
            <div class="container mx-auto">
                <h1 class="text-3xl md:text-4xl text-[#707070] font-bold flex items-center">
                    Grade Management
                </h1>
                <p class="mt-2 text-[#A50034] font-semibold ">Manage students grades</p>
            </div>
        </header>
    )
}

export default Header;