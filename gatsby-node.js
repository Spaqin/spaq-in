const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, ".md")
        actions.createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const response = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    if (response.errors) {
      reporter.panicOnBuild('Error while running GraphQL query.')
      return
    }

    response.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.fields.slug}`,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: edge.node.fields.slug,
        },
      })
    })
  }