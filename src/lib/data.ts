import type { BlogPost, ResearchPaper, YouTubeVideo } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Generative AI',
    date: 'October 26, 2023',
    description: 'Exploring the next wave of generative models and their potential impact on various industries.',
    link: '#',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
  },
  {
    id: '2',
    title: 'Ethical Considerations in AI Development',
    date: 'September 15, 2023',
    description: 'A deep dive into the ethical challenges and responsibilities that come with building AI systems.',
    link: '#',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
  },
  {
    id: '3',
    title: 'Getting Started with Reinforcement Learning',
    date: 'August 02, 2023',
    description: 'A beginner-friendly guide to understanding the core concepts of reinforcement learning.',
    link: '#',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    id: '1',
    title: 'Advanced Techniques in Natural Language Understanding',
    summary: 'This paper presents novel methods for improving the accuracy and efficiency of NLU models, focusing on attention mechanisms and transfer learning.',
    link: '#',
    imageUrl: 'https://picsum.photos/seed/research1/600/400',
  },
  {
    id: '2',
    title: 'Scalable Deep Learning for Big Data',
    summary: 'We explore architectures and optimization strategies for training deep learning models on massive datasets, addressing computational and memory constraints.',
    link: '#',
    imageUrl: 'https://picsum.photos/seed/research2/600/400',
  },
];

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: '1',
    title: 'AI in 2024: Trends to Watch',
    thumbnailUrl: 'https://picsum.photos/seed/yt1/320/180',
    videoUrl: 'https://www.youtube.com',
  },
  {
    id: '2',
    title: 'Building Your First Neural Network',
    thumbnailUrl: 'https://picsum.photos/seed/yt2/320/180',
    videoUrl: 'https://www.youtube.com',
  },
  {
    id: '3',
    title: 'The Role of AI in Scientific Discovery',
    thumbnailUrl: 'https://picsum.photos/seed/yt3/320/180',
    videoUrl: 'https://www.youtube.com',
  },
];
