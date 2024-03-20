
import AnimateModal from "@/Components/AnimateModal";
import IndividualBikePage from "@/Components/IndividualBikePage";
export default function ShowBikePage({ product, auth,reviews, starsAvg,commentsCount }) {


    return (
        <>
            <AnimateModal auth={auth}>
<IndividualBikePage  product={product} auth={auth}  reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} />
            </AnimateModal>


        </>
    );
}
