import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

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
					<div>
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
					</div>
				</nav>
				<div className={styles.movieBoilerplate}>
					<div>
						<StaticImage
							alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
							src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Fd76%2Ff1669217784443x762321075962226700%2Ffoot-billing.png?w=1024&h=248&auto=compress&fit=crop&dpr=2"
						/>
					</div>
				</div>
				<div className={styles.footerRights}>
					&copy; 2022 Mapelle Films. All Rights Reserved.
				</div>
			</div>
		</div>

		<nav className={styles.headerNavWrap}>
			<div>
				<a href="javascript:;">=</a>
			</div>
			<div>
				<Link to="/">
					Get Tickets
				</Link>
				<Link to="/">
					About The Event
				</Link>
				<Link to="/how-this-works">
					How This Works
				</Link>
				<Link to="/?watch=trailer">
					Watch Trailer
				</Link>
			</div>
			<div>
				<a href="javascript:;">Log In</a>
			</div>
		</nav>
	</div>
  )
}

export default Layout

export const Head = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600&family=Lato&display=swap" rel="stylesheet" />
  </>
)