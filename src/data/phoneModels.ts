import phonePic1 from '../assets/phone1.png';
import samsungPic from '../assets/phone2.png';
import xiaomiPic from '../assets/phone3.png';
import iphonePic from '../assets/phonedd.png';
import realmePic from '../assets/realme8.png';
import pixelPic from '../assets/pixel.png';
import nothingPic from '../assets/nothing.png';

export type modelType = {
    id: number;
    pic: string;
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
        pic: iphonePic,
        name: 'Apple iPhone 12',
        brand: 'Apple',
        release_date: '2020',
        screen_size: '6,1',
        production_contry: 'Китай',
        memory_capacity: '128',
        refresh_rate: '60',
        nfc: false,
        esim_support: true,
        wireless_charge_support: true,
        price: 55990,
    },
    {
        id: 2,
        pic: xiaomiPic,
        name: 'Xiaomi Mi 11 Lite ',
        brand: 'Xiaomi',
        release_date: '2021',
        screen_size: '6,55',
        production_contry: 'Китай',
        memory_capacity: '128',
        refresh_rate: '90',
        nfc: true,
        esim_support: true,
        wireless_charge_support: false,
        price: 27490,
    },
    {
        id: 3,
        pic: realmePic,
        name: 'Realme 8',
        brand: 'Realme',
        release_date: '2021',
        screen_size: '6,4',
        production_contry: 'Китай',
        memory_capacity: '128',
        refresh_rate: '60',
        nfc: true,
        esim_support: false,
        wireless_charge_support: false,
        price: 18990,
    },
    {
        id: 4,
        pic: samsungPic,
        name: 'Samsung Galaxy A72',
        brand: 'Samsung',
        release_date: '2021',
        screen_size: '6,7',
        production_contry: 'Вьетнам',
        memory_capacity: '128',
        refresh_rate: '90',
        nfc: true,
        esim_support: false,
        wireless_charge_support: true,
        price: 32890,
    },
    {
        id: 5,
        pic: phonePic1,
        name: 'Apple iPhone 13',
        brand: 'Apple',
        release_date: '2021',
        screen_size: '6,1',
        production_contry: 'Китай',
        memory_capacity: '256',
        refresh_rate: '60',
        nfc: true,
        esim_support: true,
        wireless_charge_support: true,
        price: 69990,
    },
    {
        id: 6,
        pic: pixelPic,
        name: 'Google Pixel 7 Pro',
        brand: 'Google',
        release_date: '2022',
        screen_size: '6,1',
        production_contry: 'Китай',
        memory_capacity: '128',
        refresh_rate: '120',
        nfc: true,
        esim_support: true,
        wireless_charge_support: true,
        price: 54490,
    },
    {
        id: 7,
        pic: nothingPic,
        name: 'Nothing Phone 1',
        brand: 'Nothing',
        release_date: '2022',
        screen_size: '6,55',
        production_contry: 'Китай',
        memory_capacity: '256',
        refresh_rate: '120',
        nfc: false,
        esim_support: true,
        wireless_charge_support: true,
        price: 39890,
    }
];

export const keyLabels: Record<
    keyof Omit<Omit<Omit<modelType, 'name'>, 'id'>, 'pic'>,
    string
> = {
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
