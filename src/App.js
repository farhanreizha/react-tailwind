/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Layout from './components/Layout';
import { Card } from './components/card/Card';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { CardHeader } from './components/card/CardHeader';
import { CardBody } from './components/card/CardBody';
import { FaArrowRight } from 'react-icons/fa';
import { CardFooter } from './components/card/CardFooter';
import { Helmet } from 'react-helmet';
import Footer from './components/footer/Footer';

function App({ title }) {
  return (
    <Layout className='bg-gradient-to-tr from-gray-100 via-zinc-500 to-slate-600 space-y-2'>
      <Helmet>
        <title>{title ? title : 'Home'}</title>
      </Helmet>
      <Header />
      <div className='space-y-2'>
        <div className='flex space-x-2'>
          <Card>
            <CardHeader>
              <h1 className='font-medium'>card title</h1>
              <h3 className='font-sm text-gray-500'>card subtitle</h3>
            </CardHeader>
            <CardBody>
              <img
                src='...png'
                alt='images'
                className='bg-gray-500 w-full h-64 object-cover object-center text-white flex justify-center items-center mb-4 mt-2'
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                culpa. Doloribus pariatur recusandae, nesciunt saepe libero
                excepturi cumque at sunt, iure blanditiis eaque nihil rerum!
                Porro repellendus aperiam error nostrum!
              </p>
              <Button className='font-semibold hover:bg-rose-500 bg-rose-400 mt-3 w-full gap-x-2'>
                <span>Go To Website</span> <FaArrowRight />
                <></>
              </Button>
            </CardBody>
            <CardFooter className='text-center'>
              copyright 2022 Farhan Reizha
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <h1 className='font-medium'>card title 2</h1>
              <h3 className='font-sm text-gray-500'>card subtitle 2</h3>
            </CardHeader>
            <CardBody>
              <img
                src='...png'
                alt='images'
                className='bg-gray-500 w-full h-64 object-cover object-center text-white flex justify-center items-center mb-4 mt-2'
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                culpa. Doloribus pariatur recusandae, nesciunt saepe libero
              </p>
              <Button className='font-semibold hover:bg-rose-500 bg-rose-400 mt-3 w-full gap-x-2'>
                <span>Go To Website</span> <FaArrowRight />
              </Button>
            </CardBody>
            <CardFooter className='text-center'>
              copyright 2022 Farhan Reizha
            </CardFooter>
          </Card>
        </div>
        <Button className='bg-indigo-500 hover:bg-indigo-600'>primary</Button>
      </div>
      <Footer />
    </Layout>
  );
}

export default App;
