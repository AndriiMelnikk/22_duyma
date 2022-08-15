export interface TypeOfWorksState {
    loaderScreen: boolean;
    loaderWork: boolean;
    loaderUpdateWork: boolean;
    allWork:AllWork[];
    infoWork:WortToID[];
    detailsWork: WortToID;
    selectWork: string
}

export interface WortToID{ 
    id:number,
    id_work: number,
    name: string,
    prise: number
}

export interface AllWork{
    id:number,
    name: string,
}

export enum updateWorkType{
    name = 'name',
    prise = 'prise',
}

export interface dateUpdateWorkId{
    id: number,
    updateWork: updateWorkType,
    valueWork: string
}