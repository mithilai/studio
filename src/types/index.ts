
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
  imageUrl?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  summary: string;
  link: string;
  imageUrl?: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}
