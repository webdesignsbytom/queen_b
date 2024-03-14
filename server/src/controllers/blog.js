import { myEmitterErrors } from '../event/errorEvents.js';
// Response messages
import {
  MissingFieldEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';
import { createNewArticle, findAllBlogArticles } from '../domain/blog.js';

export const getAllBlogArticles = async (req, res) => {
  console.log('getAllBlogArticles');
  try {
    const foundBlogArticles = await findAllBlogArticles();

    if (!foundBlogArticles) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.notFoundBlogArticle
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { articles: foundBlogArticles });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all articles`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewBlogArticle = async (req, res) => {
  console.log('createNewBlogArticle');
  const { title, content, links } = req.body;
  console.log('xxx', title, content, links);

  try {
    if (!title || !content) {
      const notFound = new MissingFieldEvent(
        req.user,
        EVENT_MESSAGES.missingFields,
        EVENT_MESSAGES.missingBlogData
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const createdArticle = await createNewArticle(title, content, links);
    console.log('created article', createdArticle);

    if (!createdArticle) {
      const notCreated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createBlogFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    return sendDataResponse(res, 200, { createdArticle: createdArticle });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.user, `Get all articles`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
