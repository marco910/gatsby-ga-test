/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const acceptCookies = () => {
    console.log("GA active")
    document.cookie = "gatsby-gdpr-google-analytics=true"
    document.getElementById("cookiebanner").style.display = "none"
  }

  const disableCookies = () => {
    document.getElementById("cookiebanner").style.display = "none"
  }

  useEffect(() => {}, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>

        <div className="cookiebanner" id="cookiebanner">
          CookieBanner
          <button onClick={() => acceptCookies()}>Einverstanden</button>
          <button onClick={() => disableCookies()}>Ablehnen</button>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
