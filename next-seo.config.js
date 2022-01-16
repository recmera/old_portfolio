const title = "Ricardo Coronado's website"
const description = 'in this website i write about things im interested.'

const SEO = {
    title,
    description,
    canonical: 'https://rickiwasho.github.io',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://rickiwasho.github.io',
        title,
        description,
        images: [
            {
                url: 'https://rickiwasho.github.io/favicon.ico',
                alt: title
            }
        ]
    },
    
}

export default SEO