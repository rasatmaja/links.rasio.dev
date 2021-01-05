import DarkMode from './dark.mode.toggle'
export default function Header(){
    return (
        <header className="p-3">
            <nav className="max-w-screen-md mx-auto flex justify-between">
                <div className="flex items-center m-2">
                    Home
                </div>
                <div>
                    <DarkMode></DarkMode>
                </div>
            </nav>
        </header>
    )
}