import useSearch from 'hooks/use-search';
import { useEffect } from 'react';
import TemplateArchive from './archive';

const SearchWrapper = () => {
  const { results, search } = useSearch();
  const title = 'Search';
  const slug = 'search';

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    search({
      query: params.get('q'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <TemplateArchive title={title} posts={results} slug={slug} />;
};

export default SearchWrapper;
