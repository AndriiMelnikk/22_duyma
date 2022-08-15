export interface TypeConsumables {
    loaderScreen: boolean;
    loaderAllConsumables: boolean;
    loaderUpdateConsumables: boolean;
    allConsumables:ConsumablesToID[];
    infoConsumables:ConsumablesToID;
    allBD:AllBD[],
    addressStore : string,
}

export interface ConsumablesToID{ 
    id:number,
    name: string,
    number: number,
    prise: number
}

export interface AllWork{
    id:number,
    name: string,
}

export enum updateWorkType{
    id = 'id',
    name = 'name',
    number = 'number',
    prise = 'prise'
}
export interface AllBD{
    address: string,
    id: number
}