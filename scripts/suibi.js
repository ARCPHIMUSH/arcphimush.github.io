'use strict'
/**
 * 随笔独立页面生成器
 * 生成 /suibi/ 页面，列出所有带「随笔」分类的文章
 * 之后写随笔文章时，front-matter 加 categories: [随笔] 即可自动收录
 */
hexo.extend.generator.register('suibi', function (locals) {
  const posts = locals.posts
    .filter(function (post) {
      return post.categories && post.categories.some(function (c) { return c.name === '随笔' })
    })
    .sort('date', -1)

  const result = {
    path: 'suibi/index.html',
    layout: ['category', 'page', 'index'],
    data: {
      category: '随笔',
      title: '随笔',
      posts: posts.toArray(),
      total: 1,
      current: 1,
      prev: false,
      next: false
    }
  }
  return result
})
