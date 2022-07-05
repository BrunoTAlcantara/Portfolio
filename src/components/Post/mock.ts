import { PostProps } from '.';
import { data } from '../../api/dados.json';

const { title, excerpt, cover, author, categories, createdAt, content } =
  data.posts[0];

export default {
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  content,
} as PostProps;
