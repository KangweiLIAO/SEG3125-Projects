import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import YouTube from "react-youtube";

import Footer from "./Footer";
import Edition from "./Edition";
import TopReview from "./TopReview";
import imageMobile from "../res/img-2.jpg";

const Home = (props) => {
	const { t } = useTranslation();
	const Mobile = props.mobileScreen;
	const Default = props.defaultScreen;

	const displayDescript = (isMobile) => {
		const styles = isMobile
			? { backgroundColor: "rgba(0,0,0,0.7)", padding: "8vw 5vw" }
			: {};
		return (
			<div style={styles}>
				<h2 className="title">{t("game.title")}</h2>
				<p className="mw-100 text-break text-justify">
					{t("game.description")}
				</p>
			</div>
		);
	};

	return (
		<Container fluid className="p-0">
			<Row id="div-title">
				<Default minDeviceWidth={768}>
					<Col
						xs={7}
						className="d-flex align-items-center justify-content-around p-5"
					>
						{displayDescript(false)}
					</Col>
					<Col className="pr-5">
						{/* <img className="img-main" src={imageDefault} alt="img-1" /> */}
						<YouTube
							videoId="qSJN4hN28kg"
							opts={{ height: "300", width: "310" }}
						/>
					</Col>
				</Default>
				<Mobile maxDeviceWidth={768}>
					<Container
						fluid
						className="media-sm-main-image position-relative p-0"
						style={{
							backgroundImage: `url(${imageMobile})`,
							backgroundSize: "cover",
						}}
					>
						{displayDescript(true)}
					</Container>
				</Mobile>
			</Row>
			<TopReview />
			<Edition />
			<Footer />
		</Container>
	);
};

export default Home;
