const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jamesquick/delete_me/blog-2020v2/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jamesquick/delete_me/blog-2020v2/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/jamesquick/delete_me/blog-2020v2/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/jamesquick/delete_me/blog-2020v2/src/pages/blog.js"))),
  "component---src-pages-events-js": hot(preferDefault(require("/Users/jamesquick/delete_me/blog-2020v2/src/pages/events.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jamesquick/delete_me/blog-2020v2/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/jamesquick/delete_me/blog-2020v2/src/templates/blog-post.js")))
}

