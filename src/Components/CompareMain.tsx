import type { modelType } from '../data/phoneModels';
import { models, keyLabels } from '../data/phoneModels';

import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

export default function CompareMain() {
    const modelKeys = Object.keys(models[0]).filter(
        (key) => key !== 'id'
    ) as (keyof Omit<modelType, 'id'>)[];

    const renderValue = (
        key: keyof Omit<modelType, 'id'>,
        value: modelType[keyof modelType]
    ) => {
        if (typeof value === 'boolean') {
            return value ? (
                <div className='flex h-full w-full items-center'>
                    <IoIosCheckmarkCircle className='text-green-600 text-2xl' />
                </div>
            ) : (
                <div className='flex h-full w-full items-center'>
                    <IoIosCloseCircle className='text-red-600 text-2xl' />
                </div>
            );
        }
        if (key === 'price') {
            return `${value.toLocaleString('fr-fr')} ₽`;
        }
        return value;
    };

    return (
        <main className='bg-bg pb-12 px-2'>
            <div className='wrapper overflow-x-auto pb-1.5 scrollbar scrollbar-h-2.5 scrollbar-thumb-secondary-light/50 scrollbar-thumb-rounded-xl scrollbar-hover:scrollbar-thumb-secondary-light/75'>
                <div className='w-full flex flex-col'>
                    {modelKeys.map(
                        (key, index) =>
                            index !== 0 && (
                                <div key={key} className='w-full flex'>
                                    {index === 1 ? (
                                        <div className='w-full min-w-[calc(25%+1rem)] flex border-t-[1px] border-b-[1px] pr-4 border-secondary/35 py-6'>
                                            <div className='text-secondary-light uppercase font-medium'>
                                                {keyLabels[key]}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='w-full min-w-[calc(25%+1rem)] flex border-b-[1px] pr-4 border-secondary/35 py-6'>
                                            <div className='text-secondary-light uppercase font-medium'>
                                                {keyLabels[key]}
                                            </div>
                                        </div>
                                    )}
                                    {models.slice(0, 4).map((model) =>
                                        key === 'brand' ? (
                                            <div
                                                key={model.id}
                                                className='w-full min-w-[calc(25%+1rem)] flex border-t-[1px] border-b-[1px] pr-4 border-secondary/35 py-6'
                                            >
                                                <div className='text-secondary capitalize font-medium'>
                                                    {renderValue(
                                                        key,
                                                        model[key]
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                key={model.id}
                                                className='w-full min-w-[calc(25%+1rem)] flex border-b-[1px] pr-4 border-secondary/35 py-6'
                                            >
                                                <div className='text-secondary capitalize font-medium'>
                                                    {renderValue(
                                                        key,
                                                        model[key]
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )
                    )}
                </div>
            </div>
        </main>
    );
}
