import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Else: FC = () =>  {
    return (
        <div>
            Іншa <Link to='/users' > Перагланути роботу</Link>
        </div>
    );
}


export default Else;