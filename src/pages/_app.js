import NextApp from 'next/app';

import { SearchProvider } from 'hooks/use-search';
import { SiteContext, useSiteContext } from 'hooks/use-site';

import { getCategories } from 'lib/categories';
import { getAllMenus } from 'lib/menus';
import { getRecentPosts } from 'lib/posts';
import { getSiteMetadata } from 'lib/site';
import NextNProgress from 'nextjs-progressbar';

import variables from 'styles/_variables.module.scss';
import 'styles/globals.scss';
import 'styles/wordpress.scss';

function App({ Component, pageProps = {}, metadata, recentPosts, categories, menus }) {
  const site = useSiteContext({
    metadata,
    recentPosts,
    categories,
    menus,
  });

  return (
    <SiteContext.Provider value={site}>
      <SearchProvider>
        <NextNProgress height={4} color={variables.progressbarColor} />
        <Component {...pageProps} />
      </SearchProvider>
    </SiteContext.Provider>
  );
}

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const { posts: recentPosts } = await getRecentPosts({
    count: 5,
    queryIncludes: 'index',
  });

  const { categories } = await getCategories({
    count: 5,
  });

  const { menus = [] } = await getAllMenus();

  return {
    ...appProps,
    metadata: await getSiteMetadata(),
    recentPosts,
    categories,
    menus,
  };
};

export default App;
