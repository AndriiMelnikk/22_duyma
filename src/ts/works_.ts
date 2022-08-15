export interface UserState {
    blockNumber: BlockNumber[];
    task:Task[],
    unresolvedTickets:BlockNumber[];
    usersTable: User[],
    profile:User
    loaderTable: boolean;
}

export interface Task {
    name: string,
    checked: boolean,
    date: "default" | "new" | 'urgent'
}

export interface BlockNumber {name:string, number:number};

export interface User{
    "id": number,
    "name": string,
    "username": string
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
    },
    "phone":string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
    }
}
