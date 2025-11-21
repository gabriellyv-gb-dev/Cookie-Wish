// component function
export default function AppHeader() {
    return (
        <header className="p-4 flex items-center shadow-lg min-h-[10dvh] max-h-[10dvh] bg-rose-300">
            <a href="/" className='flex gap-4 items-center'>
                <img 
                    src="/assets/images/logo.png"
                    alt="Cookie-Logo" 
                    className="h-16 w-16"
                />
                <h1 className="text-white font-bold text-2xl">
                    Cookie Wish
                </h1>
            </a>
        </header>
    )
}