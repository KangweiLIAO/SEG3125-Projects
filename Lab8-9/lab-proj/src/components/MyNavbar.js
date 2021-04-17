import { useState, useEffect } from "react";
import {
	Nav,
	Navbar,
	Button,
	Modal,
	InputGroup,
	FormControl,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

const MyNavbar = (props) => {
	const Mobile = props.mobileScreen;
	const Default = props.defaultScreen;
	const { t, i18n } = useTranslation(); // use i18next default translation namespace(file)
	// states:
	const [lang, setLang] = useState("en"); // language hook
	const [ticketShow, setTicketShow] = useState(false); // support ticket hook

	// functions:
	const showTicket = () => setTicketShow(true);
	const closeTicket = () => setTicketShow(false);

	const languageChangeHandler = () => {
		if (lang === "en") {
			setLang("fr");
			i18n.changeLanguage("fr-CA");
		} else {
			setLang("en");
			i18n.changeLanguage("en-US");
		}
		console.log(i18n);
	};

	useEffect(() => {
		console.log(ticketShow);
	}, [ticketShow]);

	const Support = () => {
		return (
			<Modal show={ticketShow} onHide={closeTicket} centered>
				<Modal.Header closeButton>
					<Modal.Title>{t("common:support.title")}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p
						className="text-muted text-center"
						style={{ fontSize: ".8rem" }}
					>
						{t("common:support.instruction")}
					</p>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="username">@</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl placeholder={t("common:support.username")} />
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text id="subject">
								{t("common:support.subject")}
							</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl placeholder={t("common:support.subject")} />
					</InputGroup>
					{/* <InputGroup className="mb-3">
						<DropdownButton
							as={InputGroup.Prepend}
							variant="outline-secondary"
							title={t("common:support.dropdown.title")}
							id="issue-dropdown"
						>
							<Dropdown.Item>
								{t("common:support.dropdown.account")}
							</Dropdown.Item>
							<Dropdown.Item>
								{t("common:support.dropdown.technical")}
							</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>
								{t("common:support.dropdown.other")}
							</Dropdown.Item>
						</DropdownButton>
						<FormControl />
					</InputGroup> */}
					<div class="form-group">
						<label for="exampleInputEmail1">
							{t("common:support.email")}
						</label>
						<input
							type="email"
							class="form-control"
							aria-describedby="emailHelp"
						/>
						<small id="emailHelp" class="form-text text-muted">
							{t("common:support.emailAlert")}
						</small>
					</div>
					<div class="form-group">
						<label for="textarea">
							{t("common:support.description")}
						</label>
						<textarea
							class="form-control"
							id="textarea"
							rows="5"
						></textarea>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeTicket}>
						{t("button.close")}
					</Button>
					<Button variant="primary" onClick={closeTicket}>
						{t("button.submitTicket")}
					</Button>
				</Modal.Footer>
			</Modal>
		);
	};

	return (
		<Navbar expand="md" variant="dark">
			<Navbar.Brand href="#home">Verity Games</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Mobile>
						<Nav.Link href="#div-title">{t("navbar.home")}</Nav.Link>
						<Nav.Link href="#div-edition">{t("navbar.shop")}</Nav.Link>
						<Nav.Link onClick={() => showTicket()}>
							{t("navbar.support")}
						</Nav.Link>
						<Nav.Link href="#div-footer">{t("navbar.about")}</Nav.Link>
						<Nav.Item>
							<Button
								id="btn-language-mobile"
								onClick={languageChangeHandler}
							>
								{lang.toUpperCase()}
							</Button>
						</Nav.Item>
					</Mobile>
					<Default>
						<Nav.Item className="d-flex align-items-center">
							<Button
								id="btn-language"
								onClick={languageChangeHandler}
							>
								{lang.toUpperCase()}
							</Button>
						</Nav.Item>
						<Nav.Link href="#div-title">{t("navbar.home")}</Nav.Link>
						<Nav.Link href="#div-edition">{t("navbar.shop")}</Nav.Link>
						<Nav.Link onClick={() => showTicket()}>
							{t("navbar.support")}
						</Nav.Link>
						<Nav.Link href="#div-footer">{t("navbar.about")}</Nav.Link>
					</Default>
				</Nav>
			</Navbar.Collapse>
			<Support />
		</Navbar>
	);
};

export default MyNavbar;
