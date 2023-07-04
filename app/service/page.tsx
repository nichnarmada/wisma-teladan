import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Service() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Pelayanan
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allPosts.map((post) => (
            <article
              key={post._id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              {post.cover && (
                <img
                  src={post.cover}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={post.slug}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
            </article>
          ))}
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img
              src="https://images.unsplash.com/photo-1597399069243-e782acdca4d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
              <Link href="/service/rental">
                <span className="absolute inset-0" />
                Menyewakan Alat Berat
              </Link>
            </h3>
          </article>
        </div>
      </div>
    </div>
  )
}
