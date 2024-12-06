import CardReview from "./CardReview";

const HighestRatedGame = ({highestData}) => {

    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-10">Highest Rated Game</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    highestData.map(review => <CardReview key={review._id} review={review}></CardReview>)
                }
            </div>
        </div>
    );
};

export default HighestRatedGame;