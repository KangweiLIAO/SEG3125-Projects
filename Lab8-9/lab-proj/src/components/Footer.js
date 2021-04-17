import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const Footer = () => {
	const { t } = useTranslation();
	return (
		<Container fluid id="div-footer" className="footer">
			<hr />
			<div id="social-info" className="ml-5 pt-3 pb-3">
				<p className="font-weight-bold"> {t("footer.social")} </p>
				<div className="d-flex justify-content-between w-50">
					<a href="/" title="Facebook">
						Facebook
					</a>
					<a href="/" title="Twitter">
						Twitter
					</a>
					<a href="/" title="YouTube">
						Youtube
					</a>
					<a href="/" title="Instagram">
						Instagram
					</a>
					<a href="/" title="Twitch">
						Twitch
					</a>
				</div>
			</div>

			<div id="footer-imgs" className="ml-5 pt-3 pb-3">
				<img
					src="https://media.contentapi.ea.com/content/dam/gin/common/rating-icons/esrb/itt-esrb-t.png"
					alt="rating-icon"
				/>
				<p id="disclaimer" style={{ marginTop: "1rem", color: "grey" }}>
					{t("footer.disclaimer")}
				</p>
				<p style={{ color: "grey" }}>
					© 2021 Verity Games Inc.
				</p>
			</div>
		</Container>
	);
};

export default Footer;
