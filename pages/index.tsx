import type { NextPage } from 'next'
import { useState } from 'react';
import { CategoryCard } from '../components/departament/CategoryCard';
import { MainLayout } from '../components/layout/MainLayout'


interface Props {
  results: any;
}

const Home: NextPage<Props> = ({ results }) => {

  const [isActive, setIsActive] = useState(true);

  const handleActive = () => {
    setIsActive(!isActive)
  }

  const filtredData: any = results.reduce((acc: any, item: any) => {
    if (!acc.find((fitem: any) => fitem.product_category === item.product_category)) {
      acc.push(item)
    }
    return acc
  }, [])

  return (
    <MainLayout title="Ecommerce Page" >
      <>
        <h2>Promociones</h2>
        <div>
          Publicidad
        </div>
        <h2>Departamentos</h2>
        <div className='cards__content' >
          <CategoryCard filtredData={filtredData} isActive={isActive} />
        </div>
        <button
        className='show__content'
          onClick={handleActive}
        >
          {`Mostrar ${isActive ? "Más" : "Menos"}`}
        </button>
      </>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://david-god.vercel.app/api/ecommerce");
  const data = await res.json();

  return {
    props: {
      results: data,
    },
  };
}

export default Home
