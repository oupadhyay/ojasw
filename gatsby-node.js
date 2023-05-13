const path = require("path");

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/post.js`);
  const result = await graphql(`
    {
      blog: allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        posts: edges {
          post: node {
            slug
          }
        }
      }
    }
  `);

  result.data.blog.posts.forEach((edge) => {
    createPage({
      path: `/blog/${edge.post.slug}`,
      component: blogPostTemplate,
      context: {},
    });
  });
};
