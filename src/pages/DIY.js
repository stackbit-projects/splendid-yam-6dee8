import React from 'react'
import SEO from '../component/SEO'
import Layout from '../component/layout'
import {useStaticQuery} from 'gatsby'
import Blogsection from '../component/blogsection'
import Banner from '../component/banner'

export default function Diy() {
    const data = useStaticQuery(graphql`
    {
      allContentfulAllblogs(sort: {order: DESC, fields: date}, filter: {category: {eq: "DIY"}}) {
        edges {
          node {
            date(fromNow: true)
            title
            slug
            shortDescription
            featureImage {
              fluid(toFormat: WEBP) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
    
    `)
    return (
       <Layout>
           <SEO
           title='DIY'/>
           <Banner 
               title='Do It Yourself'
           />

             <div>
       {data.allContentfulAllblogs.edges.map((edge) =>{
           return (
        <Blogsection
        title={edge.node.title}
        date={edge.node.date}
        shortdescription={edge.node.shortDescription}
        path={edge.node.slug}
        image={edge.node.featureImage.fluid}
        />
        )})}
        </div>
       </Layout>
    )
}
