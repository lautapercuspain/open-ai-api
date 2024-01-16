import { notFound } from "next/navigation"
import { allBlogPosts } from "contentlayer/generated"
import { BLOG_CATEGORIES } from "#/lib/constants/content"
import { Metadata } from "next"
import { constructMetadata } from "@/lib/utils"
import { getBlurDataURL } from "#/lib/images"
import BlogCard from "#/ui/content/blog-card"
import CategoryNav from "app/blog/category-nav"

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const category = BLOG_CATEGORIES.find(
    (category) => category.slug === params.slug,
  )
  if (!category) {
    return
  }

  const { title, description } = category

  return constructMetadata({
    title: `${title}`,
    description,
    image: `/api/og/help?title=${encodeURIComponent(
      title,
    )}&summary=${encodeURIComponent(description)}`,
  })
}

export default async function BlogCategory({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const data = BLOG_CATEGORIES.find((category) => category.slug === params.slug)
  if (!data) {
    notFound()
  }
  const articles = await Promise.all(
    allBlogPosts
      .filter((post) => post.categories.includes(data.slug))
      .map(async (post) => ({
        ...post,
        blurDataURL: await getBlurDataURL(post.image),
      })),
  )

  return (
    <>
      <CategoryNav />
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-2.5 py-10 md:grid-cols-3 lg:px-20">
        {articles.map((article, idx) => {
          return (
            <BlogCard key={article.slug} data={article} priority={idx <= 1} />
          )
        })}
      </div>
    </>
  )
}
