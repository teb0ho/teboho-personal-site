import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/Layout';
import './blog.css';

const Blog = ({ data }) => {

    const posts = data.allMarkdownRemark.nodes;
    console.log(posts);
    return (
        <Layout>
            <div className="blogs container tc">
                <h1>Blogs</h1>
                <div className="blog-list">
                    <div>
                        {posts.map(post => (
                            
                            <div className="blog-item">
                                <Link to={"/posts/" + post.frontmatter.slug} key={post.id}>
                                    <h3>{post.frontmatter.title}</h3>
                                    <div className="post-details">
                                        <div>📝{post.frontmatter.author}</div>
                                        <div>📅 {new Date(post.frontmatter.date).toDateString()}</div>
                                    </div>
                                </Link>
                            </div>
                            
                        ))}
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export const query = graphql`
query PostsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
          author
          date
        }
        id
      }
    }
  }  
`;


export default Blog;