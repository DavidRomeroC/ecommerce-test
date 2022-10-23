import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react';
import { MainLayout } from '../../../components/layout/MainLayout';
import { ItemCard } from '../../../components/products/ItemCard';
interface PropsDepartament {
    results: any;
}


const Producto: NextPage<PropsDepartament> = ({ results }) => {

    const { query } = useRouter();

    const filtredData = results.filter((result: any) => result.id === query.id)

    return (
        <MainLayout title={`${query.id}`} >
            <>
                <ItemCard filtredData={filtredData} />
            </>
        </MainLayout>
    )
}

export async function getStaticPaths() {

    const productosId = [...Array(28)].map((producto: any, index: any) => `${index + 1}`)

    return {
        paths: productosId.map((id: any) => ({
            params: { id }
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

export default Producto