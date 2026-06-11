import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className='container'>
        <img
          src='/img/logo-full.svg'
          alt='Ryze RP'
          className={styles.heroLogo}
        />

        <div className={styles.buttons}>
          <Link
            className='button button--primary button--lg'
            to='/docs/getting-started/introduction'
          >
            View Docs
          </Link>

          <Link
            className='button button--secondary button--lg'
            to='/docs/server-rules/introduction'
          >
            Server Rules
          </Link>
        </div>

        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description='Official documentation for Ryze RP'
    >
      <HomepageHeader />
    </Layout>
  );
}
