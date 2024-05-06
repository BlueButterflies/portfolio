import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";
import { FaEye, FaWindows, FaAndroid, FaDownload, FaCode } from "react-icons/fa";
import Data from "./data.json";
import { Carousel } from "react-bootstrap";

const ProjectsCard = () => {
    return (
        <div className="projects">
            <h1 className="tc navy">Projects</h1>
            <Carousel data-bs-theme="dark">
                {
                    Data.map((data) => {
                        if (data.isWebsite) {
                            return (
                                <Carousel.Item>
                                    <img
                                        className="images d-block w-100"
                                        src={data.image}
                                        alt="websites"
                                    />
                                    <Carousel.Caption className="infoProjects">
                                        <div className="tc btns">
                                            <a href={data.urlBtnLive} target="_blank" className="btnLive f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaEye className="btnLiveIcon" /><b>Live</b>
                                            </a>
                                            <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaCode className="btnSourceIcon" /><b>Source</b>
                                            </a>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        } else if (data.isAndroid && data.isWindows) {
                            return(
                                <Carousel.Item>
                                <img
                                    className="images d-block w-100"
                                    src={data.image}
                                    alt="gameApp"
                                />
                                <Carousel.Caption className="infoProjects">
                                    <h5>{data.title}</h5>
                                    <p>{data.description}</p>

                                    <div className="tc btns">
                                        <a href={data.urlBtnWindows} target="_blank" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaWindows className="btnWindowsIcon" /><b><FaDownload className="download" /></b>
                                        </a>
                                        <a href={data.urlBtnAndroid} target="_blank" className="btnAndroid f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaAndroid className="btnAndroidIcon" /><b><FaDownload className="download" /></b>
                                        </a>
                                        <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaCode className="btnSourceIcon" /><b>Source</b>
                                        </a>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            )
                        } else if (data.isWindows) {
                            return(
                                <Carousel.Item>
                                <img
                                    className="images d-block w-100"
                                    src={data.image}
                                    alt="desktopApp"
                                />
                                <Carousel.Caption className="infoProjects">
                                    <h5>{data.title}</h5>
                                    <p>{data.description}</p>

                                    <div className="tc btns">
                                        <a href={data.urlBtnWindows} target="_blank" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaWindows className="btnWindowsIcon" /><b><FaDownload className="download" /></b>
                                        </a>
                                        <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaCode className="btnSourceIcon" /><b>Source</b>
                                        </a>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            )
                        } else if (data.isAndroid) {
                            return(
                                <Carousel.Item>
                                <img
                                    className="images d-block w-100"
                                    src={data.image}
                                    alt="androidApp"
                                />
                                <Carousel.Caption className="infoProjects">
                                    <h5>{data.title}</h5>
                                    <p>{data.description}</p>

                                    <div className="tc btns">
                                        <a href={data.urlBtnWindows} target="_blank" className="btnAndroid f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaAndroid className="btnAndroidIcon" /><b><FaDownload className="download" /></b>
                                        </a>
                                        <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaCode className="btnSourceIcon" /><b>Source</b>
                                        </a>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            )
                        }
                    })
                }
            </Carousel>
        </div>
    );
}

export default ProjectsCard