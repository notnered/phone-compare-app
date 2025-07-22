export type modelType = {
    id: number;
    name: string;
    brand: string;
    release_date: string;
    screen_size: string;
    production_contry: string;
    memory_capacity: string;
    refresh_rate: string;
    nfc: boolean;
    esim_support: boolean;
    wireless_charge_support: boolean;
    price: number;
};

export const models: modelType[] = [
    {
        id: 1,
        name: 'iPhone 12',
        brand: 'Apple',
        release_date: '2020',
        screen_size: '6.1',
        production_contry: 'Китай',
        memory_capacity: '128',
        refresh_rate: '60',
        nfc: false,
        esim_support: true,
        wireless_charge_support: true,
        price: 81990,
    },
    {
        id: 2,
        name: 'Samsung Galaxy S21',
        brand: 'Samsung',
        release_date: '2021',
        screen_size: '6.2',
        production_contry: 'Республика Корея',
        memory_capacity: '128',
        refresh_rate: '60',
        nfc: true,
        esim_support: true,
        wireless_charge_support: true,
        price: 79990,
    },
    {
        id: 3,
        name: 'Realme 8',
        brand: 'Realme',
        release_date: '2021',
        screen_size: '6.4',
        production_contry: 'Китай',
        memory_capacity: '128',
        refresh_rate: '60',
        nfc: false,
        esim_support: true,
        wireless_charge_support: true,
        price: 69990,
    },
    {
        id: 4,
        name: 'iPhone 12',
        brand: 'Apple',
        release_date: '2020',
        screen_size: '6.1',
        production_contry: 'Китай',
        memory_capacity: '128',
        refresh_rate: '60',
        nfc: false,
        esim_support: true,
        wireless_charge_support: true,
        price: 81990,
    },
];

export const keyLabels: Record<keyof Omit<modelType, 'id'>, string> = {
    name: 'Название',
    brand: 'Производитель',
    release_date: 'Год релиза',
    screen_size: 'Диагональ экрана (дюйм)',
    production_contry: 'Страна-производитель',
    memory_capacity: 'Объем памяти',
    refresh_rate: 'Частота обновления экрана',
    nfc: 'NFC',
    esim_support: 'Поддержка eSIM',
    wireless_charge_support: 'Поддержка беспроводной зарядки',
    price: 'Стоимость',
};
