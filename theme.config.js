export default {
  github: 'https://github.com/beaussan/2020-2021-master-projects', // link of the project repo
  siteGithub: 'https://2020-2021-master-projects.vercel.app/', // link of the docs repo path
  titleSuffix: ' – Projects',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline">M2 III</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Projects
      </span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Master 2 III Projects" />
      <meta name="og:description" content="Master 2 III Projects" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content="Master 2 III Projects" />
    </React.Fragment>
  ),
};
