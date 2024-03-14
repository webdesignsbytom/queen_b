import { Router } from 'express'
import { createNewBlogArticle, getAllBlogArticles } from '../controllers/blog.js'

const router = Router()

router.get('/get-all-blog-articles', getAllBlogArticles)
router.post('/create-new-blog-article', createNewBlogArticle)

export default router
