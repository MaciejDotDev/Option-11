
import AnimateModal from "@/Components/AnimateModal";
import IndividualBikePartPage from "@/Components/IndividualBikePartPage";
export default function ShowBikePage({ product, auth,reviews, starsAvg,commentsCount }) {


    return (
        <>
            <AnimateModal auth={auth}>
<IndividualBikePartPage  product={product} auth={auth}  reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} />
            </AnimateModal>


        </>
    );
}
