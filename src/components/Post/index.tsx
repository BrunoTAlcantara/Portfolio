import * as Styled from './styles';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  excerpt,
  cover,
  author,
  content,
  categories,
  createdAt,
  id,
}: PostProps) => {
  return (
    <Styled.Container>
      <ArticleHeader
        title={title}
        author={author}
        categories={categories}
        cover={cover}
        id={id}
        createdAt={createdAt}
        excerpt={excerpt}
      ></ArticleHeader>
      <HtmlContent html={content}></HtmlContent>
    </Styled.Container>
  );
};
