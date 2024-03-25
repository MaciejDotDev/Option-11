





import AnimateModal from '@/Components/AnimateModal';
import ReviewProducts from '@/Pages/ReviewProducts';


const Test = ({ auth, reviews,starsAvg,commentsCount }) => {

  return (
    <div>
       <AnimateModal auth={auth} >

        <ReviewProducts reviews={reviews} starsAvg={starsAvg} commentsCount={commentsCount} auth={auth} ></ReviewProducts>




      </AnimateModal>
    </div>
  );
};

export default Test;
