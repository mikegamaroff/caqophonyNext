import Layout from "../components/Layout";
import Head from "next/head";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    news: [],
    key: "(EN]KP}pzz]avzqE96XnW?AtuZju9",
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>About us</title>
        </Head>
        <div>{this.state.key}</div>
      </Layout>
    );
  }
}

export default About;
