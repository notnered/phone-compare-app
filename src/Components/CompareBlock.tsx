import { useState } from 'react';
import CompareFilters from './CompareFilters';
import CompareMain from './CompareMain';
import { models } from '../data/phoneModels';

export default function CompareBlock() {
    const [compareLimit, setCompareLimit] = useState<number>(3);
    const allModelsLength = models.length > 6 ? 6 : models.length;

    return (
        <>
            <CompareFilters
                limit={compareLimit}
                limitFunc={setCompareLimit}
                len={allModelsLength}
            />
            <CompareMain limit={compareLimit} />
        </>
    );
}
