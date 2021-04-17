import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import imageDefault from "../res/img-1.jpg";
import {
	Container,
	ButtonGroup,
	Button,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";

const Edition = () => {
	const editions = ["standard", "premium", "definitive"];
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const { t } = useTranslation();
	// BUG: <t("dropdown.platform.default")> won't translate the title in dropdown after language switched
	const [platform, setPlatform] = useState(t("dropdown.platform.default"));
	const [edition, setEdition] = useState(editions[0]);
	const [descpt, setDescpt] = useState(t("game.edition.standard.description"));

	const handleEditionBtnClick = (curr) => {
		if (curr !== edition) setEdition(curr);
	};

	useEffect(() => {
		switch (edition) {
			case "premium":
				setDescpt(t("game.edition.premium.description"));
				break;
			case "definitive":
				setDescpt(t("game.edition.definitive.description"));
				break;
			default:
				setDescpt(t("game.edition.standard.description"));
				break;
		}
	}, [edition, t]);

	const onPlatformSelect = (e) => setPlatform(e); // handle the display of selected platform

	return (
		<Container fluid id="div-edition">
			<ButtonGroup id="btngroup-editions">
				<Button
					onClick={(e) => handleEditionBtnClick(editions[0])}
					className={edition === "standard" ? "active" : ""}
				>
					{t("game.edition.standard.title")}
				</Button>
				<Button
					onClick={(e) => handleEditionBtnClick(editions[1])}
					className={edition === "premium" ? "active" : ""}
				>
					{t("game.edition.premium.title")}
				</Button>
				<Button
					onClick={(e) => handleEditionBtnClick(editions[2])}
					className={edition === "definitive" ? "active" : ""}
				>
					{t("game.edition.definitive.title")}
				</Button>
			</ButtonGroup>
			<div className="d-flex flex-nowrap justify-content-between pt-5">
				<div className="d-flex flex-column justify-content-between ml-5 w-100">
					<p id="edition-description" className="text-break text-justify">
						{descpt}
					</p>
					<div
						className={
							isMobile
								? "d-flex flex-column"
								: "d-inline-flex justify-content-between w-100"
						}
					>
						<DropdownButton
							id="dropdown-platform"
							title={platform}
							onSelect={onPlatformSelect}
						>
							<Dropdown.Item eventKey={t("dropdown.platform.pc")}>
								{t("dropdown.platform.pc")}
							</Dropdown.Item>
							<Dropdown.Item eventKey={t("dropdown.platform.ps4")}>
								{t("dropdown.platform.ps4")}
							</Dropdown.Item>
							<Dropdown.Item eventKey={t("dropdown.platform.xbox")}>
								{t("dropdown.platform.xbox")}
							</Dropdown.Item>
						</DropdownButton>
						<Button
							id="btn-buy"
							style={isMobile ? { marginTop: "1rem" } : {}}
						>
							{t("button.purchase")}
						</Button>
					</div>
				</div>
				<img
					id="edition-img"
					className="img-main"
					src={imageDefault}
					alt="standard edition cover"
				/>
			</div>
		</Container>
	);
};

export default Edition;
