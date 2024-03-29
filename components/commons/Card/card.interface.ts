export interface Blog {
  tags: string[];
  title: string;
  readTime: string;
  date: string;
  image: string;
}

export interface CardProps {
  blog: Blog;
}
