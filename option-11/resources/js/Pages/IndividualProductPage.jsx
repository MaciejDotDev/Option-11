
import AnimateModal from "@/Components/AnimateModal";
import ProductPage from "@/Components/ProductPage";
export default function IndividualProductPage({ product, auth,reviews, starsAvg,commentsCount }) {


    return (
        <>
            <AnimateModal auth={auth}>
<ProductPage  product={product} auth={auth}  reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} />
            </AnimateModal>


        </>
    );
}
