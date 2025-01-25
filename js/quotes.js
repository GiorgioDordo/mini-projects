const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wild"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        quote: "It is not the years in your life that count, it’s the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "Don’t count the days, make the days count.",
        author: "Muhammad Ali"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen R. Covey"
    },
    {
        quote: "Life is what happens when you’re busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "Time is what we want most but what we use worst.",
        author: "William Penn"
    },
    {
        quote: "Not how long, but how well you have lived is the main thing.",
        author: "Seneca"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain"
    },
    {
        quote: "You have as many hours in a day as Beyonce.",
        author: "Unknown"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates"
    },
    {
        quote: "It is not length of life, but depth of life.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain.",
        author: "Vivian Greene"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        quote: "Don’t wait. The time will never be just right.",
        author: "Napoleon Hill"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Whether you think you can or you think you can’t, you’re right.",
        author: "Henry Ford"
    },
    {
        quote: "If you’re going through hell, keep going.",
        author: "Winston Churchill"
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "You can't use up creativity. The more you use, the more you have.",
        author: "Maya Angelou"
    },
    {
        quote: "Do not let making a living prevent you from making a life.",
        author: "John Wooden"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "Your time is limited, don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quote: "Don’t judge each day by the harvest you reap, but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer"
    },
    {
        quote: "Don't wait for the perfect moment. Take the moment and make it perfect.",
        author: "Zoey Sayward"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius"
    },
    {
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "Bo Bennett"
    },
    {
        quote: "Don’t let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        quote: "It’s not whether you get knocked down, it’s whether you get up.",
        author: "Vince Lombardi"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "Your life does not get better by chance, it gets better by change.",
        author: "Jim Rohn"
    }
];

export { quotes };