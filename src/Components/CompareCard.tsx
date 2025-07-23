import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown, IoIosSwap } from 'react-icons/io';
import { models as allModels } from '../data/phoneModels';
import type { modelType } from '../data/phoneModels';

export default function CompareCard({
    model,
    onReplace,
    selectedModels,
}: {
    model: { id: number; name: string; pic: string };
    onReplace: (newModel: modelType) => void;
    selectedModels: modelType[];
}) {
    const [swapMenu, setSwapMenu] = useState(false);
    const [search, setSearch] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setSwapMenu(false);
            }
        };

        if (swapMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [swapMenu]);

    const selectedIds = selectedModels.map((m) => m.id);

    const filteredModels = allModels.filter(
        (m) =>
            m.id !== model.id &&
            !selectedIds.includes(m.id) &&
            m.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='w-full mt-auto min-w-[calc(25%+0.5rem)] flex flex-col gap-x-4 pr-4'>
            <div className='flex flex-col relative'>
                <img
                    src={model.pic}
                    alt={model.name}
                    className='object-center object-contain w-24 h-40 mb-2'
                />
                <span
                    className='absolute top-[55%] left-[35%] hover:cursor-pointer'
                    onClick={() => setSwapMenu((prev) => !prev)}
                >
                    <IoIosArrowDown className='text-primary text-3xl' />
                </span>

                {swapMenu && (
                    <div
                        ref={dropdownRef}
                        className='absolute top-24 left-0 w-full max-w-[20rem] h-auto bg-white border-[1px] border-secondary-light/35 rounded-md shadow-md p-4'
                    >
                        <div className='mb-3'>
                            <input
                                type='text'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className='w-full py-1.5 px-3 border-[1px] border-secondary-light/35 focus:outline-secondary/35 rounded-sm'
                                placeholder='Поиск'
                            />
                        </div>
                        <div className='flex flex-col gap-y-1.5 overflow-y-auto max-h-48 scrollbar scrollbar-w-2 scrollbar-thumb-secondary-light/50 scrollbar-thumb-rounded-xl scrollbar-hover:scrollbar-thumb-secondary-light/75'>
                            {filteredModels.length === 0 ? (
                                <div className='text-sm text-gray-500'>
                                    Нет совпадений
                                </div>
                            ) : (
                                filteredModels.map((m) => (
                                    <div
                                        key={m.id}
                                        onClick={() => {
                                            onReplace(m);
                                            setSwapMenu(false);
                                            setSearch('');
                                        }}
                                        className='flex items-center gap-x-2 cursor-pointer hover:bg-gray-100 p-1 rounded'
                                    >
                                        <IoIosSwap className='text-green-600 text-2xl' />
                                        <img
                                            src={m.pic}
                                            className='w-8'
                                            alt={m.name}
                                        />
                                        <span>{m.name}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div>{model.name}</div>
        </div>
    );
}
