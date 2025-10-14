export interface ServiceContent {
  title: string;
  description: string;
  image: string;
        imageAlt: string;
    sections: { title: string; description: string; points: string[] }[];
    faqs?: { question: string; answer: string }[];
}

export const services: Record<string, ServiceContent> = {
    "Editing": {
        title: "Professional Book Editing Services",
        description: "At Western Publish, our elite team of editors has helped create over 50 bestsellers through our signature three-stage editing process. We combine developmental mastery, meticulous line editing, and professional proofreading to transform your manuscript into a polished masterpiece that stands out in today's competitive market.",
        image: "https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Editor reviewing manuscript pages",
        sections: [
            {
                title: "Developmental Editing",
                description: "Strengthen your story's structure, plot, and character development.",
                points: ["Plot and pacing analysis", "Character arc development", "Structural feedback", "Genre convention alignment"]
            },
            {
                title: "Copy Editing",
                description: "Correct grammar, spelling, punctuation, and syntax errors.",
                points: ["Grammar and punctuation", "Spelling and syntax", "Consistency checks", "Style guide adherence"]
            },
            {
                title: "Proofreading",
                description: "The final check to catch any remaining errors before publication.",
                points: ["Typographical errors", "Formatting issues", "Final quality assurance", "Pre-publication check"]
            }
        ]
    },
    "Fiction Writing": {
        title: "Expert Fiction Ghostwriting",
        description: "Bring your story to life with our skilled fiction ghostwriters. We specialize in a wide range of genres, from thrilling mysteries to epic fantasies, ensuring your vision is captured on the page.",
        image: "https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Author writing fiction manuscript",
        sections: [
            {
                title: "Genre Specialization",
                description: "Writers experienced in romance, sci-fi, fantasy, thriller, and more.",
                points: ["Expertise in your chosen genre", "Understanding of reader expectations", "Tropes and conventions mastery", "Tailored narrative voice"]
            },
            {
                title: "Collaborative Process",
                description: "Work closely with your writer to develop the plot, characters, and world.",
                points: ["Regular check-ins and updates", "Chapter-by-chapter feedback", "You control the creative direction", "A true partnership"]
            },
            {
                title: "Your Name, Your Story",
                description: "You retain all rights and royalties to the finished manuscript.",
                points: ["100% ownership of copyright", "All royalties are yours", "Full confidentiality", "Your name on the cover"]
            }
        ]
    },
    "Marketing": {
        title: "Strategic Book Marketing",
        description: "Launch your book with a powerful marketing strategy. We create and execute targeted campaigns to build buzz, drive sales, and connect you with your ideal readers.",
        image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Marketing team planning a book campaign",
        sections: [
            {
                title: "Custom Marketing Plan",
                description: "A tailored strategy based on your book, genre, and author goals.",
                points: ["Target audience analysis", "Competitive landscape review", "Launch and post-launch strategy", "Budget and timeline planning"]
            },
            {
                title: "Multi-Channel Promotion",
                description: "Leveraging social media, email, advertising, and PR for maximum reach.",
                points: ["Social media campaign management", "Email marketing funnels", "Paid advertising (Amazon, FB, etc.)", "Public relations and media outreach"]
            },
            {
                title: "Author Platform Growth",
                description: "Build a lasting connection with your audience and grow your author brand.",
                points: ["Author website development", "Social media profile optimization", "Content strategy", "Community building"]
            }
        ]
    },
    "Non Fiction Writing": {
        title: "Compelling Non-Fiction Ghostwriting",
        description: "Share your expertise and stories with the world. Our non-fiction ghostwriters help you craft engaging, well-researched books that establish you as a thought leader in your field.",
        image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Researcher and writer working on non-fiction manuscript",
        sections: [
            {
                title: "Subject Matter Expertise",
                description: "Writers with backgrounds in business, self-help, memoir, history, and more.",
                points: ["Writers matched to your topic", "Deep understanding of the subject", "Ability to simplify complex ideas", "Credibility and authority"]
            },
            {
                title: "In-Depth Research",
                description: "We ensure your book is accurate, credible, and informative.",
                points: ["Fact-checking and verification", "Interviews and primary research", "Academic and industry sources", "Proper citations and references"]
            },
            {
                title: "Capture Your Voice",
                description: "Your unique perspective and voice will shine through in the final manuscript.",
                points: ["Interviews to understand your style", "Tone and style matching", "Authentic representation of your ideas", "Collaborative review process"]
            }
        ]
    },
    "Publishing": {
        title: "Comprehensive Publishing Solutions",
        description: "Navigate the path to publication with ease. We offer end-to-end publishing services, from formatting and cover design to distribution and royalty management.",
        image: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Stack of professionally published books",
        sections: [
            {
                title: "Professional Formatting",
                description: "Ebook and print-ready files that meet industry standards.",
                points: ["Ebook (EPUB, MOBI) formatting", "Paperback and hardcover layout", "Custom interior design", "Chapter headings and typography"]
            },
            {
                title: "Stunning Cover Design",
                description: "A captivating cover that grabs attention and sells your book.",
                points: ["Custom cover concepts", "Genre-specific design", "Professional typography", "3D mockups for marketing"]
            },
            {
                title: "Global Distribution",
                description: "Make your book available on Amazon, Barnes & Noble, and other major retailers.",
                points: ["Amazon KDP, IngramSpark setup", "Apple Books, Google Play, Kobo", "Expanded distribution channels", "ISBN and barcode assignment"]
            }
        ]
    },
    "Story Book Writing": {
        title: "Enchanting Story Book Writing",
        description: "Create magical worlds and unforgettable characters with our story book writing services. We help you craft tales that will captivate young readers and their parents.",
        image: "https://images.pexels.com/photos/3845733/pexels-photo-3845733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Children reading an illustrated storybook",
        sections: [
            {
                title: "Age-Appropriate Content",
                description: "Stories tailored for specific age groups, from picture books to middle grade.",
                points: ["Picture books (ages 2-5)", "Early readers (ages 5-7)", "Chapter books (ages 7-10)", "Middle grade (ages 8-12)"]
            },
            {
                title: "Imaginative Storytelling",
                description: "We bring your creative ideas to life with engaging plots and charming characters.",
                points: ["Memorable character creation", "Engaging plot development", "World-building", "Positive themes and messages"]
            },
            {
                title: "Illustration-Ready",
                description: "Manuscripts crafted with illustrations in mind, ready for the next step.",
                points: ["Page turn-friendly structure", "Visual cues and descriptions", "Collaboration with illustrators", "Formatted for design layout"]
            }
        ]
    },
    "Audio Book": {
        title: "Professional Audiobook Production",
        description: "Reach a wider audience with a professionally produced audiobook. Our team handles everything from narration to mastering, delivering a high-quality audio experience for your listeners.",
        image: "https://images.pexels.com/photos/696407/pexels-photo-696407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Narrator recording in a professional studio",
        sections: [
            {
                title: "Talented Voice Actors",
                description: "Choose from a diverse pool of professional narrators to find the perfect voice for your book.",
                points: ["Male and female narrators", "Various accents and styles", "Audition samples provided", "Author-involved selection process"]
            },
            {
                title: "High-Quality Recording",
                description: "State-of-the-art recording and editing to ensure a pristine sound.",
                points: ["Professional studio recording", "Audio editing and mastering", "Noise and breath removal", "ACX quality standards"]
            },
            {
                title: "Distribution to Audible & More",
                description: "We'll get your audiobook onto all major platforms, including Audible, Apple Books, and Google Play.",
                points: ["Audible/ACX distribution", "Apple Books, Google Play, Kobo", "Library distribution (OverDrive)", "Royalty setup and management"]
            }
        ]
    },
    "Biography Writing": {
        title: "Legacy-Defining Biography Writing",
        description: "Immortalize your life story or the story of a loved one with a beautifully written biography. Our writers work with you to capture the essence of a life, creating a lasting legacy.",
        image: "https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Writer interviewing a subject for a biography",
        sections: [
            {
                title: "Sensitive Interviewing",
                description: "Our writers conduct interviews with care and respect to gather your stories.",
                points: ["Structured interview process", "Empathetic and skilled interviewers", "Transcription and analysis", "Respect for your privacy"]
            },
            {
                title: "Thorough Research",
                description: "We supplement your memories with historical context and factual verification.",
                points: ["Archival research", "Fact-checking key events", "Interviews with family/colleagues", "Timeline creation"]
            },
            {
                title: "A Compelling Narrative",
                description: "We weave together events and memories into a captivating life story.",
                points: ["Story arc development", "Thematic structure", "Engaging storytelling style", "Preserving your authentic voice"]
            }
        ]
    },
    "Book Trailer": {
        title: "Cinematic Book Trailers",
        description: "Generate excitement for your book with a stunning cinematic trailer. Our video production team creates high-impact trailers that capture your book's essence and drive pre-orders and sales.",
        image: "https://images.pexels.com/photos/7234330/pexels-photo-7234330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Film crew producing a cinematic book trailer",
        sections: [
            {
                title: "Professional Video Production",
                description: "High-quality visuals, music, and editing to create a professional trailer.",
                points: ["Licensed stock footage/music", "Custom motion graphics", "Professional voiceover", "HD quality video"]
            },
            {
                title: "Scriptwriting Included",
                description: "We'll craft a compelling script that hooks viewers and makes them want to read your book.",
                points: ["Intriguing hook", "Concise and powerful copy", "Clear call-to-action", "Aligned with your book's tone"]
            },
            {
                title: "Optimized for Social Media",
                description: "Trailers formatted for sharing on YouTube, Instagram, TikTok, and more.",
                points: ["Multiple aspect ratios (16:9, 1:1, 9:16)", "Subtitles for silent viewing", "Short, attention-grabbing versions", "File formats for all platforms"]
            }
        ]
    },
    "Children Book Writing": {
        title: "Captivating Children's Book Writing",
        description: "Spark the imagination of young readers with a beautifully written children's book. We specialize in creating stories that are not only entertaining but also educational and inspiring.",
        image: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Author and illustrator working on a children's book",
        sections: [
            {
                title: "Engaging for All Ages",
                description: "From board books for toddlers to chapter books for young readers, we cover all age ranges.",
                points: ["Board books (0-3)", "Picture books (3-8)", "Early readers (5-9)", "Chapter books (7-10)"]
            },
            {
                title: "Positive Messaging",
                description: "We can help you incorporate important themes and values into your story.",
                points: ["Themes of friendship, courage, etc.", "Educational elements", "Age-appropriate moral lessons", "Inspiring and uplifting content"]
            },
            {
                title: "Collaboration with Illustrators",
                description: "We can work with you and your illustrator to ensure the text and images are perfectly aligned.",
                points: ["Illustration notes and suggestions", "Pacing for page turns", "Manuscript formatting for artists", "Seamless text-image integration"]
            }
        ]
    },
    "Designing": {
        title: "Stunning Book Design Services",
        description: "From cover to cover, we provide exceptional design services that make your book stand out. Our designers create beautiful, professional layouts for both print and digital formats.",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Designer working on a book cover layout",
        sections: [
            {
                title: "Eye-Catching Cover Design",
                description: "A custom cover that reflects your book's genre and attracts your target audience.",
                points: ["Multiple initial concepts", "Genre-specific typography", "Professional stock imagery or custom art", "Ebook and print-ready files"]
            },
            {
                title: "Professional Interior Layout",
                description: "Clean, readable, and aesthetically pleasing interior formatting for a great reader experience.",
                points: ["Custom chapter headings", "Readable font selection", "Consistent and clean layout", "Print and ebook formats"]
            },
            {
                title: "Marketing Material Design",
                description: "We can also design bookmarks, social media graphics, and other promotional materials.",
                points: ["Social media banners", "Bookmarks and postcards", "3D book mockups", "Author branding materials"]
            }
        ]
    },
    "Google Ads": {
        title: "Targeted Google Ad Campaigns for Books | Western Publishing Company",
        description: "Western Publish runs results-driven Google ad campaigns for books to get your title in front of high-intent readers. Our Google Ads for books strategy combines keyword research, persuasive ad copy, optimized landing pages, and continual campaign optimization so authors and publishers see measurable sales and visibility growth.",
        image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Marketing analyst reviewing Google Ads campaign performance for a book",
        sections: [
            {
                title: "Keyword Research",
                description: "We identify the most effective keywords to target potential readers.",
                points: ["Competitor keyword analysis", "Long-tail keyword targeting", "Negative keyword implementation", "Genre and author-specific keywords"]
            },
            {
                title: "Compelling Ad Copy",
                description: "We write ads that grab attention and entice users to click.",
                points: ["A/B testing ad copy", "Benefit-driven headlines", "Strong calls-to-action", "Ad extensions for more info"]
            },
            {
                title: "Campaign Optimization",
                description: "We continuously monitor and adjust your campaigns for the best possible return on investment.",
                points: ["Bid management", "Conversion tracking", "Performance reporting", "ROI analysis"]
            }
        ]
    ,
    faqs: [
            {
                question: "What are Google ad campaigns for books?",
                answer: "Google ad campaigns for books are paid search and display campaigns designed to put your book in front of readers actively searching for titles, authors, and topics. At Western Publish we target purchase-ready keywords, genre-specific search intent, and high-converting placements so your book reaches the right audience."
            },
            {
                question: "How can Western Publish help with my Google Ads for books?",
                answer: "Western Publish is a western publishing company experienced in book marketing. We build end-to-end Google Ads campaigns for books—researching keywords, creating persuasive ad copy, building optimized landing pages, setting up conversion tracking, and continually optimizing for sales and ROI. You get a campaign tailored to your book and goals."
            },
            {
                question: "How do you measure success for Google ad campaigns for books?",
                answer: "We measure success using conversion tracking (sales, pre-orders, newsletter signups), cost per conversion, return on ad spend (ROAS), and engagement metrics. Reporting is transparent and tailored to author goals, with regular optimization recommendations."
            },
            {
                question: "How much do Google Ads services cost for books?",
                answer: "Costs vary by campaign scope and ad budget. We offer flexible packages and will recommend a budget aligned with your goals and expected audience size. We'll provide a clear estimate during a free consultation."
            },
            {
                question: "How quickly can I expect results from Google ad campaigns for books?",
                answer: "Paid search can drive traffic quickly, often within days, but meaningful sales optimization typically takes 2–6 weeks as we collect data, test creatives, and refine targeting. We focus on rapid learning and steady improvement to reduce cost per sale over time."
            }
        ]
    },
    "Facebook & Instagram Ads": {
        title: "Engaging Facebook & Instagram Ads",
        description: "Connect with millions of potential readers on the world's largest social media platforms. We design and manage ad campaigns that build your author brand and drive book sales.",
        image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Social media ads displayed on mobile devices",
        sections: [
            {
                title: "Audience Targeting",
                description: "We use advanced targeting to reach readers based on their interests, demographics, and reading habits.",
                points: ["Interest and behavior targeting", "Lookalike audiences", "Custom audiences from your email list", "Demographic filtering"]
            },
            {
                title: "Creative Ad Design",
                description: "Eye-catching images and videos that stop the scroll and get your book noticed.",
                points: ["Carousel and video ads", "A/B testing creatives", "Ad copy that converts", "Mobile-first design"]
            },
            {
                title: "Sales Funnel Creation",
                description: "We can build a complete sales funnel to convert ad viewers into loyal readers.",
                points: ["Landing page optimization", "Lead magnet delivery", "Email sequence integration", "Retargeting campaigns"]
            }
        ]
    },
    "TikTok Ads": {
        title: "Viral TikTok Ad Campaigns",
        description: "Tap into the power of #BookTok with a targeted TikTok ad campaign. We help you create authentic, engaging content that resonates with the TikTok community and drives viral book sales.",
        image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Short-form video content being filmed for TikTok",
        sections: [
            {
                title: "Trend-Based Content",
                description: "We create ads that feel native to the platform and leverage current trends.",
                points: ["Using trending sounds and effects", "Authentic, user-generated style content", "Short, snappy video ads", "#BookTok community alignment"]
            },
            {
                title: "Influencer Collaborations",
                description: "We can connect you with BookTok influencers to promote your book.",
                points: ["Identifying relevant influencers", "Outreach and negotiation", "Campaign management", "Tracking influencer ROI"]
            },
            {
                title: "Community Engagement",
                description: "We help you build a presence on TikTok and engage with your readers.",
                points: ["Content strategy for your profile", "Responding to comments and DMs", "Running contests and giveaways", "Duets and stitches with other creators"]
            }
        ]
    },
    "Amazon Ads": {
        title: "Dominant Amazon Ad Campaigns",
        description: "Boost your book's visibility and sales on the world's largest bookstore. Our Amazon Ads experts create and manage campaigns that put your book directly in front of eager buyers.",
        image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Amazon ad dashboard showing campaign metrics",
        sections: [
            {
                title: "Sponsored Products & Brands",
                description: "We utilize all of Amazon's ad tools to maximize your reach.",
                points: ["Sponsored Products campaigns", "Sponsored Brands campaigns", "Sponsored Display ads", "Video ads in search results"]
            },
            {
                title: "Keyword & Category Targeting",
                description: "We target readers based on what they're searching for and the genres they're browsing.",
                points: ["Automatic and manual keyword targeting", "Product and category targeting", "Competitor ASIN targeting", "Negative keyword optimization"]
            },
            {
                title: "ACOS Optimization",
                description: "We focus on maximizing your sales while maintaining a profitable Advertising Cost of Sale (ACOS).",
                points: ["Bid management and optimization", "Budget allocation strategy", "Performance analysis and reporting", "Continuous campaign adjustments"]
            }
        ]
    },
    "LinkedIn Ads": {
        title: "Professional LinkedIn Ad Campaigns",
        description: "Promote your non-fiction book, business book, or memoir to a professional audience on LinkedIn. We help you connect with industry leaders and decision-makers.",
        image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "LinkedIn ad creative shown on a desktop screen",
        sections: [
            {
                title: "Target by Industry & Job Title",
                description: "Reach the exact professional audience you want to connect with.",
                points: ["Targeting by company, industry, job title", "Seniority and company size filtering", "Group and skill targeting", "Account-based marketing"]
            },
            {
                title: "Lead Generation",
                description: "Use your book to generate leads for your business or consulting services.",
                points: ["Lead gen form ads", "Sponsored content and messaging", "Website conversion campaigns", "Integration with your CRM"]
            },
            {
                title: "Thought Leadership",
                description: "Position yourself as an expert in your field with a targeted LinkedIn campaign.",
                points: ["Promoting articles and blog posts", "Building your professional network", "Driving traffic to your LinkedIn profile", "Showcasing your expertise"]
            }
        ]
    },
    "Content Marketing": {
        title: "Strategic Content Marketing for Authors",
        description: "Build your author platform and attract readers with valuable, engaging content. We develop and execute a content marketing strategy that establishes your expertise and grows your audience.",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Content team planning blog and newsletter content",
        sections: [
            {
                title: "Blog & Article Writing",
                description: "High-quality articles that provide value to your target readers and improve your SEO.",
                points: ["SEO keyword research", "Long-form blog posts", "Guest posting outreach", "Content promotion"]
            },
            {
                title: "Lead Magnets & Email Courses",
                description: "Create valuable resources to grow your email list and nurture potential readers.",
                points: ["Ebooks and whitepapers", "Checklists and templates", "Free email courses", "Webinar content"]
            },
            {
                title: "Content Calendar & Strategy",
                description: "A long-term plan to consistently publish content that supports your author goals.",
                points: ["Content theme planning", "Publishing schedule", "Content distribution plan", "Performance tracking and analysis"]
            }
        ]
    },
    "Social Media Presence": {
        title: "Dynamic Social Media Management",
        description: "Build a vibrant and engaged community around your books with our social media management services. We create and share content that reflects your author brand and connects with your readers.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Scheduler and content calendar for social media posts",
        sections: [
            {
                title: "Platform-Specific Strategy",
                description: "A tailored approach for each platform, from Instagram and Facebook to Twitter and TikTok.",
                points: ["Content pillars and themes", "Optimal posting frequency", "Voice and tone guidelines", "Profile optimization"]
            },
            {
                title: "Content Creation & Scheduling",
                description: "We handle the day-to-day work of creating and posting engaging content.",
                points: ["Custom graphics and videos", "Compelling captions and hashtags", "Content calendar management", "Using scheduling tools"]
            },
            {
                title: "Community Engagement",
                description: "We interact with your followers, respond to comments, and build a loyal fanbase.",
                points: ["Responding to comments and DMs", "Engaging with user-generated content", "Running polls and Q&As", "Building relationships with fans"]
            }
        ]
    },
    "Email Marketing": {
        title: "Effective Email Marketing for Authors",
        description: "Build a direct line to your readers with a powerful email marketing strategy. We help you grow your email list and send newsletters that your subscribers will love to open.",
        image: "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Email marketing dashboard showing open rates",
        sections: [
            {
                title: "Email List Growth",
                description: "Strategies to attract new subscribers and grow your most valuable marketing asset.",
                points: ["Landing pages and sign-up forms", "Lead magnets and content upgrades", "Contests and giveaways", "Cross-promotion with other authors"]
            },
            {
                title: "Newsletter Content & Design",
                description: "Engaging newsletters that provide value and promote your books without being overly salesy.",
                points: ["Custom email templates", "Content planning and writing", "A/B testing subject lines", "Segmentation and personalization"]
            },
            {
                title: "Automation & Funnels",
                description: "Set up automated email sequences to welcome new subscribers and nurture them into fans.",
                points: ["Welcome email series", "Nurture sequences", "Book launch funnels", "Abandoned cart reminders"]
            }
        ]
    },
    "Podcast / YouTube Appearances": {
        title: "Podcast & YouTube Tour Booking",
        description: "Get your message in front of thousands of potential readers by appearing on popular podcasts and YouTube channels. We research and pitch relevant shows to secure guest appearances for you.",
        image: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Podcaster speaking into a microphone",
        sections: [
            {
                title: "Targeted Outreach",
                description: "We find shows that are a perfect fit for your book and target audience.",
                points: ["Podcast and channel research", "Audience demographic analysis", "Show format and topic alignment", "Building a target list"]
            },
            {
                title: "Professional Pitching",
                description: "We craft compelling pitches that get the attention of hosts and producers.",
                points: ["Personalized pitch emails", "Crafting your unique story angle", "Media kit creation", "Follow-up strategy"]
            },
            {
                title: "Interview Preparation",
                description: "We help you prepare to deliver a confident and engaging interview.",
                points: ["Developing key talking points", "Mock interviews and feedback", "Technical setup check", "Post-interview promotion plan"]
            }
        ]
    },
    "Goodreads & Book Reviews": {
        title: "Goodreads & Book Review Strategy",
        description: "Maximize your book's visibility and credibility with a strategic approach to Goodreads and other review platforms. We help you build a strong presence and encourage reader reviews.",
        image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Reader leaving a book review online",
        sections: [
            {
                title: "Goodreads Author Program Setup",
                description: "We'll set up and optimize your Goodreads author profile.",
                points: ["Claiming your author profile", "Adding your books and bio", "Integrating your blog", "Using Q&A and event features"]
            },
            {
                title: "Reviewer Outreach",
                description: "We can help you run giveaways and reach out to book bloggers and reviewers.",
                points: ["Building a reviewer list", "Crafting a pitch for reviewers", "Managing review copy distribution", "Goodreads giveaway campaigns"]
            },
            {
                title: "Review Generation Campaigns",
                description: "Strategies to encourage your readers to leave reviews on Amazon and Goodreads.",
                points: ["Email campaigns to your list", "Social media calls-to-action", "Including a note in your book", "Making it easy for readers to review"]
            }
        ]
    },
    "Press Releases": {
        title: "Professional Press Release Services",
        description: "Announce your book launch or other author news to the media with a professionally written and distributed press release. We help you get the word out to journalists, bloggers, and media outlets.",
        image: "https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Press release being distributed to media contacts",
        sections: [
            {
                title: "Compelling Press Release Writing",
                description: "We write press releases that are newsworthy and grab the attention of the media.",
                points: ["Newsworthy angle development", "Professional AP style writing", "Including quotes and media assets", "Clear and concise messaging"]
            },
            {
                title: "Targeted Distribution",
                description: "We distribute your press release to a targeted list of media contacts in your genre.",
                points: ["Distribution to news wires", "Direct outreach to journalists", "Targeting book bloggers and reviewers", "Local and national media lists"]
            },
            {
                title: "Media Monitoring",
                description: "We'll track media pickups and provide you with a report of where your news has been featured.",
                points: ["Tracking online mentions", "Clipping service for print media", "Reporting on media coverage", "Leveraging media mentions"]
            }
        ]
    },
    "Virtual Book Launch": {
        title: "Unforgettable Virtual Book Launch Events",
        description: "Celebrate your book launch with a professionally produced virtual event. We handle all the technical details and promotion to ensure a successful and engaging launch party.",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Virtual book launch event with livestream",
        sections: [
            {
                title: "Event Planning & Production",
                description: "From choosing the right platform to planning the agenda, we've got you covered.",
                points: ["Platform selection (Zoom, YouTube Live, etc.)", "Event timeline and agenda", "Technical setup and support", "Guest speaker coordination"]
            },
            {
                title: "Promotion & Registration",
                description: "We'll promote your event to drive attendance and manage the registration process.",
                points: ["Creating a registration page", "Email and social media promotion", "Paid ads for the event", "Reminder emails to registrants"]
            },
            {
                title: "Engaging & Interactive",
                description: "We can incorporate Q&A sessions, giveaways, and other interactive elements to engage your audience.",
                points: ["Live Q&A with the author", "Digital swag bags and giveaways", "Interactive polls and chats", "Behind-the-scenes content"]
            }
        ]
    },
    "Collaborations": {
        title: "Strategic Author & Brand Collaborations",
        description: "Amplify your reach and connect with new audiences through strategic collaborations. We help you identify and partner with other authors, brands, and influencers for cross-promotional opportunities.",
        image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Authors collaborating on a cross-promotion campaign",
        sections: [
            {
                title: "Partnership Identification",
                description: "We find the right partners whose audience aligns with your target readership.",
                points: ["Identifying complementary authors", "Finding brands with shared values", "Researching influencer audiences", "Vetting potential partners"]
            },
            {
                title: "Outreach & Negotiation",
                description: "We handle the process of pitching and negotiating collaboration terms.",
                points: ["Crafting a compelling proposal", "Defining clear deliverables", "Negotiating terms and compensation", "Drafting a collaboration agreement"]
            },
            {
                title: "Campaign Management",
                description: "We'll help you manage the collaboration from start to finish to ensure a successful outcome.",
                points: ["Coordinating content creation", "Managing timelines and deadlines", "Tracking performance and results", "Nurturing the partnership for future collabs"]
            }
        ]
    },
    "Book Clubs": {
        title: "Book Club Outreach & Engagement",
        description: "Get your book into the hands of passionate readers by connecting with book clubs. We help you find and pitch book clubs, and can even help you prepare for author Q&A sessions.",
        image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Book club members discussing a book",
        sections: [
            {
                title: "Book Club Database",
                description: "We have a database of book clubs that we can pitch your book to.",
                points: ["Access to our curated list", "Targeting clubs by genre and location", "Pitching to online and in-person clubs", "Regularly updated database"]
            },
            {
                title: "Discussion Guide Creation",
                description: "We can create a discussion guide to accompany your book and facilitate conversation.",
                points: ["Thought-provoking questions", "Character and theme analysis", "Author interview section", "Professionally designed PDF"]
            },
            {
                title: "Author Appearances",
                description: "We can help you schedule virtual or in-person appearances with book clubs.",
                points: ["Coordinating schedules", "Providing technical support for virtual visits", "Preparing you for the Q&A", "Gathering feedback from clubs"]
            }
        ]
    },
    "Email / Cold Outreach": {
        title: "Targeted Email & Cold Outreach Campaigns",
        description: "Reach potential reviewers, media contacts, and promotional partners with a targeted email outreach campaign. We craft personalized emails that get responses.",
        image: "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: "Person composing outreach emails on a laptop",
        sections: [
            {
                title: "List Building",
                description: "We build a targeted list of contacts to reach out to based on your goals.",
                points: ["Identifying key media contacts", "Finding relevant book bloggers", "Researching potential promotional partners", "Segmenting lists for personalization"]
            },
            {
                title: "Personalized Email Copy",
                description: "We write emails that are personalized and don't feel like spam.",
                points: ["Crafting compelling subject lines", "Personalizing the email body", "Clear and concise call-to-action", "A/B testing email copy"]
            },
            {
                title: "Follow-Up & Tracking",
                description: "We manage the follow-up process and track responses to your outreach campaign.",
                points: ["Automated follow-up sequences", "Tracking open and response rates", "Managing replies and scheduling calls", "Reporting on campaign performance"]
            }
        ]
    }
};
