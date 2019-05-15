import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";

class Index extends React.Component {

  render() {
    return (
      <Layout location={this.props.location} title="Home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`}/>
          </Helmet>
          <div
            className={`md-grid md-cell--9 post-page-contents mobile-fix`}
          >
            <Card className="md-grid md-cell--8">
              <div className="about-wrapper">
                <img
                  src={config.userAvatar}
                  className="about-img"
                  alt={config.userName}
                />
                <CardText>
                  <p className="about-text md-body-1">{config.userDescription}</p>
                  <p>{this.props.canonical_url}</p>
                </CardText>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;