import React from "react"

import ImgSlider from "./ImgSlider";
import { CgArrowBottomLeft } from "react-icons/cg";
import { CgArrowTopRight } from "react-icons/cg";
import { TbShoppingCartDown } from "react-icons/tb";
import { TbShoppingCartUp } from "react-icons/tb";
import { FaRegMessage } from "react-icons/fa6";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiArrowSmallRight } from "react-icons/hi2";
import { CiHome } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { VscSave } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MenuBottom() {
    return (
        <div style={{ display: 'flex', justifyContent: "space-around", position: "sticky", bottom: "0", background: "white" }}>
            <div>
                <Link to="/" style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                    <CiHome style={{ width: "40px", height: "40px" }} />
                    <p style={{ margin: "0", display: "flex", justifyContent: "center" }}>Home</p>
                </Link>

            </div>
            <div>
                <Link to="/order" style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                    <CiViewList style={{ width: "40px", height: "40px" }} />
                    <p style={{ margin: "0", display: "flex", justifyContent: "center" }}>Order</p>
                </Link>
            </div>
            <div>
                <div><IoIosAddCircleOutline style={{ width: "40px", height: "40px", }} />
                    <p style={{ margin: "0", display: "flex", justifyContent: "center" }}>UPI</p>
                </div>
            </div>
            <div><AiOutlineTeam style={{ width: "40px", height: "40px" }} />
                <p style={{ margin: "0" }}>Team</p></div>
            <div><VscSave style={{ width: "40px", height: "40px" }} />
                <p style={{ margin: "0", display: "flex", justifyContent: "center" }}>My</p></div>


        </div>

    );
}