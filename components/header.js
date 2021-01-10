import DarkMode from './dark.mode.toggle'
export default function Header(){
    return (
        <header>
            <nav className="max-w-screen-md mx-auto flex justify-end p-5">
                <div className="mr-3">
                    <DarkMode></DarkMode>
                </div>
            </nav>
        </header>
    )
}