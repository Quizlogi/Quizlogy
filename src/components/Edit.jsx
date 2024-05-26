import { Typography } from '@material-tailwind/react';

export default function Edit() {
  return (
    <div className='mx-auto my-12 max-w-[1006px]'>
      <Typography className='ml-4 mb-6' variant='h4'>
        Edit Quiz
      </Typography>
      <div className='relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
        <table className='w-full text-left table-auto min-w-max'>
          <thead>
            <tr>
              <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                  Quiz Name
                </p>
              </th>
              <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                  Category
                </p>
              </th>
              <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                  Number of Questions
                </p>
              </th>
              <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                  Created At
                </p>
              </th>
              <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'></p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Keanekaragaman Hayati
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Biologi
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50 '>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  10
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  23/04/18
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50 flex justify-between'>
                <div className='flex space-x-4'>
                  <a
                    href='#'
                    className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                    Edit
                  </a>
                  <a
                    href='#'
                    className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                    Delete
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Fungi
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Biologi
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50 '>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  10
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  23/04/18
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50 flex justify-between'>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                  Edit
                </a>
                <a
                  href='#'
                  className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                  Delete
                </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Animalia
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Biologi
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50 '>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  10
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  19/09/17
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50 flex justify-between'>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                  Edit
                </a>
                <a
                  href='#'
                  className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                  Delete
                </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Michael Levi
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Developer
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50 '>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  10
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  24/12/08
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50 flex justify-between'>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                  Edit
                </a>
                <a
                  href='#'
                  className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                  Delete
                </a>
                </div>
              </td>
            </tr>
            <tr>
              <td className='p-4'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Richard Gran
                </p>
              </td>
              <td className='p-4'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  Manager
                </p>
              </td>
              <td className='p-4 border-b border-blue-gray-50 '>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  10
                </p>
              </td>
              <td className='p-4'>
                <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                  04/10/21
                </p>
              </td>
              <td className='p-4 flex justify-between'>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                  Edit
                </a>
                <a
                  href='#'
                  className='block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900'>
                  Delete
                </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
