import getStrapiURL from '@/app/src/utils/get-strapi-url'

export default function SquarePics({
  src,
  alt,
  caption,
  captionUrl,
  moreUrl,
  moreText,
}) {
  const imageSrc = src?.startsWith('http') ? src : `${getStrapiURL()}${src}`

  return (
    <div className="text-center">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          className="w-60 h-60 object-cover rounded-2xl"
        />
      ) : null}

      <div className="mt-8 text-md text-gray-700 font-[Convergence] flex flex-col gap-2 w-60 mx-auto break-words">
        {captionUrl ? (
          <a
            href={captionUrl}
            className="hover:scale-110 transform transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {caption}
          </a>
        ) : (
          <p>{caption}</p>
        )}
        {moreUrl && moreText && (
          <a
            href={moreUrl}
            className="text-[#ac7ba5] hover:scale-110 transform transition-all text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {moreText}
          </a>
        )}
      </div>
    </div>
  )
}
