import { BlogImage } from "@/components/blog-image"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  BlogImage,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
