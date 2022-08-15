import axios from 'axios';
import {_URL} from '.';
import {ConsumablesToID, AllBD} from '../ts/consumables';

const url = _URL + 'material/phpScript/';

export const Consumables_api = {
    async getConsumablesToIdBD(id:number) {
        const res = await axios.post(url + 'MaterialThisBD.php', {idBD: id});

        const newRes : ConsumablesToID[] = this._splitRes([
            'id', 'name', 'number', 'prise'
        ], res.data)

        return newRes;

    },

    async getAllBD() {

        const res = await axios.post(url + 'AllesBD.php', {idBD: 2});

        const newRes : AllBD[] = this._splitRes([
            'address', 'id'
        ], res.data)
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
