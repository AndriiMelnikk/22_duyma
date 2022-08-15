import { BackgroundColor } from './ul';

export interface TypAlertMessages{
    idMessages: number,
    arrMessages: Messages[]
}
export interface Messages{
    id: number,
    text: string,
    message: string,
    background: BackgroundColor
}