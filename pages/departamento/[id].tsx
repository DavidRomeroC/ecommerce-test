import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { ProductsCard } from '../../components/products/ProductsCard';

interface PropsDepartament {
    results: any;
}


const Departamento: NextPage<PropsDepartament> = ({ results }) => {
    
    const { query } = useRouter();

    const filtredData = results.filter((result: any) => result.product_category === query.id)

    return (
        <MainLayout title={`${query.id}`} >
            <>
                <h2> {`${query.id}`} </h2>
                <ProductsCard filtredData={filtredData} />
            </>
        </MainLayout>
    )
}

export async function getStaticPaths() {

    const departamentos = ["consolas", "ropa", "tenis", "celulares"];

    return {
        paths: departamentos.map((departamento:any) => ({
            params: {id: departamento}
        })),
        fallback: false,
    }
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

export default Departamento