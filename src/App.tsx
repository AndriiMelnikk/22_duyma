import React, {useState} from 'react';

import style from './app.module.scss';
import Sidebar from './components/Sidebar';
import Pages from './pages/Index';

function App() {
    const [menu,
        setMenu] = useState < boolean > (false)
    const menuBtn = (visible : boolean) => {
        setMenu(visible)
    }

    return (
        <div className={style.app}>
            <div className={style.sidebar}>
                <Sidebar menuBtn={menuBtn} menuVisible={menu}/>
            </div>
            <div className={style.content}>
                <Pages setMenu={setMenu}/>
            </div>
        </div>
    );
}

export default App;
