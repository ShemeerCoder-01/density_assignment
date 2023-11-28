import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import styled from "styled-components"
import WelcomeNote from "../components/WelcomeNote"
import AppUIImages from "../components/AppFace/AppUIImages"
import AppFeatures from "../components/AppFace/AppFeatures"
import AppComparison from "../components/AboutApp/AppComparison"
import BarChartImage from "../components/ExploreMarket/BarChartImage"
import LineChartImage from "../components/ExploreMarket/LineChartImage"
import AppBenefits from "../components/AboutApp/AppBenefits"
import StepsToTrade from "../components/AppFace/StepsToTrade"
import Investors from "../components/AboutApp/Investors"
import AppReviews from "../components/AboutApp/AppReviews"
import ShareApp from "../components/AppFace/ShareApp"
import Community from "../components/AboutApp/Community"
import Visionaries from "../components/AboutApp/Visionaries"
import GetStarted from "../components/ExploreMarket/GetStarted"


const Wrapper = styled.div`
  width: 100%;
  height: Hug (1,215.7px);
  padding: 80px, 0px, 120px, 0px;
  gap: 76px;
  color:#fff;
`;










const IndexPage = () => (
  <Layout>
    <Wrapper>
      <WelcomeNote />
      <AppUIImages />
      <AppFeatures />
      <AppComparison />
      <BarChartImage />
      <LineChartImage />
      <AppBenefits />
      <StepsToTrade/>
      <Investors/>
      <AppReviews/>
      <ShareApp/>
      <Community/>
      <Visionaries/>
      <GetStarted/>
    </Wrapper>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
