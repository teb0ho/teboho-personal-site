import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import SiteMetaData from "../components/SiteMetaData/SiteMetaData"
import "./blog.css"

const Blog = ({ data }) => {
	const posts = data.allMarkdownRemark.nodes

	return (
		<Layout>
			<SiteMetaData />
			<div className="blogs container tc">
				<h1>Blog</h1>
				<div className="blog-list">
					<div>
						{posts.map(post => (
							<div className="blog-mb" key={post.id}>
								<Link
									to={"/blog/" + post.frontmatter.slug}
									key={post.id}
								>
									<h3>{post.frontmatter.title}</h3>
									<div className="post-details">
										<div>
											<span
												role="img"
												aria-label="author"
											>
												📝
											</span>
											{post.frontmatter.author}
										</div>
										<div>
											<span role="img" aria-label="date">
												📅{" "}
											</span>
											{new Date(
												post.frontmatter.date
											).toDateString()}
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
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
`

export default Blog
