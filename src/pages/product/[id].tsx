import { useRouter } from 'next/router';

const DetailProduct = () => {
    const router = useRouter();
    const { id } = router.query;
    return <div>Product Detail {id}</div>;
}

export default DetailProduct;
