import CompareCard from './CompareCard';
import { useDispatch, useSelector } from 'react-redux';
import { replaceModel, toggleShowDifferences } from '../store/compareSlice';
import type { RootState } from '../store/store';

export default function CompareModels({
    models,
}: {
    models: { id: number; name: string; pic: string }[];
}) {
    const dispatch = useDispatch();
    const showDifferences = useSelector((state: RootState) => state.compare.showDifferences);

    const selectedModels = useSelector(
        (state: RootState) => state.compare.selectedModels
    );

    // console.log('models', selectedModels);

    console.log(showDifferences);

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
                                checked={showDifferences}
                                onChange={() => dispatch(toggleShowDifferences())}
                            />
                            Показать различия
                        </label>
                    </div>

                    {models.map((model, index) => {
                        return (
                            <CompareCard
                                model={model}
                                key={model.id}
                                onReplace={(newModel) =>
                                    dispatch(replaceModel({ index, newModel }))
                                }
                                selectedModels={selectedModels}
                            />
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
