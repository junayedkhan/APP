import React, { useEffect } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ProductSlider from "./ProductSlider"
import ProdcutPrice from "./ProductPrice"
import AffliateMarket from "./AfiliateMarket"
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import{ SelectedProduct, RemoveSelectedProduct } from "../../redux/actions/ProductActions"
import preloaderZif from "../../Image/1484 (1).gif"

const ProductDetails = () => {

    const product = useSelector(state => state.product)
    const {title, image} = product
    const {productID} = useParams()
    const disPatch = useDispatch()
    console.log(product);

    const facthData = async() => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productID}`)
        .catch((err) => {
            console.log(err);
        })
        disPatch(SelectedProduct(res.data))
    }

    useEffect(()=> {
        if(productID && productID !== "") facthData()
        return() => {
            disPatch(RemoveSelectedProduct())
        }
    },[productID])

    return (  
        <>
        {Object.keys(product).length === 0 ?
        (<div className="preloader"><img src={preloaderZif} alt="loading..." /></div>) : (
        <main>
        <section className="product_into">
        <div className="container">
            <div className="row">

                 <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="product_img_slider">
                        <ProductSlider img={image} />
                    </div>
                </div>
    
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="product_details">
                        <div className="product_title">
                            <h1>Vivo e7 pro</h1>
                            <p>{title}</p>
                        </div>
                        <div className="product_price">
                            <div className="row">
                                {ProdcutPrice.map((props, index)=> {
                                    return(
                                    <div className="col text-center" key={index}>
                                        <div className="price"> 
                                            <p>{props.title}</p>
                                            <span>{props.price01}<br/>{props.price02}<br/>{props.price03}</span>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
    
                        <ul className="affiliate_market">
                            {AffliateMarket.map((props, index) => {
                                return(
                                    <li className="affiliate_link" key={index}>
                                      <NavLink exact to=""><img src={props.src} alt={props.name} width="100px" height="50px" /></NavLink>
                                      <span>{props.price}</span>
                                      <NavLink exact to=""><button>Buy Now</button></NavLink>
                                    </li>
                                )
                            })}
                        </ul>
    
                    </div>
                </div>
    
            </div>
        </div>
        </section>

        <section className="product_specification">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="product_name">
                        <h2>Vivo e7 pro - Full Specifications</h2>
                        </div>
                        <div className="specification">

                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th><span>Lunch</span></th>
                                    <th className="specification_icon"><span><i className="far fa-calendar-alt"></i></span></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Announced</td>
                                    <td className="spec_value">2021, May 18</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Status</td>
                                    <td className="spec_value">Available. Released 2021, June 20</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th><span>Network</span></th>
                                    <th className="specification_icon"><span><i className="fas fa-network-wired"></i></span></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Technology</td>
                                    <td className="spec_value">GSM / HSPA / LTE / 5G</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">2G bands</td>
                                    <td className="spec_value">GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">3G bands</td>
                                    <td className="spec_value">HSDPA 850 / 900 / 2100</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">4G bands</td>
                                    <td className="spec_value">1, 3, 5, 8, 40</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">5G bands</td>
                                    <td className="spec_value">SA/NSA</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Speed</td>
                                    <td className="spec_value">HSPA 42.2/5.76 Mbps, LTE-A</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">GPRS</td>
                                    <td className="spec_value">Yes</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">EDGE</td>
                                    <td className="spec_value">Yes</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>Body</h5> <span><i className="fas fa-mobile-alt"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Dimensions</td>
                                    <td className="spec_value">163.9 x 75.3 x 8.4 mm (6.45 x 2.96 x 0.33 in)</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Weight</td>
                                    <td className="spec_value">193 g (6.81 oz)</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">SIM</td>
                                    <td className="spec_value">Dual SIM (Nano-SIM, dual stand-by)</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>Display</h5> <span><i className="fas fa-desktop"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Type</td>
                                    <td className="spec_value">Super AMOLED capacitive touchscreen, 16M colors</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Size</td>
                                    <td className="spec_value">6.58 inches, 104.3 cm2 (~84.5% screen-to-body ratio)</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Resolution</td>
                                    <td className="spec_value">1080 x 2408 pixels, 20:9 ratio (~401 ppi density)</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Multitouch</td>
                                    <td className="spec_value">Yes</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>Platform</h5> <span><i className="fas fa-microchip"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">OS</td>
                                    <td className="spec_value">Android 11, Funtouch 11</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Chipset</td>
                                    <td className="spec_value">MediaTek MT6833 Dimensity 700 5G (7 nm)</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">CPU</td>
                                    <td className="spec_value">Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">GPU</td>
                                    <td className="spec_value">Mali-G57 MC2</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>Memory</h5> <span><i className="fas fa-sd-card"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Card slot</td>
                                    <td className="spec_value">microSDXC (uses shared SIM slot)</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Internal</td>
                                    <td className="spec_value"> 64 GB / 128 GB</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">RAM</td>
                                    <td className="spec_value">4 GB / 6 GB</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>Camera</h5> <span><i className="fas fa-camera"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Primary camera</td>
                                    <td className="spec_value">48 MP, f/1.8, (wide), 1/2.0", 0.8µm, PDAF <br />2 MP, f/2.4, (macro)<br />2 MP, f/2.4, (depth)</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Secondary camera</td>
                                    <td className="spec_value">8 MP, f/2.0, (wide)</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Features</td>
                                    <td className="spec_value">LED flash, HDR, panorama, HDR</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Video</td>
                                    <td className="spec_value">1080p@30fps, gyro-EIS | 1080p@30fps</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>Sound</h5> <span><i className="fas fa-volume-up"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Alert types</td>
                                    <td className="spec_value">Vibration, MP3, WAV ringtones</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Loudspeaker</td>
                                    <td className="spec_value">Yes</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">3.5mm jack</td>
                                    <td className="spec_value">Yes</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>Connectivity</h5> <span><i className="fab fa-bluetooth"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">WLAN</td>
                                    <td className="spec_value">Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Bluetooth</td>
                                    <td className="spec_value">5.0, A2DP, LE</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">GPS</td>
                                    <td className="spec_value">Yes, with A-GPS, GLONASS, GALILEO, BDS</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">NFC</td>
                                    <td className="spec_value">Yes</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">FM radio</td>
                                    <td className="spec_value">Yes</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">USB</td>
                                    <td className="spec_value">Yes</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Infrared port</td>
                                    <td className="spec_value">No</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>Features</h5> <span><i className="fas fa-fingerprint"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Sensors</td>
                                    <td className="spec_value">Fingerprint (side-mounted), accelerometer, gyro, proximity, compass</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Messaging</td>
                                    <td className="spec_value">SMS(threaded view), MMS, Email, IM</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Browser</td>
                                    <td className="spec_value">HTML5</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Java</td>
                                    <td className="spec_value">No</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>Battery</h5> <span><i className="fas fa-battery-full"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Battery type</td>
                                    <td className="spec_value">Non-removable Li-Po</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Battery capacity</td>
                                    <td className="spec_value">5000 mAh</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Charging</td>
                                    <td className="spec_value">Fast charging 18W</td>
                                </tr>
                                </tbody>
                            </table>

                            <table className="table table-hover">
                                <div className="specification_title">
                                    <h5>More</h5> <span><i className="fas fa-info-circle"></i></span>
                                </div>
                                <tbody>
                                <tr>
                                    <td className="spec_title">Made by</td>
                                    <td className="spec_value">China</td>
                                </tr>
                                <tr>
                                    <td className="spec_title">Color</td>
                                    <td className="spec_value">Shiny Black, Glacier Blue</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                    <div className="col-md-4">

                    </div>

                </div>

            </div>
        </section>
        </main>
        )}
        </>
    );
}

export default ProductDetails;