import React from 'react';
import Grid from './Grid.jsx';

function App() {
	return (
    <>
    <Grid
  // optional: default is `true`
  visibleByDefault={true}
  //
  // Sets of columns for each breakpoint
  // In this example the mobile columns have outside margin and borders
  // The others will touch to the outer edges of the window
  cols={[
    {
      breakpoint: `default`,
      columns: 6,
      className: `mx-4 border-l border-r border-red-500`,
    },
    { breakpoint: `md`, columns: 12, className: `` },
    { breakpoint: `xl`, columns: 16, className: `` },
  ]}
/>
		<div className='flex items-center justify-center w-screen h-screen bg-gray-900 '>
			<div className='w-3/12 p-6 mx-auto space-y-10 text-center bg-gray-800 rounded'>
				<h1 className='text-4xl text-white'>Vite + React + Tailwind</h1>
				<p className='text-2xl text-blue-300'>It's working</p>
				<a
					href='https://github.com/moinulmoin/vite-react-tailwind-starter'
					className='block text-3xl text-blue-300 underline'
				>
					⭐Star the repo if it helped you! :)
				</a>
			</div>
		</div>
    </>
	);
}

export default App;
