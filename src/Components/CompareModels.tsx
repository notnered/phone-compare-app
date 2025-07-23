import CompareCard from './CompareCard';

export default function CompareModels({ models }: { models: { id: number, name: string, pic: string }[]}) {

    return (
        <header className='flex flex-col py-12 px-2'>
            <div className='w-full flex'>
                <div className='w-full flex'>
                    <div className='w-full mt-auto min-w-[calc(25%+0.5rem)] flex pr-4'>
                        <label htmlFor='showDifferences' className='text-lg'>
                            <input
                                type='checkbox'
                                id='showDifferences'
                                className='mr-1.5'
                            />
                            Показать различия
                        </label>
                    </div>

                    {models.map((model) => {
                        return (
                            <CompareCard model={model} key={model.id} />
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
