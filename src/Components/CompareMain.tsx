import type { modelType } from '../data/phoneModels';
import { models, keyLabels } from '../data/phoneModels';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import CompareHeader from './CompareHeader';

export default function CompareMain() {
    const modelKeys = Object.keys(keyLabels) as (keyof typeof keyLabels)[];

    const modelsVisual = models.map(({ id, name, pic }) => ({ id, name, pic }));

    const modelsSpecs = models.map(({ id, ...rest }) => ({ id, ...rest }));

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
        if (key === 'memory_capacity') return `${value} Гб`;
        if (key === 'refresh_rate') return `${value} Гц`;
        if (key === 'price') return `${value.toLocaleString('fr-fr')} ₽`;
        return value;
    };

    return (
        <main className='bg-bg pb-12 px-2'>
            <div className='wrapper flex flex-col overflow-x-auto pb-1.5 scrollbar scrollbar-h-2.5 scrollbar-thumb-secondary-light/50 scrollbar-thumb-rounded-xl scrollbar-hover:scrollbar-thumb-secondary-light/75'>
                <div className='w-full flex flex-col'>
                    {modelKeys.map((key, index) => (
                        <div key={key} className='w-full flex'>
                            <div
                                className={`w-full min-w-[calc(25%+1rem)] flex pr-4 py-6 ${
                                    index === 0 ? 'border-t-[1px]' : ''
                                } border-b-[1px] border-secondary/35`}
                            >
                                <div className='text-secondary-light uppercase font-medium'>
                                    {keyLabels[key]}
                                </div>
                            </div>
                            {modelsSpecs.map((model) => (
                                <div
                                    key={model.id + key}
                                    className={`w-full min-w-[calc(25%+1rem)] flex pr-4 py-6 ${
                                        index === 0 ? 'border-t-[1px]' : ''
                                    } border-b-[1px] border-secondary/35`}
                                >
                                    <div className='text-secondary capitalize font-medium'>
                                        {renderValue(key, model[key])}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
