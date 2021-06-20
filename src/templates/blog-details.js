import React from 'react';
import './blog-details.css';
import Layout from '../components/Layout/Layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const BlogDetails = ({ data }) => {
    const { html } = data.markdownRemark;
    const { title, author, image, date } = data.markdownRemark.frontmatter;

    
    return ( 
        <Layout>
            
            <div className="blog-detail-main container tc">
                <img className="blog-mb header-image" src={image.childImageSharp.fluid.src}/> 
                <div className="tl ">
                    <h2>{title}</h2>
                </div>
                {/* <div className="tl blog-mb">📝 {author}</div> */}
                <div className="tl author-details blog-mb">
                    <div>📝{author}</div>
                    <div>📅 {new Date(date).toDateString()}</div>
                </div>
                <div className="tl blog-mb" dangerouslySetInnerHTML={{ __html: html}}/>
            </div>
        </Layout> 
    );
}

export const query = graphql`
    query BlogDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
            slug
            title
            author
            date
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}
  
`
 
export default BlogDetails;