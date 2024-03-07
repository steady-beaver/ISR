import { SearchProvider } from 'hooks/use-search';
import NextNProgress from 'nextjs-progressbar';
import SearchWrapper from 'templates/SearchWrapper';

export default function Search() {
  return (
    <>
      <SearchProvider>
        <NextNProgress height={4} />
        <SearchWrapper />
      </SearchProvider>
    </>
  );
}

// Next.js method to ensure a static page gets rendered
export async function getStaticProps() {
  return {
    props: {},
  };
}
