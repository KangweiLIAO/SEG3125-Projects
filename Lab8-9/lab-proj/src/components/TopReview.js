import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";

const TopReview = () => {
	const { t } = useTranslation();
	return (
		<Row id="div-review" className="p-5">
			<Col xs={7}>
				<h2 style={{ fontWeight: "bold" }}>
					{" "}
					{t("review.topReview.title")}{" "}
				</h2>
				<p className="mw-100 text-break text-justify">
					{t("review.topReview.review")}
				</p>
				<p> By {t("review.topReview.author")} </p>
			</Col>
			<Col className="d-flex flex-column justify-content-center align-items-start">
				<div className="align-self-center">
					<a
						className="font-weight-bold"
						href="https://www.metacritic.com/game/playstation-5/it-takes-two"
					>
						&#8594; {t("common:review.topReview.link1")}
					</a>
					<br />
					<br />
					<a
						className="font-weight-bold"
						href="https://gamerant.com/it-takes-two-review/"
					>
						&#8594; {t("common:review.topReview.link2")}
					</a>
				</div>
			</Col>
		</Row>
	);
};

export default TopReview;
