import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
    const stories = [
        {
            name: "بيل غيتس",
            image: "/image/download.jpg",
            quote: "إذا لم يكن نشاطك التجاري على الإنترنت، فستكون أعمالك خارج نطاق العمل"
        },
        {
            name: "جيف بيزوس",
            image: "/image/jef.jpg",
            quote: "علامتك التجارية هي ما يقوله الآخرون عنك عندما لا تكون في الغرفة"
        }
    ];

    return (
        <section id="success-stories">
            <div className="container">
                <h2>اقتباسات ملهمة</h2>
                <div className="stories">
                    {stories.map((story, index) => (
                        <div key={index} className="story">
                            <img src={story.image} alt={story.name} />
                            <h3>{story.name}</h3>
                            <p><strong></strong> {story.summary}</p>
                            <p><strong></strong> {story.roleOfWebsite}</p>
                            <p className="quote"><strong></strong> "{story.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
