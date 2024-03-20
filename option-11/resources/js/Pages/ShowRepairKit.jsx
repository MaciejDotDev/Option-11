
import AnimateModal from "@/Components/AnimateModal";
import IndividualRepairKitPage from "@/Components/IndividualRepairKitPage";
export default function ShowBikePage({ product, auth,reviews, starsAvg,commentsCount }) {


    return (
        <>
            <AnimateModal auth={auth}>
<IndividualRepairKitPage  product={product} auth={auth}  reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} />
            </AnimateModal>


        </>
    );
}
