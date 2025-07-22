export default function CompareMain() {
    return (
        <main className='bg-bg'>
            {/* compare table */}
            <div className='wrapper'>
                {/* properties of models */}
                <div className="w-full max-w-1/5 flex flex-col">
                    <div className="border-y-[1px] border-y-secondary/35 py-4">Производитель</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">Год релиза</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">Диагноль экрана (Дюйм)</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">Страна-производитель</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">Объем памяти</div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="border-y-[1px] border-y-secondary/35 py-4">Apple</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">2022</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">6.1</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">Китай</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">128 гб.</div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="border-y-[1px] border-y-secondary/35 py-4">Apple</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">2022</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">6.1</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">Китай</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">128 гб.</div>
                </div>
                {/* <div className="w-full flex flex-col">
                    <div className="border-y-[1px] border-y-secondary/35 py-4">Apple</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">2022</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">6.1</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">Китай</div>
                    <div className="border-b-[1px] border-b-secondary/35 py-4">128 гб.</div>
                </div> */}
            </div>
        </main>
    );
}
