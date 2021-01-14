import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import style from '../styles/dark.mode.toggle.module.css';

export default function DarkMode() {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div>
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="h-10 w-10 flex justify-center items-center"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <input
                    id="toggle"
                    className={style.toggle}
                    type="checkbox"
                    checked={isMounted && theme === 'light'}
                />
            </button>
        </div>
    );
}

// Credit animated Dark mode icon:
// https://codepen.io/mrozilla/pen/OJJNjRb
