import { useEffect, useState } from 'react';
import Logo from '../../images/logo.png';
import './style.css';
import Menu from '../menu/Menu';

export default function Header(props) {
    /**
     * Правила работы с хуками
     * 1. Нельзя писать вне компонента/класса
     * 2. useState и useEffect всегда должны быть вне условия и на самом верху
     */
    const [now, setNow] = useState(new Date()); //0 - значение, 1 - функция коллбек, которая меняет это значение
    const [elements, setElements] = useState(null);

    useEffect(
        () => {
            //timer
            const interval = setInterval(() => setNow(new Date()), 1000);

            return () => {
                clearInterval(interval);
                console.log('clear time');
            }
        }, []
    )

    return (
        <header>
            <div className='LogoGroup'>
                <img src={Logo} width="40px" alt="" />
                <h1>SPA</h1>
            </div>

            <Menu elements={ props.menu }/>

            <div className='timer'>{ now.toLocaleTimeString() }</div>
        </header>
    )
}