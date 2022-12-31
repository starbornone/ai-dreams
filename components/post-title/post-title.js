export function PostTitle({ children }) {
    return (
        <h1 className="mx-auto mt-8 mb-12 max-w-4xl text-3xl tracking-tighter md:text-center md:text-4xl">
            <a className="post-title" data-content={children}>
                {children}
            </a>
        </h1>
    )
}