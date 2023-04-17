import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa"
import { FiTwitter, FiClock } from "react-icons/fi"
import { TfiPinterest } from "react-icons/tfi"

const Footer = () => {
    return (
        <div className="max-w-[1640px] m-auto py-10 md:px-12 md:py-12 bg-[#F8C495]">
            <div className="grid gap-10 md:grid-cols-4">
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <GrLocation size={25} />
                    </div>
                    <h5>103 North Loundoun Street., </h5>
                    <h5 className="mb-5"> Winchester, VA</h5>
                    <div className="flex">
                        <FaFacebookF className="me-1" size={25} />
                        <FiTwitter className="mx-1" size={25} />
                        <TfiPinterest className="ms-1" size={25} />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <FiClock size={25} />
                    </div>
                    <div className="flex flex-col items-center">
                        <h5>o Mon-Fri 9am-10pm</h5>
                        <h5>o Sat 10pm-4am</h5>
                        <h5>o Sun 10am-7pm</h5>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-bold">MENU</p>
                    <div className="flex flex-col items-center">
                        <h5>Home</h5>
                        <h5>Order</h5>
                        <h5>Favourites</h5>
                        <h5>Wallets</h5>
                        <h5>Help</h5>
                        <h5>Promotions</h5>
                        <h5>Best Ones</h5>
                        <h5>Invite Friends</h5>
                        <h5>About</h5>
                        <h5>Contact</h5>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-bold">HELP</p>
                    <div className="flex flex-col items-center">
                        <h5>Privacy Policy</h5>
                        <h5>Terms of Service</h5>
                        <h5>Customer Service</h5>
                        <h5>About</h5>
                        <h5>Contact</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
