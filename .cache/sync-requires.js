
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-index-js": preferDefault(require("/home/rseag/m-3-lab.github.io/src/pages/404/index.js")),
  "component---src-pages-index-js": preferDefault(require("/home/rseag/m-3-lab.github.io/src/pages/index.js")),
  "component---src-pages-people-index-js": preferDefault(require("/home/rseag/m-3-lab.github.io/src/pages/people/index.js")),
  "component---src-pages-publications-index-js": preferDefault(require("/home/rseag/m-3-lab.github.io/src/pages/publications/index.js"))
}

