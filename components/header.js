import DarkMode from './dark.mode.toggle'
export default function Header(){
    return (
        <header>
            <nav className="max-w-screen-md mx-auto flex justify-between p-5">
                <div className="flex items-center">
                    Home
                </div>
                <div>
                    <DarkMode></DarkMode>
                </div>
            </nav>
        </header>
    )
}