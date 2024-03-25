
import AnimateModal from "@/Components/AnimateModal";
import IndividualClothingPage from "@/Components/IndividualClothingPage";
export default function ShowBikePage({ product, auth,reviews, starsAvg,commentsCount }) {


    return (
        <>
            <AnimateModal auth={auth}>
<IndividualClothingPage  product={product} auth={auth}  reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} />
            </AnimateModal>


        </>
    );
}
