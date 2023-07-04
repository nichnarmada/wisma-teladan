import Image, { ImageProps } from "next/image"

interface BlogImageProps extends ImageProps {
  description?: string
}

export function BlogImage({ description, ...props }: BlogImageProps) {
  return description ? (
    <div className="flex flex-col items-center">
      <div className="relative h-0 w-full" style={{ paddingBottom: "56.25%" }}>
        <Image {...props} />
      </div>
      <p className="mt-8 text-gray-400">{description}</p>
    </div>
  ) : (
    <Image {...props} />
  )
}
