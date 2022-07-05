import React, { Component } from "react";
import './App.css';

export default class AppObjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: Math.floor(Math.random() * (116 + 1))
        }
        this.newQuote = this.newQuote.bind(this);
    };

    newQuote = () => {
        this.setState (state => ({
            index: Math.floor(Math.random() * (116 + 1))
        }));
    };

    render() {
        return (
            <div className="AppObjects" id="quote-box">
                <span id="text">{quoteArr[this.state.index].quote}</span>
                <span id="author">{quoteArr[this.state.index].author}</span>
                <div className="buttonWrap">
                    <div className="social">
                        <a id="tweet-quote" className="socialLink" href="https://twitter.com/intent/tweet?text=https://valentin93z.github.io/randow-quote-machine/" rel="nofollow" target="_blank">
                        <svg className="socialIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>                        </a>
                        <a id="facebook-quote" className="socialLink" href="http://www.facebook.com/sharer.php?u=https://valentin93z.github.io/randow-quote-machine/" rel="nofollow" target="_blank">
                        <svg className="socialIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>                        </a>
                    </div>
                    <div className="quoteButton">
                        <div className="hovDiv">
                            <button id="new-quote" type="button" onClick={this.newQuote}>next quote</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const quoteArr = [
    {
        author: "Albert Einstein",
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them."
    },
    {
        author: "Mahatma Gandhi",
        quote: "Learn as if you will live forever, live like you will die tomorrow."
    },
    {
        author: "Mark Twain",
        quote: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."
    },
    {
        author: "Eleanor Roosevelt",
        quote: "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out."
    },
    {
        author: "Norman Vincent Peale",
        quote: "When you change your thoughts, remember to also change your world."
    },
    {
        author: "Walter Anderson",
        quote: "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest."
    },
    {
        author: "Winston S. Churchill",
        quote: "Success is not final, failure is not fatal, It is the courage to continue that counts."
    },
    {
        author: "Herman Melville",
        quote: "It is better to fail in originality than to succeed in imitation."
    },
    {
        author: "Colin R. Davis",
        quote: "The road to success and the road to failure are almost exactly the same."
    },
    {
        author: "Henry David Thoreau",
        quote: "Success usually comes to those who are too busy looking for it."
    },
    {
        author: "Dale Carnegie",
        quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success."
    },
    {
        author: "Mister Rogers",
        quote: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind."
    },
    {
        author: "John Wooden",
        quote: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable."
    },
    {
        author: "Estée Lauder",
        quote: "I never dreamed about success. I worked for it."
    },
    {
        author: "W. P. Kinsella",
        quote: "Success is getting what you want, happiness is wanting what you get."
    },
    {
        author: "Winston Churchill",
        quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty."
    },
    {
        author: "Will Rogers",
        quote: "Don't let yesterday take up too much of today."
    },
    {
        author: "Unknown",
        quote: "You learn more from failure than from success. Don't let it stop you. Failure builds character."
    },
    {
        author: "Steve Jobs",
        quote: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you."
    },
    {
        author: "Dorothy West",
        quote: "To know how much there is to know is the beginning of learning to live."
    },
    {
        author: "Tony Robbins",
        quote: "Goal setting is the secret to a compelling future."
    },
    {
        author: "Alexander Graham Bell",
        quote: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus."
    },
    {
        author: "Jim Rohn",
        quote: "Either you run the day or the day runs you."
    },
    {
        author: "Thomas Jefferson",
        quote: "I'm a greater believer in luck, and I find the harder I work the more I have of it."
    },
    {
        author: "Paulo Coelho",
        quote: "When we strive to become better than we are, everything around us becomes better too."
    },
    {
        author: "Thomas Edison",
        quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work."
    },
    {
        author: "Tony Robbins",
        quote: "Setting goals is the first step in turning the invisible into the visible."
    },
    {
        author: "Steve Jobs",
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."
    },
    {
        author: "Dalai Lama",
        quote: "Just one small positive thought in the morning can change your whole day."
    },
    {
        author: "Chris Grosser",
        quote: "Opportunities don't happen, you create them."
    },
    {
        author: "George Eliot",
        quote: "It is never too late to be what you might have been."
    },
    {
        author: "Les Brown",
        quote: "Don't let someone else's opinion of you become your reality"
    },
    {
        author: "Mark Cuban",
        quote: "If you're not positive energy, you're negative energy."
    },
    {
        author: "Stephen R. Covey",
        quote: "I am not a product of my circumstances. I am a product of my decisions."
    },
    {
        author: "William James",
        quote: "The greatest discovery of my generation is that a human being can alter his life by altering his attitudes."
    },
    {
        author: "Edmond Mbiaka",
        quote: "One of the differences between some successful and unsuccessful people is that one group is full of doers, while the other is full of wishers."
    },
    {
        author: "Lucille Ball",
        quote: "I'd rather regret the things I've done than regret the things I haven't done."
    },
    {
        author: "Gordon B. Hinckley",
        quote: "You cannot plow a field by turning it over in your mind. To begin, begin."
    },
    {
        author: "David Dweck",
        quote: "Mondays are the start of the work week which offer new beginnings 52 times a year!"
    },
    {
        author: "Wayne Dyer",
        quote: "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice."
    },
    {
        author: "Zig Ziglar",
        quote: "You can get everything in life you want if you will just help enough other people get what they want."
    },
    {
        author: "Pablo Picasso",
        quote: "Inspiration does exist, but it must find you working."
    },
    {
        author: "Angela Bassett",
        quote: "Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had."
    },
    {
        author: "Barbara Elaine Smith",
        quote: "I have stood on a mountain of no's for one yes."
    },
    {
        author: "Tobias Lütke",
        quote: "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it."
    },
    {
        author: "Anne Lamott",
        quote: "Don't look at your feet to see if you are doing it right. Just dance."
    },
    {
        author: "Warren Buffet",
        quote: "Someone's sitting in the shade today because someone planted a tree a long time ago."
    },
    {
        author: "Benjamin Franklin",
        quote: "He that can have patience can have what he will."
    },
    {
        author: "Jessica Ennis",
        quote: "The only one who can tell you “you can't win” is you and you don't have to listen."
    },
    {
        author: "Bo Jackson",
        quote: "Set your goals high, and don't stop till you get there."
    },
    {
        author: "Carl Sagan",
        quote: "Somewhere, something incredible is waiting to be known."
    },
    {
        author: "Napoleon Hill",
        quote: "If you can't yet do great things, do small things in a great way."
    },
    {
        author: "Henry Ford",
        quote: "Failure is simply the opportunity to begin again, this time more intelligently."
    },
    {
        author: "Confucius",
        quote: "Our greatest glory is not in never falling, but in rising every time we fall."
    },
    {
        author: "Wayne Dyer",
        quote: "If you change the way you look at things, the things you look at change."
    },
    {
        author: "Bill Gates",
        quote: "It's fine to celebrate success but it is more important to heed the lessons of failure."
    },
    {
        author: "Charlie Munger",
        quote: "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent."
    },
    {
        author: "Anaïs Nin",
        quote: "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom."
    },
    {
        author: "Winston Churchill",
        quote: "Success is stumbling from failure to failure with no loss of enthusiasm."
    },
    {
        author: "Theodore Roosevelt",
        quote: "Keep your eyes on the stars, and your feet on the ground."
    },
    {
        author: "Vince Lombardi",
        quote: "Perfection is not attainable. But if we chase perfection we can catch excellence."
    },
    {
        author: "Walt Disney",
        quote: "Get a good idea and stay with it. Dog it, and work at it until it's done right."
    },
    {
        author: "Helen Keller",
        quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."
    },
    {
        author: "Mark Twain",
        quote: "The two most important days in your life are the day you're born and the day you find out why."
    },
    {
        author: "Pema Chodron",
        quote: "Nothing ever goes away until it teaches us what we need to know."
    },
    {
        author: "Bruce Lee",
        quote: "We can see through others only when we can see through ourselves."
    },
    {
        author: "Octavia Butler",
        quote: "First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice."
    },
    {
        author: "Robert Frost",
        quote: "The best way out is always through."
    },
    {
        author: "Jesse Owens",
        quote: "The battles that count aren't the ones for gold medals. The struggles within yourself — the invisible, inevitable battles inside all of us — that's where it's at."
    },
    {
        author: "Frederick Douglass",
        quote: "If there is no struggle, there is no progress."
    },
    {
        author: "Bill Walsh",
        quote: "Someone will declare, 'I am the leader!' and expect everyone to get in line and follow him or her to the gates of heaven or hell. My experience is that it doesn't happen that way. Others follow you based on the quality of your actions rather than the magnitude of your declarations."
    },
    {
        author: "Ruth Gordo",
        quote: "Courage is like a muscle. We strengthen it by use."
    },
    {
        author: "Paul Graham",
        quote: "Relentlessly prune bullshit, don't wait to do things that matter, and savor the time you have. That's what you do when life is short."
    },
    {
        author: "Marcus Tullius Cicero",
        quote: "More is lost by indecision than wrong decision."
    },
    {
        author: "Thomas Aquinas",
        quote: "If the highest aim of a captain were to preserve his ship, he would keep it in port forever."
    },
    {
        author: "Dita Von Teese",
        quote: "You can be the ripest, juiciest peach in the world, and there's still going to be somebody who hates peaches."
    },
    {
        author: "Cormac McCarthy",
        quote: "Keep a little fire burning; however small, however hidden."
    },
    {
        author: "Laird Hamilton",
        quote: "Make sure your worst enemy doesn't live between your own two ears."
    },
    {
        author: "Lucius Annaeus Seneca",
        quote: "It is a rough road that leads to the heights of greatness."
    },
    {
        author: "Vincent van Gogh",
        quote: "For the great doesn't happen through impulse alone, and is a succession of little things that are brought together."
    },
    {
        author: "Maria Edgeworth",
        quote: "If we take care of the moments, the years will take care of themselves."
    },
    {
        author: "Henry David Thoreau",
        quote: "As a single footstep will not make a path on the earth, so a single thought will not make a pathway in the mind. To make a deep physical path, we walk again and again. To make a deep mental path, we must think over and over the kind of thoughts we wish to dominate our lives."
    },
    {
        author: "Earl Nightingale",
        quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway."
    },
    {
        author: "George Addair",
        quote: "Everything you've ever wanted is sitting on the other side of fear."
    },
    {
        author: "Ayn Rand",
        quote: "The question isn't who is going to let me, it's who is going to stop me."
    },
    {
        author: "Thomas A. Edison",
        quote: "I have not failed. I've just found 10,000 ways that won't work."
    },
    {
        author: "Drew Houston",
        quote: "Don't worry about failure, you only have to be right once."
    },
    {
        author: "Drake",
        quote: "Never let success get to your head and never let failure get to your heart."
    },
    {
        author: "Robin Sharma",
        quote: "Ideation without execution is delusion."
    },
    {
        author: "Arlan Hamilton",
        quote: "I can't tell you how many times I've been given a no. Only to find that a better, brighter, bigger yes was right around the corner."
    },
    {
        author: "Ariana Huffington",
        quote: "We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes – understanding that failure is not the opposite of success, it's part of success."
    },
    {
        author: "Henry Ford",
        quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."
    },
    {
        author: "Wayne Dyer",
        quote: "You cannot always control what goes on outside. But you can always control what goes on inside."
    },
    {
        author: "Aristotle",
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
    },
    {
        author: "Arthur Ashe",
        quote: "Start where you are. Use what you have. Do what you can."
    },
    {
        author: "Cindy Gallop",
        quote: "Fear of what other people will think is the single most paralyzing dynamic in business and in life. The best moment of my life was the day I realized that I no longer give a damn what anybody thinks. That's enormously liberating and freeing, and it's the only way to live your life and do your business."
    },
    {
        author: "Arthur C. Clarke",
        quote: "The only way of discovering the limits of the possible is to venture a little way past them into the impossible."
    },
    {
        author: "Unknown",
        quote: "Worry is a misuse of imagination."
    },
    {
        author: "Maya Angelou",
        quote: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently."
    },
    {
        author: "Edna Mode",
        quote: "I never look back, darling. It distracts from the now."
    },
    {
        author: "Unknown",
        quote: "A year from now you will wish you had started today."
    },
    {
        author: "Steve Furtick",
        quote: "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else's highlight reel."
    },
    {
        author: "Jay-Z",
        quote: "I will not lose, for even in defeat, there's a valuable lesson learned, so it evens up for me."
    },
    {
        author: "Arianna Huffington",
        quote: "I do not try to dance better than anyone else. I only try to dance better than myself."
    },
    {
        author: "Erica Jong",
        quote: "If you don't risk anything, you risk even more."
    },
    {
        author: "Steve Jobs",
        quote: "Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you'll never be the same again."
    },
    {
        author: "Albert Einstein",
        quote: "Life is like riding a bicycle. To keep your balance you must keep moving."
    },
    {
        author: "Ralph Waldo Emerson",
        quote: "What you do speaks so loudly that I cannot hear what you say."
    },
    {
        author: "Mark Twain",
        quote: "I have never let my schooling interfere with my education."
    },
    {
        author: "Jim Rohn",
        quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse."
    },
    {
        author: "Abraham Lincoln",
        quote: "Be sure you put your feet in the right place, then stand firm."
    },
    {
        author: "Stephen Covey",
        quote: "Live out of your imagination, not your history."
    },
    {
        author: "Unknown",
        quote: "Do not wait for the perfect time and place to enter, for you are already onstage."
    },
    {
        author: "Epicurus",
        quote: "The greater the difficulty, the more the glory in surmounting it."
    },
    {
        author: "Mary Anne Radmacher",
        quote: "Courage doesn't always roar. Sometimes courage is a quiet voice at the end of the day saying, 'I will try again tomorrow'."
    },
    {
        author: "Clayton M. Christensen",
        quote: "If the decisions you make about where you invest your blood, sweat, and tears are not consistent with the person you aspire to be, you'll never become that person."
    }
];
