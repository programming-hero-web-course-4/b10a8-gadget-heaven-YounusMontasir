import { useLoaderData } from 'react-router-dom';
import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Helmet } from 'react-helmet';

const Statistics = () => {
  const chartData = useLoaderData();

  // Ensure 'price' is a number
  const processedData = chartData.map((item) => ({
    ...item,
    price: parseFloat(item.price),
  }));

  return (
    <div className="">
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
        <meta
          name="description"
          content="Explore our selection of the latest gadgets and accessories at Gadget Heaven."
        />
      </Helmet>
      <div className="w-full mx-auto bg-[#9538E2] pt-12 pb-12 mb-20">
        <h1 className="text-white text-[32px] font-bold text-center w-full mx-auto">Statistics</h1>
        <p className="text-white text-center w-full lg:w-6/12 mx-auto my-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest
          accessories, we have it all!
        </p>
      </div>
      <div className='mb-20'>
      <ResponsiveContainer width="100%" height={400} >
        <ComposedChart
          data={processedData} // Use processed data with numeric 'price'
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" scale="band" />
          <YAxis domain={[0, 'dataMax']} /> {/* Set domain */}
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="rating" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
