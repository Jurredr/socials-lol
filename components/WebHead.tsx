import Head from 'next/head'

const WebHead: React.FC = () => {
  return (
    <Head>
      {/* Base configuration */}
      <title>socials.lol - One Card, All Your Socials</title>
      <link rel="icon" href="/branding/favicon.ico" />

      {/* SEO configuration */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta
        name="description"
        content="Create a shareable card with all your socials, links, game stats, and more!"
      />
      <meta
        name="keywords"
        content="Socials, Social, Card, TikTok, Instagram, Discord, Links, LinkTree, LinkTr.ee, Summary, Business card, personal website"
      />
      <meta name="subject" content="Shareable Social Cards" />
      <meta name="copyright" content="socials.lol" />
      <meta name="language" content="EN" />
      <meta name="robots" content="index,follow" />
      <meta name="url" content="https://www.socials.lol" />
      <meta name="identifier-URL" content="https://www.socials.lol" />
      <meta name="theme-color" content="#ffacd5" />
      <link rel="canonical" href="https://www.socials.lol" />

      {/* OpenGraph tags */}
      <meta
        property="og:title"
        content="socials.lol - All Your Socials, One Card"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Create a shareable card with all your socials, links, game stats, and more!"
      />
      <meta
        property="og:image"
        content="https://www.socials.lol/branding/banner.jpg"
      />
      <meta
        property="og:image:url"
        content="https://www.socials.lol/branding/banner.jpg"
      />
      <meta
        property="og:image:secure_url"
        content="https://www.socials.lol/branding/banner.jpg"
      />
      <meta property="og:url" content="https://www.socials.lol" />
      <meta property="og:site_name" content="socials.lol" />
      <meta property="og:email" content="hello@socials.lol" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="socials.lol" />
      <meta
        name="twitter:description"
        content="Create a shareable card with all your socials, links, game stats, and more!"
      />
      <meta
        name="twitter:image"
        content="https://www.socials.lol/branding/banner.jpg"
      />
      <meta name="twitter:site" content="@JurredeRuiter" />
      <meta name="twitter:creator" content="@JurredeRuiter" />
    </Head>
  )
}

export default WebHead
