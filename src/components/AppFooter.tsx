// static
import { footerLinksObject } from '../static/footerLinksObject';

// component function
export default function AppFooter() {
    return (
        <footer className="bg-gray-100 flex flex-col gap-4 items-center justify-center text-center min-h-[10dvh] max-h-[10dvh]">
            <p className="text-gray-600">
                &copy; 2025 Gabrielly Vitória
            </p>
            <div>
                <ul className='flex gap-5'>
                    <li>
                        <a href={footerLinksObject.github}>
                            Github
                        </a>
                    </li>
                    <li>
                        <a href={footerLinksObject.linkedin}>
                            Linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}