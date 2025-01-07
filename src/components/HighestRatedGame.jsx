import CardReview from "./CardReview";

const HighestRatedGame = ({highestData}) => {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    highestData.map(review => <CardReview key={review._id} review={review}></CardReview>)
                }
            </div>
        </div>
    );
};

export default HighestRatedGame;