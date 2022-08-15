import axios from 'axios';
import {_URL} from '.';
import {WortToID, AllWork, dateUpdateWorkId} from '../ts/typeOfWorks';

const url = _URL + 'work/phpScript/Test/';

export const TypOfWorks_api = {
    async postWortToID(id : number) {
        const res = await axios.post(url + 'WorkThis.php', {idWork: id});
        const newRes : WortToID[] = this._splitRes([
            'id', 'id_work', 'name', 'prise'
        ], res.data)

        return newRes;
    },
    async getAllWork() {
        const res = await axios.get(url + 'AllesWork.php');
        const newRes : AllWork[] = this._splitRes([
            'id', 'name'
        ], res.data)

        return newRes;
    },
    async updateWorkId(date : dateUpdateWorkId) {

        const res = await axios.post(url + 'UpdateWork.php', {
            id: date.id,
            updateWork: date.updateWork,
            valueWork: date.valueWork
        });
        
        const newRes = res.data;

        return newRes;
    },

    _splitRes(options : string[], data : string) {
        const arr : string[] = data.split('__//__');

        const res = arr.reduce((prev : any, current : any) => {
            const obj = options.reduce((_obj : any, _curr : any) => {
                return [
                    {
                        ..._obj[0],
                        [_curr]: current.split('_/_')[_obj[1]]
                    },
                    _obj[1] + 1
                ]

            }, [{}, 0])
            return [
                ...prev,
                obj[0]
            ];
        }, []);

        res.pop();

        return res;
    }
};
