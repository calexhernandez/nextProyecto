/* import endPoints from '@services/api';
import useFetch from '@hooks/useFetch';
import Paginate from '@hooks/Paginate';
import Pagination from '@components/pagination';
import { Chart } from '@common/Chart';
 */
import { signIn, useSession } from 'next-auth/react';
import ConnectButton from '@components/ConnectButton';
import MainContainer from '@components/MainContainer';
import { Card } from '@components/Card';

/* 
const PRODUCT_LIMIT = 5;
const PRODUCT_OFFSET = 0;
 */
export default function Dashboard() {
  const { data1, status } = useSession();
  /* 
  const allProducts = useFetch(endPoints.products.getProducts(0, 0));
  const totalProducts = allProducts.length;
  const paginate = Paginate(PRODUCT_LIMIT, PRODUCT_OFFSET, totalProducts);
  const handleNext = paginate.handleNext;
  const handlePrev = paginate.handlePrev;
  const offset = paginate.newOffset; */
  //const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));
  /* const products = allProducts.slice(offset, offset + PRODUCT_LIMIT);

  const categoryName = products?.map((product) => product.category);
  const categorycount = categoryName?.map((category) => category.name);
 */
  //console.log(categoryName);
  //console.log(categorycount);

  /* const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categorycount),
        borderWidth: 2,
        backgroundColor: ['#f87979', '#f8e979', '#f83978', '#c8e979', '#a8e679'],
      },
    ],
  }; */
  
  //console.log(products);
  return status === 'authenticated' ? (
    <MainContainer>
      <Card userProfile={data1.userProfile} />
    </MainContainer>
  ) : (
    <MainContainer>
      <ConnectButton onClick={() => signIn("github")}>
        Login with Github
      </ConnectButton>
    </MainContainer>
  );
}







{/* 
    <>

      <Chart classname="mb-8 mt-2" ChartData={data} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{product.category.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${product.price}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination limit={PRODUCT_LIMIT} offset={offset} total={totalProducts} handlePrev={handlePrev} handleNext={handleNext}></Pagination>
            </div>
          </div>
        </div>
      </div>
    </> */}