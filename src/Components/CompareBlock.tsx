export default function CompareBlock(){
    return (
        <main className="container flex flex-col py-12 px-2">
            {/* compare header */}
            <div className="wrapper w-full flex items-center justify-between">
                <div>
                    <h1 className="text-5xl text-secondary-light font-medium">Смартфоны</h1>
                </div>
                <div className="flex gap-x-1.5 text-primary">
                    Отобразить товары: 
                    <div className="hover:cursor-pointer">2</div>
                    <div className="hover:cursor-pointer underline underline-offset-4">3</div>
                    <div className="hover:cursor-pointer">4</div>
                    <div className="hover:cursor-pointer">5</div>
                    <div className="hover:cursor-pointer">6</div>
                </div>
            </div>
            {/* compare models */}
            <div className="w-full">
                
            </div>
            {/* compare table */}
            <div className="w-full">

            </div>
        </main>
    )
}