import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "../../utils/ActiveLink";
import SearchModal from "../Modals/SearchModal";
import ShoppingCartModal from "../Modals/ShoppingCartModal";
import SidebarModal from "../Modals/SidebarModal";

const Navbar = ({ user, store }) => {
	// Navbar
	const router = useRouter();
	const [collapsed, setCollapsed] = useState(true);
	const [isMounted, setIsMounted] = useState(false);
	const [searchModal, setSearchModal] = useState(false);
	const [sidebarModal, setSidebarModall] = useState(false);
	const [shoppingCartModal, setShoppingCartModal] = useState(false);
	const [keyword, setKeyword] = useState("");
	const cartItems = useSelector((state) => state.cartItems);

	const toggleNavbar = () => {
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	}, []);

	useEffect(() => {
		setIsMounted(false);
	}, []);

	// Search Modal
	const toggleModalSearch = () => {
		setSearchModal(!searchModal);
	};

	// Shopping Cart Modal
	const toggleModalCart = () => {
		setShoppingCartModal(!shoppingCartModal);
	};

	// Sidebar Modal
	const toggleModalSidebar = () => {
		setSidebarModall(!sidebarModal);
	};

	const handleChange = (e) => {
		const { value } = e.target;
		setKeyword(value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		if (keyword) {
			router.push(`/products-without-sidebar/?name=${keyword}`);
		} else {
			router.push("/");
		}
	};

	const classNameOne = collapsed
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classNameTwo = collapsed
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<>
			<div id="navbar" className="navbar-area">
				<div className="main-nav">
					<div className="container">
						<nav className="navbar navbar-expand-lg navbar-light">
							<Link href="/">
								<a className="navbar-brand">
									<img
										src="../../images/logo.png"
										alt="logo"
									/>
								</a>
							</Link>

							<button
								onClick={toggleNavbar}
								className={classNameTwo}
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div
								className={classNameOne}
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav">
									<li className="nav-item">
										<Link href="/electronics">
											<a className="nav-link">
												Home{" "}
												<i className="bx bx-chevron-down"></i>
											</a>
										</Link>
									</li>

									<li className="nav-item megamenu">
										<Link href="#">
											<a className="nav-link">
												Shop{" "}
												<i className="bx bx-chevron-down"></i>
											</a>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<div className="container">
													<div className="row">
														<div className="col">
															<h6 className="submenu-title">
																Shop Styles
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/products-left-sidebar"
																		activeClassName="active"
																	>
																		<a>
																			Left
																			Sidebar
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/products-left-sidebar-with-categories"
																		activeClassName="active"
																	>
																		<a>
																			Left
																			Sidebar
																			With
																			Categories
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-1"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			(2
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-4"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			Full
																			Width
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Shop Styles 2
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/products-right-sidebar"
																		activeClassName="active"
																	>
																		<a>
																			Right
																			Sidebar
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/products-right-sidebar-with-categories"
																		activeClassName="active"
																	>
																		<a>
																			Right
																			Sidebar
																			With
																			Categories
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-2"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			Fullwidth
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/lookbook-1"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Shop Styles 3
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/products-without-sidebar"
																		activeClassName="active"
																	>
																		<a>
																			Without
																			Sidebar
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/products-sidebar-fullwidth"
																		activeClassName="active"
																	>
																		<a>
																			With
																			Sidebar
																			Full
																			Width
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-3"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			(1
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/lookbook-2"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			Full
																			Width
																			(4
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Product Pages
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/cart"
																		activeClassName="active"
																	>
																		<a>
																			Cart
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/checkout"
																		activeClassName="active"
																	>
																		<a>
																			Checkout
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/profile"
																		activeClassName="active"
																	>
																		<a>
																			My
																			Account
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/sizing-guide"
																		activeClassName="active"
																	>
																		<a>
																			Sizing
																			Guide
																		</a>
																	</Link>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</li>

									<li className="nav-item megamenu">
										<Link href="#">
											<a className="nav-link">
												Pages{" "}
												<i className="bx bx-chevron-down"></i>
											</a>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<div className="container">
													<div className="row">
														<div className="col">
															<h6 className="submenu-title">
																Pages
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/about"
																		activeClassName="active"
																	>
																		<a>
																			About
																			Us
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/customer-service"
																		activeClassName="active"
																	>
																		<a>
																			Customer
																			Service
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/login"
																		activeClassName="active"
																	>
																		<a>
																			Login
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/signup"
																		activeClassName="active"
																	>
																		<a>
																			Signup
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/faqs"
																		activeClassName="active"
																	>
																		<a>
																			FAQ's
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/404"
																		activeClassName="active"
																	>
																		<a>
																			404
																			Error
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/coming-soon"
																		activeClassName="active"
																	>
																		<a>
																			Coming
																			Soon
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/track-order"
																		activeClassName="active"
																	>
																		<a>
																			Tracking
																			Order
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/contact"
																		activeClassName="active"
																	>
																		<a>
																			Contact
																			Us
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Gallery
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/gallery-1"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			(2
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/gallery-2"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/gallery-3"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			Full
																			Width
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/gallery-4"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			Full
																			Width
																			(4
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>

															<h6 className="submenu-title">
																My Account
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/login"
																		activeClassName="active"
																	>
																		<a>
																			Login
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/signup"
																		activeClassName="active"
																	>
																		<a>
																			Signup
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Categories
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/categories-1"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			(2
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-2"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			Fullwidth
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-3"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			(1
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-4"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			Full
																			Width
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>

															<h6 className="submenu-title">
																Lookbook
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/lookbook-1"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/lookbook-2"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			Full
																			Width
																			(4
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Shop
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/cart"
																		activeClassName="active"
																	>
																		<a>
																			Cart
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/checkout"
																		activeClassName="active"
																	>
																		<a>
																			Cehckout
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/compare"
																		activeClassName="active"
																	>
																		<a>
																			Compare
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/profile"
																		activeClassName="active"
																	>
																		<a>
																			My
																			Account
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/sizing-guide"
																		activeClassName="active"
																	>
																		<a>
																			Sizing
																			Guide
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/track-order"
																		activeClassName="active"
																	>
																		<a>
																			Tracking
																			Order
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/customer-service"
																		activeClassName="active"
																	>
																		<a>
																			Customer
																			Service
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/contact"
																		activeClassName="active"
																	>
																		<a>
																			Contact
																			Us
																		</a>
																	</Link>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</li>

									<li className="nav-item megamenu">
										<Link href="#">
											<a className="nav-link">
												Women's{" "}
												<i className="bx bx-chevron-down"></i>
											</a>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<div className="container">
													<div className="row">
														<div className="col">
															<h6 className="submenu-title">
																Shop Styles
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/products-left-sidebar"
																		activeClassName="active"
																	>
																		<a>
																			Left
																			Sidebar
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/products-left-sidebar-with-categories"
																		activeClassName="active"
																	>
																		<a>
																			Left
																			Sidebar
																			With
																			Categories
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-1"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			(2
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-4"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			Full
																			Width
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Shop Styles 2
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/products-right-sidebar"
																		activeClassName="active"
																	>
																		<a>
																			Right
																			Sidebar
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/products-right-sidebar-with-categories"
																		activeClassName="active"
																	>
																		<a>
																			Right
																			Sidebar
																			With
																			Categories
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-2"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			Fullwidth
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/lookbook-1"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Shop Styles 3
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/products-without-sidebar"
																		activeClassName="active"
																	>
																		<a>
																			Without
																			Sidebar
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/products-sidebar-fullwidth"
																		activeClassName="active"
																	>
																		<a>
																			With
																			Sidebar
																			Full
																			Width
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-3"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			(1
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/lookbook-2"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			Full
																			Width
																			(4
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<ul className="megamenu-submenu">
																<li>
																	<div className="aside-trending-products">
																		<img
																			src="../../images/categories/categories3.jpg"
																			alt="image"
																		/>

																		<div className="category">
																			<h4>
																				Popular
																				Products
																			</h4>
																		</div>

																		<Link href="#">
																			<a className="link-btn"></a>
																		</Link>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</li>

									<li className="nav-item megamenu">
										<Link href="#">
											<a className="nav-link">
												Men's{" "}
												<i className="bx bx-chevron-down"></i>
											</a>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<div className="container">
													<div className="row">
														<div className="col">
															<h6 className="submenu-title">
																Shop Styles
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/products-left-sidebar"
																		activeClassName="active"
																	>
																		<a>
																			Left
																			Sidebar
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/products-left-sidebar-with-categories"
																		activeClassName="active"
																	>
																		<a>
																			Left
																			Sidebar
																			With
																			Categories
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-1"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			(2
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-4"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			Full
																			Width
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Shop Styles 2
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/products-right-sidebar"
																		activeClassName="active"
																	>
																		<a>
																			Right
																			Sidebar
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/products-right-sidebar-with-categories"
																		activeClassName="active"
																	>
																		<a>
																			Right
																			Sidebar
																			With
																			Categories
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-2"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			Fullwidth
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/lookbook-1"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			(3
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<h6 className="submenu-title">
																Shop Styles 3
															</h6>

															<ul className="megamenu-submenu">
																<li>
																	<Link
																		href="/products-without-sidebar"
																		activeClassName="active"
																	>
																		<a>
																			Without
																			Sidebar
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/products-sidebar-fullwidth"
																		activeClassName="active"
																	>
																		<a>
																			With
																			Sidebar
																			Full
																			Width
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/categories-3"
																		activeClassName="active"
																	>
																		<a>
																			Categories
																			(1
																			in
																			Row)
																		</a>
																	</Link>
																</li>

																<li>
																	<Link
																		href="/lookbook-2"
																		activeClassName="active"
																	>
																		<a>
																			Grid
																			Full
																			Width
																			(4
																			in
																			Row)
																		</a>
																	</Link>
																</li>
															</ul>
														</div>

														<div className="col">
															<ul className="megamenu-submenu">
																<li>
																	<div className="aside-trending-products">
																		<img
																			src="../../images/categories/categories4.jpg"
																			alt="image"
																		/>

																		<div className="category">
																			<h4>
																				Popular
																				Products
																			</h4>
																		</div>

																		<Link href="#">
																			<a className="link-btn"></a>
																		</Link>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<Link href="#">
											<a className="nav-link">
												Blog{" "}
												<i className="bx bx-chevron-down"></i>
											</a>
										</Link>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="/blog-1"
													activeClassName="active"
												>
													<a className="nav-link">
														Grid (2 in Row)
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/blog-2"
													activeClassName="active"
												>
													<a className="nav-link">
														Grid (3 in Row)
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/blog-3"
													activeClassName="active"
												>
													<a className="nav-link">
														Grid (4 in Row)
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/blog-4"
													activeClassName="active"
												>
													<a className="nav-link">
														Grid (Full Width)
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/blog-5"
													activeClassName="active"
												>
													<a className="nav-link">
														Right Sidebar
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link href="#">
													<a className="nav-link">
														Single Post{" "}
														<i className="bx bx-chevron-right"></i>
													</a>
												</Link>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<Link
															href="/single-blog-1"
															activeClassName="active"
														>
															<a className="nav-link">
																Default
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/single-blog-2"
															activeClassName="active"
														>
															<a className="nav-link">
																With Video
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/single-blog-3"
															activeClassName="active"
														>
															<a className="nav-link">
																With Image
																Slider
															</a>
														</Link>
													</li>
												</ul>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<Link
											href="/sale-request"
											activeClassName="active"
										>
											<a className="nav-link">Sale ?</a>
										</Link>
									</li>

									{user && (
										<li className="nav-item">
											<Link href="#">
												<a className="nav-link">
													{user && user.name}
													<i className="bx bx-chevron-down"></i>
												</a>
											</Link>

											<ul className="dropdown-menu">
												{user.role === "admin" ||
												user.role === "super-admin" ? (
													<li className="nav-item">
														<Link
															href="/admin/dashboard"
															activeClassName="active"
														>
															<a className="nav-link">
																Dashboard
															</a>
														</Link>
													</li>
												) : (
													""
												)}

												<li className="nav-item">
													<Link
														href="/profile"
														activeClassName="active"
													>
														<a className="nav-link">
															{" "}
															My Profile
														</a>
													</Link>
												</li>

												<li className="nav-item">
													<Link
														href="/my-orders-history"
														activeClassName="active"
													>
														<a className="nav-link">
															My Order History
														</a>
													</Link>
												</li>
												{store &&
												store.status === "approved" ? (
													<li className="nav-item">
														<Link
															href="/stores/dashboard"
															activeClassName="active"
														>
															<a className="nav-link">
																Store Dashboard
															</a>
														</Link>
													</li>
												) : (
													""
												)}
											</ul>
										</li>
									)}
								</ul>
							</div>

							<div className="others-option">
								<div className="option-item">
									<div
										className="search-btn-box"
										onClick={toggleModalSearch}
									>
										<i className="search-btn bx bx-search-alt"></i>
									</div>
								</div>

								<div className="option-item">
									<div className="cart-btn">
										<Link href="#toggleModalCart">
											<a
												onClick={(e) => {
													e.preventDefault();
													toggleModalCart();
												}}
											>
												<i className="bx bx-shopping-bag"></i>
												<span>{cartItems.length}</span>
											</a>
										</Link>
									</div>
								</div>

								<div className="option-item">
									<div
										className="burger-menu"
										onClick={toggleModalSidebar}
									>
										<span className="top-bar"></span>
										<span className="middle-bar"></span>
										<span className="bottom-bar"></span>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>

			{/* Search Modal */}
			<SearchModal
				onClick={toggleModalSearch}
				active={searchModal ? "active" : ""}
				handleSearch={handleSearch}
				handleChange={handleChange}
			/>

			{/* Shopping Cart Modal */}
			<ShoppingCartModal
				onClick={toggleModalCart}
				active={shoppingCartModal ? "active" : ""}
			/>

			{/* Sidebar Modal */}
			<SidebarModal
				onClick={toggleModalSidebar}
				active={sidebarModal ? "active" : ""}
			/>
		</>
	);
};

export default Navbar;
