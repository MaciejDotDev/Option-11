
import AnimateModal from "@/Components/AnimateModal";
import IndividualAccessoryPage from "@/Components/IndividualAccessoryPage";
export default function ShowAccessory({ product, auth,reviews, starsAvg,commentsCount }) {


    return (
        <>
            <AnimateModal auth={auth}>
<IndividualAccessoryPage  product={product} auth={auth}  reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} />
            </AnimateModal>


        </>
    );
}
