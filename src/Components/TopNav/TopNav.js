import React from 'react';
import "../TopNav/TopNav.css";
import arrow from "../../assets/FeaturedImages/leftArrow.png"

const TopNav = () => {
    return (
        <div class="ltn__header-top-area top-area py-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <div class="ltn__top-bar-menu">
                            <ul>
                                <li>
                                    <a ><i class="icon-mail"></i> info@pergolarooms.ae</a>
                                </li>
                                <li>
                                    <a><i class="icon-placeholder"></i> +971585799666</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="top-bar-right text-end">
                            <div class="ltn__top-bar-menu">
                                <ul>
                                    <li>
                                        <div class="ltn__social-media d-none">
                                            <ul>
                                                <li>
                                                    <img style={{ height: '30px', width: '30px' }} src={arrow} alt="" />
                                                </li>
                                                <li>
                                                    <a href="https://www.twitter.com/tuna-theme" title="Twitter"><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/tuna-theme" title="Instagram"><i class="fab fa-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.dribble.com/tuna-theme" title="Dribbble"><i class="fab fa-dribbble"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;