export default function Profile({srcSet, sizes, src, alt, name, className, children, width, height}) {
    return (
        <>
        <img 
        srcSet={srcSet}
        sizes={sizes}
        src={src}
        alt={alt}
        width={width}
        height={height}
        />
        <p className={className}>{name}</p>
        <div>{children}</div>
        </>
    )
}
