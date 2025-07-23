export default function CompareFilters({ limit, limitFunc, len }: { limit: number, limitFunc: React.Dispatch<React.SetStateAction<number>>, len: number }) {

    const limitArray = Array.from({ length: len }, (_, i) => i + 1);

    return (
        <div className='wrapper px-2 pt-16 w-full flex items-center justify-between'>
            <div>
                <h1 className='text-5xl text-secondary-light font-medium'>
                    Смартфоны
                </h1>
            </div>
            <div className='flex gap-x-1.5 text-primary'>
                Отобразить товары:
                {/* <div className='hover:cursor-pointer'>2</div>
                <div className='hover:cursor-pointer underline underline-offset-4'>
                    3
                </div>
                <div className='hover:cursor-pointer'>4</div>
                <div className='hover:cursor-pointer'>5</div>
                <div className='hover:cursor-pointer'>6</div> */}
                {limitArray.map((number, index) => {
                    return (
                        <div className={`hover:cursor-pointer ${number === limit ? 'underline underline-offset-4' : ''}`} key={index} onClick={() => limitFunc(number)}>{number}</div>
                    )
                })}
            </div>
        </div>
    );
}
