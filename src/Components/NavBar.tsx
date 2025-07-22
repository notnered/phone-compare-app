import { FaRegCircleUser } from "react-icons/fa6";

export default function NavBar(){
    return (
        <nav className="flex gap-x-6 border-b-[1px] border-b-secondary/35 min-h-24 items-center px-2">
            {/* wrapper */}
            <div className="wrapper justify-between items-center">
                <div className="flex">
                    <a href="#" className="text-primary font-bold text-lg">Каталог</a>
                </div>
                <div className="flex gap-x-12">
                    <a href="#" className="uppercase font-bold text-secondary">сравнение</a>
                    <a href="#" className="font-bold text-secondary flex items-center gap-x-6">Личный кабинет<span className="text-xl"><FaRegCircleUser /></span></a>
                </div>
            </div>
        </nav>
    )
}