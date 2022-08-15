import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () =>  {
    return (
        <div>
            Головна <Link to='/users' > Перагланути роботу</Link>
        </div>
    );
}


export default Home;