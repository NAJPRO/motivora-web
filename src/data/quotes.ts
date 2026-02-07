export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
  views: number;
  likes: number;
  createdAt: string;
}

export const categories = [
  "Motivation",
  "Succès",
  "Bonheur",
  "Sagesse",
  "Amour",
  "Courage",
  "Persévérance",
  "Confiance",
] as const;

export type Category = typeof categories[number];

export const quotes: Quote[] = [
  {
    id: "1",
    text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
    author: "Winston Churchill",
    category: "Courage",
    views: 2345,
    likes: 892,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
    author: "Steve Jobs",
    category: "Motivation",
    views: 3421,
    likes: 1203,
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    text: "Croyez que vous pouvez et vous êtes à mi-chemin.",
    author: "Theodore Roosevelt",
    category: "Confiance",
    views: 1876,
    likes: 654,
    createdAt: "2024-01-13",
  },
  {
    id: "4",
    text: "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions.",
    author: "Dalai Lama",
    category: "Bonheur",
    views: 2987,
    likes: 1102,
    createdAt: "2024-01-12",
  },
  {
    id: "5",
    text: "Votre temps est limité, ne le gaspillez pas à vivre la vie de quelqu'un d'autre.",
    author: "Steve Jobs",
    category: "Sagesse",
    views: 4123,
    likes: 1567,
    createdAt: "2024-01-11",
  },
  {
    id: "6",
    text: "Le secret du changement est de concentrer toute votre énergie non pas à lutter contre l'ancien mais à construire le nouveau.",
    author: "Socrate",
    category: "Sagesse",
    views: 2156,
    likes: 789,
    createdAt: "2024-01-10",
  },
  {
    id: "7",
    text: "La persévérance n'est pas une longue course ; c'est beaucoup de petites courses l'une après l'autre.",
    author: "Walter Elliot",
    category: "Persévérance",
    views: 1543,
    likes: 432,
    createdAt: "2024-01-09",
  },
  {
    id: "8",
    text: "Aimer et être aimé, voilà le bonheur suprême de l'existence.",
    author: "George Sand",
    category: "Amour",
    views: 2890,
    likes: 1098,
    createdAt: "2024-01-08",
  },
  {
    id: "9",
    text: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.",
    author: "Winston Churchill",
    category: "Succès",
    views: 3654,
    likes: 1342,
    createdAt: "2024-01-07",
  },
  {
    id: "10",
    text: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.",
    author: "Confucius",
    category: "Courage",
    views: 2765,
    likes: 987,
    createdAt: "2024-01-06",
  },
];

export const getQuoteOfTheDay = (): Quote => {
  const today = new Date().getDate();
  return quotes[today % quotes.length];
};

export const getQuotesByCategory = (category: Category): Quote[] => {
  return quotes.filter((quote) => quote.category === category);
};

export const getQuoteById = (id: string): Quote | undefined => {
  return quotes.find((quote) => quote.id === id);
};
