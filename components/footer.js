import { getFontDefinitionFromNetwork } from "next/dist/next-server/server/font-utils";

export default function Footer(){
    return(
        <footer className="p-10 border-secondry-light dark:border-secondry-dark border-t-2">
           <div className="max-w-screen-md mx-auto">
                <p className="text-center text-sm">
                    Develop with ❤️ by <span className="font-bold">Rasio Atmaja</span>
                </p>
                <p className="text-center text-sm">
                    Build with <span className="font-bold">NextJS</span> and <span className="font-bold">TailwindCSS</span>
                </p>
                <p className="text-center text-sm">
                    Hosted at <span className="font-bold">▲Vercel </span>
                </p>
           </div>
        </footer>
    )
}