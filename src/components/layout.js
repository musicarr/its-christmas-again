import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
	<div className={styles.pageWrap}>
		<main className={styles.mainWrap}>
		{children}
		</main>

		<div className={styles.footerWrap}>
			<div className={styles.reviewsWrap}>
			reviews
			</div>
			<div className={styles.navBoilPadWrap}>
				<nav className={styles.footerNav}>
				<Link to="/privacy-policy">
              		Privacy Policy
            	</Link>
            	<Link to="/privacy-policy">
              		Terms &amp; Conditions
            	</Link>
            	<Link to="/how-this-works">
              		How This Works
            	</Link>
            	<Link to="/compatibility">
              		Device Compatibility
            	</Link>
            	<Link to="/playback-test">
              		Video Playback
            	</Link>
				</nav>
				<div className={styles.movieBoilerplate}>
				movie boilerplate
				</div>
				<div className={styles.footerPadding}>
				blank div padding
				</div>
			</div>
		</div>

		<nav className={styles.headerNavWrap}>
		fixed header nav
		</nav>
	</div>
  )
}

export default Layout

export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
  </>
)