import { fetchPage } from '../utils/api';
import { SliceManager } from '@components/shared/SliceManager';

export default function Home({ slices }) {
  //console.log('slices');
  //console.log(slices);
  return <>{slices && <SliceManager slices={slices} />}</>;
}
export async function getStaticProps() {
  const pageData = await fetchPage('homepage1');
  //console.log('pageData');
  //console.log(pageData);
  return { props: pageData };
}
