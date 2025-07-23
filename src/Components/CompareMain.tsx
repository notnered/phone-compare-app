import type { modelType } from '../data/phoneModels';
import { models, keyLabels } from '../data/phoneModels';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import CompareModels from './CompareModels';

export default function CompareMain({ limit }: { limit: number }) {
    const modelKeys = Object.keys(keyLabels) as (keyof typeof keyLabels)[];

    const limitedModels = models.slice(0, limit);

    const modelsVisual = limitedModels.map(({ id, name, pic }) => ({ id, name, pic }));

    const modelsSpecs = limitedModels.map(({ id, ...rest }) => ({ id, ...rest }));

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
        <main className='pb-12'>
            <div
                className={`flex flex-col ${modelsSpecs.length > 3 ? 'overflow-x-auto' : 'overflow-x-hidden'} wrapper px-2 pb-2.5 scrollbar scrollbar-h-2.5 scrollbar-thumb-secondary-light/50 scrollbar-thumb-rounded-xl scrollbar-hover:scrollbar-thumb-secondary-light/75`}
                style={{
                    background:
                        'linear-gradient(to bottom, #ffffff 0%, #ffffff 18rem, rgba(244, 249, 252, 1) 18rem, rgba(244, 249, 252, 1) 100%)',
                }}
            >
                <div className=''>
                    <div className='flex flex-col w-full'>
                        <CompareModels models={modelsVisual} />
                        {modelKeys.map((key, index) => (
                            <div key={key} className='flex'>
                                <div
                                    className={`min-w-[calc(25%+0.5rem)] w-full flex pr-4 py-6 ${
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
                                        className={`min-w-[calc(25%+0.5rem)] w-full flex pr-4 py-6 ${
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
            </div>
        </main>
    );
}
