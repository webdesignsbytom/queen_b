import dbClient from '../utils/dbClient.js';

export const findAllBlogArticles = () =>
  dbClient.article.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const createNewArticle = (title, content, links) =>
  dbClient.article.create({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
        title: title,
        content: content,
        links: links
    }
  });