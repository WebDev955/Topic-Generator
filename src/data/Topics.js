const Topics = [
  {
    id: 't1',
    category: "coding",
    name: "Web Development",
    description:
      "Learn how to make your very own websites for fun or a thrilling career. Start with HTML and CSS, then move on to JavaScript. Once you’ve got the basics, try frameworks like React.",
    resources: [
      {
        type: "course",
        title: "FreeCodeCamp - Responsive Web Design",
        link: "https://www.freecodecamp.org/learn/",
        summary: "Hands-on projects to learn HTML and CSS."
      },
      {
        type: "book",
        title: "Eloquent JavaScript",
        link: "https://eloquentjavascript.net/",
        summary: "A free, well-regarded book for learning modern JavaScript."
      }
    ]
  },
  {
    id: 't2',
    category: "history",
    name: "Ancient Greece",
    description:
      "Ancient Greece is full of thrilling history and mythical stories about powerful gods. Think Socrates, Aristotle, and Plato — also the birthplace of democracy!",
    resources: [
      {
        type: "encyclopedia",
        title: "Britannica - Ancient Greece",
        link: "https://www.britannica.com/place/ancient-Greece",
        summary: "Detailed overview of Ancient Greek civilization."
      },
      {
        type: "documentary",
        title: "Engineering an Empire: Greece",
        link: "https://www.youtube.com/watch?v=gzse_FxSmqU",
        summary: "History Channel documentary on Greece's innovations."
      }
    ]
  },
  {
    id: 't3',
    category: "science",
    name: "Quantum Mechanics",
    description:
      "Explore the strange and fascinating rules of particles at the smallest scales — where probability rules and particles behave like waves.",
    resources: [
      {
        type: "video",
        title: "PBS SpaceTime - Quantum Physics",
        link: "https://www.youtube.com/watch?v=p7bzE1E5PMY",
        summary: "Accessible but rigorous explanation of quantum ideas."
      },
      {
        type: "article",
        title: "Stanford Encyclopedia of Philosophy - Quantum Mechanics",
        link: "https://plato.stanford.edu/entries/qm/",
        summary: "Philosophical and scientific introduction."
      }
    ]
  },
  {
    id: 't4',
    category: "philosophy",
    name: "Existentialism",
    description:
      "Dive into the philosophical movement that emphasizes individual freedom, choice, and meaning in a seemingly indifferent universe.",
    resources: [
      {
        type: "encyclopedia",
        title: "Internet Encyclopedia of Philosophy - Existentialism",
        link: "https://iep.utm.edu/existent/",
        summary: "Overview of existentialist thinkers and themes."
      },
      {
        type: "podcast",
        title: "Philosophize This! - Existentialism",
        link: "https://www.philosophizethis.org/",
        summary: "Accessible podcast episodes on Sartre, Kierkegaard, and more."
      }
    ]
  },
  {
    id: 't5',
    category: "art",
    name: "Impressionism",
    description:
      "Learn about the art movement that focused on light, movement, and capturing moments — featuring artists like Monet and Degas.",
    resources: [
      {
        type: "museum",
        title: "The Met - Impressionism",
        link: "https://www.metmuseum.org/toah/hd/imml/hd_imml.htm",
        summary: "Curated overview of Impressionist works."
      },
      {
        type: "video",
        title: "Khan Academy - Monet and Impressionism",
        link: "https://www.khanacademy.org/humanities/art-1010/impressionism-post-impressionism",
        summary: "Short educational video on Monet’s approach."
      }
    ]
  },
  {
    id: 't6',
    category: "technology",
    name: "Artificial Intelligence",
    description:
      "Understand the fundamentals of AI, how machines learn, and how it’s transforming industries like healthcare, finance, and education.",
    resources: [
      {
        type: "course",
        title: "Elements of AI",
        link: "https://www.elementsofai.com/",
        summary: "Free introductory AI course from University of Helsinki."
      },
      {
        type: "podcast",
        title: "Lex Fridman Podcast - AI Discussions",
        link: "https://lexfridman.com/podcast/",
        summary: "In-depth conversations with AI researchers."
      }
    ]
  },
  {
    id: 't7',
    category: "finance",
    name: "Personal Budgeting",
    description:
      "Learn how to manage your money, create a budget, track spending, and build a more secure financial future.",
    resources: [
      {
        type: "guide",
        title: "NerdWallet - Budgeting 101",
        link: "https://www.nerdwallet.com/article/finance/how-to-budget",
        summary: "Step-by-step budgeting advice."
      },
      {
        type: "tool",
        title: "Mint by Intuit",
        link: "https://mint.intuit.com/",
        summary: "Popular free app for tracking finances."
      }
    ]
  },
  {
    id: 't8',
    category: "psychology",
    name: "Cognitive Biases",
    description:
      "Learn how humans think — and where our thinking can go wrong — with biases like confirmation bias and the Dunning-Kruger effect.",
    resources: [
      {
        type: "article",
        title: "Verywell Mind - Cognitive Biases",
        link: "https://www.verywellmind.com/what-is-a-cognitive-bias-2794963",
        summary: "Overview of common mental shortcuts."
      },
      {
        type: "book",
        title: "Thinking, Fast and Slow",
        link: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
        summary: "Daniel Kahneman’s classic on decision-making."
      }
    ]
  },
  {
    id: 't9',
    category: "health",
    name: "Sleep Science",
    description:
      "Discover the science behind why we sleep, how it affects health, and how to improve sleep quality.",
    resources: [
      {
        type: "book",
        title: "Why We Sleep by Matthew Walker",
        link: "https://www.goodreads.com/book/show/34466963-why-we-sleep",
        summary: "Popular science book on sleep’s role in health."
      },
      {
        type: "TED Talk",
        title: "Matt Walker - Sleep Is Your Superpower",
        link: "https://www.youtube.com/watch?v=5MuIMqhT8DM",
        summary: "A TED Talk on the benefits of quality sleep."
      }
    ]
  },
  {
    id: 't10',
    category: "space",
    name: "Black Holes",
    description:
      "Uncover the mysterious and extreme environments of black holes in our universe.",
    resources: [
      {
        type: "book",
        title: "Black Holes and Time Warps by Kip Thorne",
        link: "https://www.goodreads.com/book/show/81782",
        summary: "Explains black holes and their place in physics."
      },
      {
        type: "website",
        title: "NASA - Black Holes",
        link: "https://science.nasa.gov/astrophysics/focus-areas/black-holes/",
        summary: "NASA’s official explainer on black holes."
      }
    ]
  },
  {
    id: 't11',
    category: "literature",
    name: "Shakespeare",
    description:
      "Study the works of William Shakespeare, the most influential playwright in the English language.",
    resources: [
      {
        type: "website",
        title: "Folger Shakespeare Library",
        link: "https://www.folger.edu/",
        summary: "Digital editions, resources, and analysis."
      },
      {
        type: "podcast",
        title: "Shakespeare Unlimited",
        link: "https://www.folger.edu/podcasts/shakespeare-unlimited/",
        summary: "Podcast exploring Shakespeare’s influence today."
      }
    ]
  },
  {
    id: 't12',
    category: "politics",
    name: "Democracy",
    description:
      "Learn about democratic systems, how they function, and the challenges they face worldwide.",
    resources: [
      {
        type: "course",
        title: "Stanford - Democratic Development",
        link: "https://cddrl.fsi.stanford.edu/",
        summary: "Stanford’s research and resources on democracy."
      },
      {
        type: "article",
        title: "The Economist Explains: Democracy",
        link: "https://www.economist.com/the-economist-explains/",
        summary: "Concise explainers on political concepts."
      }
    ]
  },
  {
    id: 't13',
    category: "economics",
    name: "Global Trade",
    description:
      "Understand how goods and services move across borders, and why trade impacts everyone.",
    resources: [
      {
        type: "guide",
        title: "Investopedia - International Trade",
        link: "https://www.investopedia.com/terms/i/international-trade.asp",
        summary: "Beginner-friendly breakdown of trade."
      },
      {
        type: "video",
        title: "Khan Academy - Trade Basics",
        link: "https://www.khanacademy.org/economics-finance-domain/microeconomics",
        summary: "Free lessons on trade and economics."
      }
    ]
  },
  {
    id: 't14',
    category: "biology",
    name: "Evolution",
    description:
      "Explore how life changes over generations, shaping all organisms on Earth.",
    resources: [
      {
        type: "encyclopedia",
        title: "Britannica - Evolution",
        link: "https://www.britannica.com/science/evolution-scientific-theory",
        summary: "Comprehensive overview of evolutionary theory."
      },
      {
        type: "book",
        title: "The Selfish Gene",
        link: "https://www.goodreads.com/book/show/61535.The_Selfish_Gene",
        summary: "Richard Dawkins’ influential work on evolution.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1366758096i/61535.jpg"
      }
    ]
  },
  {
    id: 't15',
    category: "environment",
    name: "Climate Change",
    description:
      "Learn about global warming, greenhouse gases, and how humans can adapt.",
    resources: [
      {
        type: "website",
        title: "NASA Climate Change",
        link: "https://climate.nasa.gov/",
        summary: "Official NASA climate data and explanations."
      },
      {
        type: "report",
        title: "IPCC Climate Report",
        link: "https://www.ipcc.ch/reports/",
        summary: "United Nations scientific assessments."
      }
    ]
  },
  {
    id: 't16',
    category: "engineering",
    name: "Robotics",
    description:
      "Discover the world of machines that can sense, think, and act — from factory bots to humanoid robots.",
    resources: [
      {
        type: "magazine",
        title: "IEEE Spectrum - Robotics",
        link: "https://spectrum.ieee.org/robotics",
        summary: "Latest robotics innovations and news."
      },
      {
        type: "course",
        title: "MIT OpenCourseWare - Introduction to Robotics",
        link: "https://ocw.mit.edu/courses/mechanical-engineering/2-12-introduction-to-robotics-fall-2005/",
        summary: "MIT’s open-access robotics lectures."
      }
    ]
  },
  {
    id: 't17',
    category: "medicine",
    name: "Nutrition",
    description:
      "Understand what fuels our bodies, and how diet impacts long-term health.",
    resources: [
      {
        type: "website",
        title: "Harvard T.H. Chan School of Public Health - Nutrition Source",
        link: "https://www.hsph.harvard.edu/nutritionsource/",
        summary: "Trusted, evidence-based nutrition guidance."
      },
      {
        type: "podcast",
        title: "Nutrition Facts with Dr. Greger",
        link: "https://nutritionfacts.org/audio/",
        summary: "Science-backed health and nutrition insights."
      }
    ]
  },
  {
    id: 't18',
    category: "geography",
    name: "Oceans",
    description:
      "Learn about Earth’s oceans, their ecosystems, and their importance to life.",
    resources: [
      {
        type: "encyclopedia",
        title: "National Geographic - Oceans",
        link: "https://www.nationalgeographic.com/environment/oceans",
        summary: "Detailed guides on oceans and marine life."
      },
      {
        type: "video",
        title: "Blue Planet II (BBC)",
        link: "https://www.bbcearth.com/shows/blue-planet-ii",
        summary: "Stunning documentary series on ocean life."
      }
    ]
  },
  {
    id: 't19',
    category: "music",
    name: "Classical Music",
    description:
      "Explore the timeless works of composers like Mozart, Beethoven, and Bach.",
    resources: [
      {
        type: "website",
        title: "Classic FM - Composer Guides",
        link: "https://www.classicfm.com/composers/",
        summary: "Accessible introductions to major composers."
      },
      {
        type: "podcast",
        title: "Sticky Notes Classical Music Podcast",
        link: "https://stickynotespodcast.libsyn.com/",
        summary: "Deep dives into symphonies and composers."
      }
    ]
  },
  {
    id: 't20',
    category: "sociology",
    name: "Urbanization",
    description:
      "Study how cities grow and evolve, shaping human societies and economies.",
    resources: [
      {
        type: "article",
        title: "United Nations - World Urbanization Prospects",
        link: "https://population.un.org/wup/",
        summary: "UN data and analysis on global city growth."
      },
      {
        type: "book",
        title: "The Death and Life of Great American Cities",
        link: "https://www.goodreads.com/book/show/30833",
        summary: "Jane Jacobs’ classic on urban planning."
      }
    ]
  }
];

export default Topics;
