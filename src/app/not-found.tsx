import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <body className="flex flex-col h-screen justify-center items-center bg-gray-100">
            <div className="flex flex-col items-center">
                <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
                <p className="text-2xl font-medium text-gray-600 mb-6">Page Not Found</p>
                <Button>
                    <a href="/" className="px-4 py-2">
                        Go Home
                    </a>
                </Button>
            </div>
        </body>
    )
}