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
import MenuBottom from "./MenuBottom";

const Home = () => {
    const images = [
        "/Images/5.jpg",
        "Images/6.jpg",
        "Images/7.jpg",
        "Images/8.jpg",
    ]
    return (
        <div className="box1" style={styles.box1}>
            <div className="box11" style={{ zIndex: "1", background: "#BBF090", height: "40px", display: "flex", justifyContent: "space-between", position: "sticky", top: "0px" }}>
                <div style={{ display: "flex", alignItems: "center" }}><h3 style={{ marginLeft: "10px" }}>jeeto Deal</h3></div>
                <div style={{ display: "flex", alignItems: "center" }}><FaRegMessage style={{ width: "25px", height: "25px", marginRight: "10px" }} /></div>
            </div>
            <div className="box11" id="box112" style={{ height: "250px", display: "flex", justifyContent: "center" }}>
                <ImgSlider />
            </div>
            <div className="box11" id="box113" style={{ height: "100px", display: "flex", marginTop: "12px", justifyContent: "space-around" }}>
                <Link to="/order" style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: '45%', display: "flex", justifyContent: "space-around", backgroundColor: "#5EF527", borderRadius: "12px"
                }}>  
                    <div>
                        <div><CgArrowBottomLeft style={{ width: "40px", height: "40px" }} /></div>
                        <div><h2 style={{ margin: "0" }}>Buy</h2></div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "12px" }}><TbShoppingCartDown style={{ width: "50px", height: "50px" }} /></div>
                
                </Link>
                <div style={{ width: '45%', display: "flex", justifyContent: "space-around", backgroundColor: "#27CCF5", borderRadius: "12px" }}>
                    <div >
                        <div><CgArrowTopRight style={{ width: "40px", height: "40px" }} /></div>
                        <div><h2 style={{ margin: "0" }}>Sell</h2></div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}><TbShoppingCartUp style={{ width: "50px", height: "50px" }} /></div>

                </div>
            </div>
            <div className="box11" id="box114" style={{ marginTop: "12px", height: "215px", background: "#f2f2f2" }}>
                <div style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.25)" }}>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <h1>Buy DCoin by USDT</h1>
                            <h3>5.32% profit per each order</h3>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <HiOutlineArrowCircleRight style={{ width: "40px", height: "40px" }} />
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <p style={{ margin: "0" }}>Binance Price(Rs)</p>
                            <h1 style={{ margin: "0" }}>94</h1>
                        </div>
                        <div >
                            <p style={{ margin: "0" }}>Binance Price(Rs)</p>
                            <h1 style={{ margin: "0" }}>94</h1>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="box11" id="box115" style={{ marginTop: "12px", height: "80px", background: "#f2f2f2" }}>

                <div style={{ display: 'flex', justifyContent: "space-around" }}>
                    <div>
                        <h1 style={{ margin: "0" }}>Buy Dcoin by Rupee</h1>
                        <p style={{ margin: "0" }}>--profit per each order</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: "center", justifyContent: "right" }}>
                        <HiOutlineArrowCircleRight style={{ width: "40px", height: "40px" }} />
                    </div>
                </div>
            </div>
            <div className="box11" id="box116" style={{ height: "220px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", height: "25%" }}>
                    <div><h3 >Tutorial</h3></div>
                    <div><h3 >MORE</h3></div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", height: "75%" }}>
                    <div style={{ width: "95%", height: "100%", background: "#f2f2f2" }}>
                        <div style={{ marginBottom: "3px", display: "flex", justifyContent: "space-around", height: "50%", boxShadow: "0 0 20px rgba(0, 0, 0, 0.25)" }}>
                            <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: "60px", height: "60px" }}>
                                    <img src={images[0]} alt="" srcset="" style={{ height: "100%", width: "100%" }} />
                                </div>
                            </div>
                            <div style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "4px" }}>
                                <h3 style={{ margin: "0" }}>Platform Introduction</h3>
                                <p style={{ margin: "0" }}>18/02/2025 09:52:09</p>
                            </div>
                            <div style={{ width: "15%", display: "flex", justifyContent: "right" }}>
                                <HiArrowSmallRight />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around", height: "50%", background: "#f2f2f2" }}>
                            <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: "60px", height: "60px" }}>
                                    <img src={images[1]} alt="" srcset="" style={{ height: "100%", width: "100%" }} />
                                </div>
                            </div>
                            <div style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "4px" }}>
                                <h3 style={{ margin: "0" }}>Platform Introduction</h3>
                                <p style={{ margin: "0" }}>18/02/2025 09:52:09</p>
                            </div>
                            <div style={{ width: "15%", display: "flex", justifyContent: "right" }}>
                                <HiArrowSmallRight />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="box11" id="box116" style={{ height: "220px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", height: "25%" }}>
                    <div><h3 >Policies</h3></div>
                    <div><h3 >MORE</h3></div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", height: "75%" }}>
                    <div style={{ width: "95%", height: "100%", background: "#f2f2f2" }}>
                        <div style={{ marginBottom: "3px", display: "flex", justifyContent: "space-around", height: "50%", boxShadow: "0 0 20px rgba(0, 0, 0, 0.25)" }}>
                            <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: "60px", height: "60px" }}>
                                    <img src={images[2]} alt="" srcset="" style={{ height: "100%", width: "100%" }} />
                                </div>
                            </div>
                            <div style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "4px" }}>
                                <h3 style={{ margin: "0" }}>Invite friend to earn extra rewards</h3>
                                <p style={{ margin: "0" }}>18/02/2025 09:52:09</p>
                            </div>
                            <div style={{ width: "15%", display: "flex", justifyContent: "right" }}>
                                <HiArrowSmallRight />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around", height: "50%", background: "#f2f2f2" }}>
                            <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: "60px", height: "60px" }}>
                                    <img src={images[3]} alt="" srcset="" style={{ height: "100%", width: "100%" }} />
                                </div>
                            </div>
                            <div style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "4px" }}>
                                <h3 style={{ margin: "0" }}>Important Guidelines</h3>
                                <p style={{ margin: "0" }}>18/02/2025 09:52:09</p>
                            </div>
                            <div style={{ width: "15%", display: "flex", justifyContent: "right" }}>
                                <HiArrowSmallRight />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <MenuBottom />

        </div>
    );

}
const styles = {
    box1: {
        width: "100vw",
    }
};
export default Home;

