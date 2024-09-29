function validateForm(event) {
    var name = document.getElementById("name").value;
    var code = document.getElementById("code").value;
    if (name === "lesego" && code === "080806") {
        return true;
    } else {
        alert("Invalid name or code");
        event.preventDefault();
        return false;
    }
}

(function(d, s, id) { var js, pjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//www.tickcounter.com/static/js/loader.js"; pjs.parentNode.insertBefore(js, pjs); }(document, "script", "tickcounter-sdk"));

function updateTimer() {
    const startDate = new Date("March 21, 2024 16:00:00").getTime();
    const now = new Date().getTime();
    const timeDifference = now - startDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    document.getElementById("months").innerText = months;
    document.getElementById("weeks").innerText = weeks % 4; // Remaining weeks within a month
    document.getElementById("days").innerText = days % 7;   // Remaining days within a week
    document.getElementById("hours").innerText = hours % 24;
    document.getElementById("minutes").innerText = minutes % 60;
    document.getElementById("seconds").innerText = seconds % 60;
  }

  setInterval(updateTimer, 1000);
 
  // Array of Bible verses (for illustration purposes)
  let bibleVerses = [
"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
"The Lord is my shepherd; I shall not want. - Psalm 23:1",
"Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
"I can do all things through him who strengthens me. - Philippians 4:13",
"The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you. - Numbers 6:24-25",
"And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
"Blessed are the pure in heart, for they shall see God. - Matthew 5:8",
"Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you. - Deuteronomy 31:6",
"Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. - 1 Thessalonians 5:16-18",
"But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. - Galatians 5:22-23",
"He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God? - Micah 6:8",
"The name of the Lord is a strong tower; the righteous man runs into it and is safe. - Proverbs 18:10",
"Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go. - Joshua 1:9",
"In all your ways acknowledge him, and he will make straight your paths. - Proverbs 3:6",
"May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. - Romans 15:13",
"Let all that you do be done in love. - 1 Corinthians 16:14",
"But seek first the kingdom of God and his righteousness, and all these things will be added to you. - Matthew 6:33",
"Commit your work to the Lord, and your plans will be established. - Proverbs 16:3",
"Come to me, all who labor and are heavy laden, and I will give you rest. - Matthew 11:28",
"Delight yourself in the Lord, and he will give you the desires of your heart. - Psalm 37:4",
"Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things. - Philippians 4:8",
"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
"And we have something more sure, the prophetic word, to which you will do well to pay attention as to a lamp shining in a dark place, until the day dawns and the morning star rises in your hearts. - 2 Peter 1:19",
"The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance. - 2 Peter 3:9",
"And let us not grow weary of doing good, for in due season we will reap, if we do not give up. - Galatians 6:9",
"For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart. - Hebrews 4:12",
"But the Lord is faithful. He will establish you and guard you against the evil one. - 2 Thessalonians 3:3",
"Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort. - 2 Corinthians 1:3",
"Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change. - James 1:17",
"Even youths shall faint and be weary, and young men shall fall exhausted; but they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint. - Isaiah 40:30-31",
"For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord. - Romans 8:38-39",
"For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord. - Romans 6:23",
"Great is our Lord, and abundant in power; his understanding is beyond measure. - Psalm 147:5",
"He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away. - Revelation 21:4",
"I can do all things through him who strengthens me. - Philippians 4:13",
"I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me. - Galatians 2:20",
"I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth. - Psalm 121:1-2",
"If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness. - 1 John 1:9",
"If we say we have no sin, we deceive ourselves, and the truth is not in us. - 1 John 1:8",
"Know therefore that the Lord your God is God, the faithful God who keeps covenant and steadfast love with those who love him and keep his commandments, to a thousand generations. - Deuteronomy 7:9",
"May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. - Romans 15:13",
"Now faith is the assurance of things hoped for, the conviction of things not seen. - Hebrews 11:1",
"Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. - 1 Thessalonians 5:16-18",
"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. - Isaiah 41:10",
"The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you. - Numbers 6:24-25",
"The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid? - Psalm 27:1",
"The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance. - 2 Peter 3:9",
"The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness. - Lamentations 3:22-23",
"Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us. - Hebrews 12:1",
"Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble. - Matthew 6:34",
"Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come. - 2 Corinthians 5:17",
"To you it was shown, that you might know that the Lord is God; there is no other besides him. - Deuteronomy 4:35",
"We know that we are from God, and the whole world lies in the power of the evil one. - 1 John 5:19",
"We love because he first loved us. - 1 John 4:19",
"Your word is a lamp to my feet and a light to my path. - Psalm 119:105",
"But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. - Galatians 5:22-23",
"But the Lord is faithful. He will establish you and guard you against the evil one. - 2 Thessalonians 3:3",
"Come to me, all who labor and are heavy laden, and I will give you rest. - Matthew 11:28",
"Delight yourself in the Lord, and he will give you the desires of your heart. - Psalm 37:4",
"Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect. - Romans 12:2",
"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. - Philippians 4:6",
"Do not be deceived: God is not mocked, for whatever one sows, that will he also reap. - Galatians 6:7",
"Do not be overcome by evil, but overcome evil with good. - Romans 12:21",
"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. - Philippians 4:6",
"Do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble. - Matthew 6:34",
"Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect. - Romans 12:2",
"Do not be overcome by evil, but overcome evil with good. - Romans 12:21",
"Do not be deceived: God is not mocked, for whatever one sows, that will he also reap. - Galatians 6:7",
"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. - Philippians 4:6",


      // Add more Bible verses here...
  ];

  // Function to get today's date in YYYY-MM-DD format
  function getFormattedDate() {
      const now = new Date();
      const year = now.getFullYear();
      let month = (now.getMonth() + 1).toString().padStart(2, '0');
      let day = now.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
  }

  // Function to calculate the index of today's message based on the date
  function getIndexForToday() {
      const startDate = new Date('2024-07-07'); // Start date (adjust as needed)
      const currentDate = new Date(getFormattedDate());
      const diffTime = Math.abs(currentDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays % bibleVerses.length; // Adjusting to 0-indexed array
  }

  // Function to display today's devotion message
  function displayDevotionMessage() {
      const index = getIndexForToday();
      const devotionMessage = bibleVerses[index];
      document.getElementById('devotionMessage').textContent = devotionMessage;
  }

  // Initial call to display today's devotion message
  displayDevotionMessage();

  // Update the devotion message every 24 hours (86400000 ms = 24 hours)
  setInterval(displayDevotionMessage, 86400000); // 24 hours in milliseconds

            document.getElementById('menu-icon').addEventListener('click', function () {
                const navLinks = document.getElementById('nav-links');
                navLinks.classList.toggle('show');
            });
            function showPricing(option) {
                // Hide all sections first
                document.getElementById('personal-section').classList.remove('active');
                document.getElementById('business-section').classList.remove('active');
                document.getElementById('anxious-section').classList.remove('active');
                document.getElementById('burnout-section').classList.remove('active');
                
                // Show the selected section
                if (option === 'personal') {
                    document.getElementById('personal-section').classList.add('active');
                } else if (option === 'business') {
                    document.getElementById('business-section').classList.add('active');
                } else if (option === 'anxious') {
                    document.getElementById('anxious-section').classList.add('active');
                } else if (option === 'burnout') {
                    document.getElementById('burnout-section').classList.add('active');
                }
            }
        
            // Initialize the default active section
            showPricing('personal');

            function openPopup() {
                document.getElementById('popup').style.display = 'block';
                document.addEventListener('DOMContentLoaded', () => {
                    // Initial greeting message
                    appendMessage('Hi Lesego! How are you doing today? How has your day been?', 'bot');
                });
            }
        
            function closePopup() {
                document.getElementById('popup').style.display = 'none';
            }
        
            function appendMessage(message, type) {
                const chatBox = document.getElementById('chat-box');
                const messageElement = document.createElement('div');
                messageElement.className = `message ${type}`;
                messageElement.innerHTML = message;
                chatBox.appendChild(messageElement);
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        
            async function sendMessage() {
                const userInput = document.getElementById('user-input').value.trim().toLowerCase();
                if (!userInput) return;
        
                appendMessage(userInput, 'user');
        
                // Here you can add your logic to handle user input and generate bot responses
                // For simplicity, let's just echo the user input back
                appendMessage("You said: " + userInput, 'bot');
        
                document.getElementById('user-input').value = '';
            }
            
            document.addEventListener('DOMContentLoaded', () => {
                // Initial greeting message
                appendMessage('Hi Lesego! How are you doing today? How has your day been?', 'bot');
                document.getElementById('options').style.display = 'flex';
            });
        
            async function sendMessage() {
                const userInput = document.getElementById('user-input').value.trim().toLowerCase();
                if (!userInput) return;
        
                appendMessage(userInput, 'user');
        
                // Extended list of keywords and responses
                if (userInput.includes('period pains') || userInput.includes('periodpains')) {
                    appendMessage(getContent('period_pains'), 'bot');
                
                } else if (userInput.includes('sad')) {
                    appendMessage(getContent('sad'), 'bot');
                    
                } else if (userInput.includes('anxious')) {
                    appendMessage(getContent('anxious'), 'bot');
                    
                } else if (userInput.includes('burnout') || userInput.includes('burnout')) {
                    appendMessage(getContent('burnout'), 'bot');
                    
                } else if (userInput.includes('bad')) {
                    appendMessage(getContent('bad'), 'bot');    
                    
                } else if (userInput.includes('thanks')) {
                    appendMessage(getContent('thanks'), 'bot'); 
                } else if (userInput.includes('thank you')) {
                    appendMessage(getContent('thanks'), 'bot');  
                } else if (userInput.includes('danko')) {
                    appendMessage(getContent('thanks'), 'bot');  
                } else if (userInput.includes('good')) {
                    appendMessage(getContent('good'), 'bot');  
                } else if (userInput.includes('excelent')) {
                    appendMessage(getContent('good'), 'bot');  
                } else if (userInput.includes('boring')) {
                    appendMessage(getContent('bad'), 'bot'); 
                } else if (userInput.includes('challenging')) {
                    appendMessage(getContent('bad'), 'bot'); 
                } else if (userInput.includes('what is the weather')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('weather')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('what is the weather like today')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('what is todays weather')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('how can i deal with stress from school and exams')) {
                    appendMessage(getContent('burnout'), 'bot'); 
                } else if (userInput.includes('what are some good self-care tips for maintaining mental health')) {
                    appendMessage(getContent('sad'), 'bot'); 
                } else if (userInput.includes('stressed')) {
                    appendMessage(getContent('burnout'), 'bot'); 
                } else if (userInput.includes('i am sad')) {
                    appendMessage(getContent('sad'), 'bot'); 
                } else if (userInput.includes('does lethabo love me')) {
                    appendMessage(getContent('lethabo'), 'bot'); 
                } else if (userInput.includes('love')) {
                    appendMessage(getContent('lethabo'), 'bot'); 
                } else if (userInput.includes('what is todays weather')) {
                    appendMessage(getContent('weather'), 'bot'); 
                } else if (userInput.includes('what is todays weather')) {
                    appendMessage(getContent('weather'), 'bot'); 
                    
                 
                 
                 
                    
                } else if (userInput.includes('bored')) {
                    appendMessage(getContent('bored'), 'bot');
                } else {
                    const response = await getChatbotResponse(userInput);
                    appendMessage(response, 'bot');
                }
        
                document.getElementById('user-input').value = '';
            }
        
            function sendOption(option) {
                appendMessage(getContent(option), 'bot');
                document.getElementById('user-input').value = '';
            }
        
            function appendMessage(message, type) {
                const chatBox = document.getElementById('chat-box');
                const messageElement = document.createElement('div');
                messageElement.className = `message ${type}`;
                messageElement.innerHTML = message;
                chatBox.appendChild(messageElement);
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        
            function getContent(option) {
                let content = '';
        
                switch (option) {
                    case 'period_pains':
                        content = `
                            <div class="chat-message">
                                <h3>Period Pains</h3>
                                <p>At-Home Remedies:</p>
                                <ul>
                                    <li>Use a heating pad or hot water bottle on the lower abdomen.</li>
                                    <li>Take a warm bath.</li>
                                    <li>Drink plenty of water to help reduce bloating.</li>
                                    <li>Eat light, nutritious meals.</li>
                                    <li>Avoid caffeine and salty foods.</li>
                                    <li>Drink chamomile, ginger, or peppermint tea, which may help soothe cramps.</li>
                                    <li>Take Painkillers as directed on the package.</li>
                                    <li>Engage in light physical activity, such as walking or gentle yoga, which can help relieve discomfort.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'sad':
                        content = `
                            <div class="chat-message">
                                <h3>Feeling Sad</h3>
                                <p>Tips to Uplift Your Mood:</p>
                                <ul>
                                    <li>Talk to a trusted friend or family member about how you’re feeling.</li>
                                    <li>Engage in activities you enjoy or that usually make you feel better.</li>
                                    <li>Practice self-care and be kind to yourself.</li>
                                    <li>Write down your feelings in a journal to express and process them.</li>
                                    <li>Listen to uplifting music or watch a favorite movie.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'anxious':
                        content = `
                            <div class="chat-message">
                                <h3>Feeling Anxious</h3>
                                <p>Ways to Manage Anxiety:</p>
                                <ul>
                                    <li>Practice deep breathing exercises to calm your nervous system.</li>
                                    <li>Engage in physical activity to help release tension.</li>
                                    <li>Try mindfulness or relaxation techniques to ground yourself.</li>
                                    <li>Stay connected with supportive friends or family members.</li>
                                    <li>Identify and challenge any negative thoughts or beliefs.</li>
                                    <li>Consider speaking to a counselor or therapist for professional support.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'burnout':
                        content = `
                            <div class="chat-message">
                                <h3>Dealing with Burnout</h3>
                                <p>Ways to Recover from Burnout:</p>
                                <ul>
                                    <li>Take regular breaks to rest and recharge.</li>
                                    <li>Establish boundaries to separate work from personal life.</li>
                                    <li>Practice self-care and prioritize your well-being.</li>
                                    <li>Seek support from colleagues, friends, or a counselor.</li>
                                    <li>Reflect on your workload and consider delegating tasks if possible.</li>
                                    <li>Set realistic goals and celebrate small achievements.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'bored':
                        content = `
                            <div class="chat-message">
                                <h3>Feeling Bored</h3>
                                <p>Things to Do:</p>
                                <ul>
                                    <li>Try a new hobby or craft.</li>
                                    <li>Read a book or listen to an audiobook.</li>
                                    <li>Watch a documentary or educational video on a topic of interest.</li>
                                    <li>Organize or redecorate a space in your home.</li>
                                    <li>Learn a new skill or take an online course.</li>
                                    <li>Call or video chat with a friend you haven’t spoken to in a while.</li>
                                </ul>
                            </div>`;
                        break;
                    case 'bad':
                        content = 'i am sorry that you feel that way, i think you should watch some young sheldon';
                        break;
                    case 'thanks':
                        content = 'it is my duty to make sure that you are okay!';
                        break;
                    case 'good':
                        content = 'that is great!, i am sure lethabo is treating you well!';
                        break;
                    case 'weather':
                        content = 'Expect Moderate temperatures today, with an average high temperature of 28°C and an average low of 16.1°C.';
                        break;
                    case 'lethabo':
                        content = 'Yes!, lethabo loves you so much. You are his sweetheart';
                        break;
                    default:
                        content = 'Sorry, I do not have a response for that, ask lethabo to add the task you just gave me into the database!';
                        break;
                }
        
                return content;
            }
        
            async function getChatbotResponse(userInput) {
                // Placeholder for chatbot response simulation
                return 'Sorry, I do not have a response for that, ask lethabo to add the task you just gave me into the database!';
            }

            
            let slideIndex = 1;
            showSlides(slideIndex);
        
            function changeSlide(n) {
                showSlides(slideIndex += n);
            }
        
            function currentSlide(n) {
                showSlides(slideIndex = n);
            }
        
            function showSlides(n) {
                let slides = document.getElementsByClassName("slide");
                let dots = document.getElementsByClassName("dot");
                if (n > slides.length) { slideIndex = 1 }
                if (n < 1) { slideIndex = slides.length }
                
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                }
                
                for (let j = 0; j < dots.length; j++) {
                    dots[j].className = dots[j].className.replace(" active", "");
                }
                
                slides[slideIndex - 1].style.display = "block";  
                dots[slideIndex - 1].className += " active";
            }
        
            // Optional: Auto-slide every 5 seconds
            setInterval(() => {
                showSlides(slideIndex += 1);
            }, 5000);

            // Array of Bible verses (for illustration purposes)
            let .bibleVerses = [
                "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
                "The Lord is my shepherd; I shall not want. - Psalm 23:1",
                "Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
                "I can do all things through him who strengthens me. - Philippians 4:13",
                "The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you. - Numbers 6:24-25",
                "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
                "Blessed are the pure in heart, for they shall see God. - Matthew 5:8",
                "Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you. - Deuteronomy 31:6",
                "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. - 1 Thessalonians 5:16-18",
                "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. - Galatians 5:22-23",
                "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God? - Micah 6:8",
                "The name of the Lord is a strong tower; the righteous man runs into it and is safe. - Proverbs 18:10",
                "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go. - Joshua 1:9",
                "In all your ways acknowledge him, and he will make straight your paths. - Proverbs 3:6",
                "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. - Romans 15:13",
                "Let all that you do be done in love. - 1 Corinthians 16:14",
                "But seek first the kingdom of God and his righteousness, and all these things will be added to you. - Matthew 6:33",
                "Commit your work to the Lord, and your plans will be established. - Proverbs 16:3",
                "Come to me, all who labor and are heavy laden, and I will give you rest. - Matthew 11:28",
                "Delight yourself in the Lord, and he will give you the desires of your heart. - Psalm 37:4",
                "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things. - Philippians 4:8",
                "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
                "And we have something more sure, the prophetic word, to which you will do well to pay attention as to a lamp shining in a dark place, until the day dawns and the morning star rises in your hearts. - 2 Peter 1:19",
                "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance. - 2 Peter 3:9",
                "And let us not grow weary of doing good, for in due season we will reap, if we do not give up. - Galatians 6:9",
                "For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart. - Hebrews 4:12",
                "But the Lord is faithful. He will establish you and guard you against the evil one. - 2 Thessalonians 3:3",
                "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort. - 2 Corinthians 1:3",
                "Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change. - James 1:17",
                "Even youths shall faint and be weary, and young men shall fall exhausted; but they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint. - Isaiah 40:30-31",
                "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord. - Romans 8:38-39",
                "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord. - Romans 6:23",
                "Great is our Lord, and abundant in power; his understanding is beyond measure. - Psalm 147:5",
                "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away. - Revelation 21:4",
                "I can do all things through him who strengthens me. - Philippians 4:13",
                "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me. - Galatians 2:20",
                "I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth. - Psalm 121:1-2",
                "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness. - 1 John 1:9",
                "If we say we have no sin, we deceive ourselves, and the truth is not in us. - 1 John 1:8",
                "Know therefore that the Lord your God is God, the faithful God who keeps covenant and steadfast love with those who love him and keep his commandments, to a thousand generations. - Deuteronomy 7:9",
                "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. - Romans 15:13",
                "Now faith is the assurance of things hoped for, the conviction of things not seen. - Hebrews 11:1",
                "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. - 1 Thessalonians 5:16-18",
                "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. - Isaiah 41:10",
                "The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you. - Numbers 6:24-25",
                "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid? - Psalm 27:1",
                "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance. - 2 Peter 3:9",
                "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness. - Lamentations 3:22-23",
                "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us. - Hebrews 12:1",
                "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble. - Matthew 6:34",
                "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come. - 2 Corinthians 5:17",
                "To you it was shown, that you might know that the Lord is God; there is no other besides him. - Deuteronomy 4:35",
                "We know that we are from God, and the whole world lies in the power of the evil one. - 1 John 5:19",
                "We love because he first loved us. - 1 John 4:19",
                "Your word is a lamp to my feet and a light to my path. - Psalm 119:105",
                "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. - Galatians 5:22-23",
                "But the Lord is faithful. He will establish you and guard you against the evil one. - 2 Thessalonians 3:3",
                "Come to me, all who labor and are heavy laden, and I will give you rest. - Matthew 11:28",
                "Delight yourself in the Lord, and he will give you the desires of your heart. - Psalm 37:4",
                "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect. - Romans 12:2",
                "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. - Philippians 4:6",
                "Do not be deceived: God is not mocked, for whatever one sows, that will he also reap. - Galatians 6:7",
                "Do not be overcome by evil, but overcome evil with good. - Romans 12:21",
                "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. - Philippians 4:6",
                "Do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble. - Matthew 6:34",
                "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect. - Romans 12:2",
                "Do not be overcome by evil, but overcome evil with good. - Romans 12:21",
                "Do not be deceived: God is not mocked, for whatever one sows, that will he also reap. - Galatians 6:7",
                "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. - Philippians 4:6",
                        ];
                
                        // Initialize the streak data
                        function initializeStreak() {
                            if (!localStorage.getItem('lastLogin')) {
                                localStorage.setItem('lastLogin', Date.now());
                                localStorage.setItem('streak', 0);
                            }
                        }
                
                        // Update streak based on the last login
                        function updateStreak() {
                            const lastLogin = localStorage.getItem('lastLogin');
                            const currentTime = Date.now();
                            const timeDifference = currentTime - lastLogin;
                
                            if (timeDifference <= 24 * 60 * 60 * 1000) { // Less than 24 hours
                                let streak = parseInt(localStorage.getItem('streak'), 10);
                                localStorage.setItem('streak', streak + 1);
                            } else {
                                localStorage.setItem('streak', 0); // Reset streak
                            }
                
                            localStorage.setItem('lastLogin', currentTime);
                        }
                
                        // Display the today's devotion and streak info
                        function displayDevotion() {
                            const randomIndex = Math.floor(Math.random() * bibleVerses.length);
                            document.getElementById('devotionMessage').innerText = bibleVerses[randomIndex];
                
                            const streak = localStorage.getItem('streak');
                            document.getElementById('streakInfo').innerText = `Current Streak: ${streak} day(s)`;
                        }
                
                        // Main function to run on page load
                        function main() {
                            initializeStreak();
                            updateStreak();
                            displayDevotion();
                        }
                
                        main();
                        function toggleMenu() {
                            const navLinks = document.getElementById('nav-links');
                            navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide links
                        }
                    