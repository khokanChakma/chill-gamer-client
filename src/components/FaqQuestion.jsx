import SectionTitle from "./SectionTitle";

const FaqQuestion = () => {
    return (
        <div>
            <SectionTitle heading={'FAQ Question'}></SectionTitle>
            <div className="flex flex-col gap-4 mx-auto">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">1.What is Chill Gamer? </div>
                    <div className="collapse-content">
                        <p>Chill Gamer is a user-friendly platform where gamers can explore, share, and read reviews about various games. It aims to create a relaxed and engaging environment for gaming enthusiasts.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">2. Who can use Chill Gamer?</div>
                    <div className="collapse-content">
                        <p>Anyone with an interest in video games can use Chill Gamer to read or write game reviews. All you need is a free account to get started.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">3. How do I create an account on Chill Gamer?</div>
                    <div className="collapse-content">
                        <p>You can create an account by clicking on the 'Sign Up' button on the homepage and filling out the required information. You can also sign up using your Google or Facebook account.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">4. How can I post a game review?</div>
                    <div className="collapse-content">
                        <p>Once logged in, navigate to the 'Write a Review' section, select the game you want to review, and share your thoughts. Don’t forget to rate the game and submit your review!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">5.Can I edit or delete my reviews?</div>
                    <div className="collapse-content">
                        <p>Yes, you can edit or delete your reviews anytime by visiting your profile and selecting the review you wish to modify or remove.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqQuestion;