import { IoIosArrowDown } from 'react-icons/io';
import image16 from '../assets/image 16.png';

export default function CompareCard({ model }: { model: { id: number, name: string, pic: string }}) {
    return (
        <div
            className='w-full mt-auto min-w-[calc(25%+0.5rem)] flex flex-col gap-x-4 pr-4'
        >
            <div className='flex flex-col relative'>
                <img
                    src={image16}
                    alt={model.name}
                    className='object-contain w-fit h-40 mb-2'
                />
                <span className='absolute top-[55%] left-[35%] hover:cursor-pointer'>
                    <IoIosArrowDown className='text-primary text-3xl' />
                </span>

                {/* hover */}
                {/* <div className='absolute top-0 left-0 w-full h-auto bg-white border-[1px] border-secondary-light/35 rounded-md shadow-md p-4'>
                    <div className='mb-3'>
                        <input
                            type='text'
                            className='w-full py-1.5 px-3 border-[1px] border-secondary-light/35 focus:outline-secondary/35 rounded-sm'
                            placeholder='Поиск'
                        />
                    </div>
                    <div className='flex flex-col gap-y-1.5'>
                        <div className='flex items-center gap-x-2'>
                            <IoIosSwap className='text-green-600 text-2xl' />
                            <img
                                src={image16}
                                className='w-8'
                                alt={model.name}
                            />
                            <span>iPhone 12 Pro Max</span>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <IoIosSwap className='text-green-600 text-2xl' />
                            <img
                                src={image16}
                                className='w-8'
                                alt={model.name}
                            />
                            <span>iPhone 12 Pro Max</span>
                        </div>
                    </div>
                </div> */}

            </div>
            <div>{model.name}</div>
        </div>
    );
}
