import { NextSeo, ArticleJsonLd } from "next-seo";

const BlogSeo = ({ title, description, publishedAt, url, image }) => {
    const date = new Date(publishedAt).toISOString()
    const featuredImage = {
        url: `https://rickiwasho.github.io${image}`,
        alt: title
    }

    return (
        <>
            <NextSeo
                title={`${title} - Ricardo Coronado`}
                description={description}
                canonical={url}
                openGraph={{
                    type: "article",
                    article: {
                        publishedTime: date
                    },
                    url,
                    title, 
                    description: description,
                    images: [featuredImage]
                }}
            />
            <ArticleJsonLd
                authorName="Ricardo Coronado"
                dateModified={date}
                datePublished={date}
                description={description}
                images={[featuredImage]}
                publisherLogo="/static/favicons/android-chrome-192x192.png"
                publisherName="Ricardo Coronado"
                title={title}
                url={url}
            />    
        </>
    )
}

export default BlogSeo