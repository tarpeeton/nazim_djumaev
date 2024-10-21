import { StaticImageData } from 'next/image';


export interface IShowMoreProps {
    before: StaticImageData
    after: StaticImageData
    name: {ru: string , uz: string }
    date: string
    text: {ru: string , uz: string }
}