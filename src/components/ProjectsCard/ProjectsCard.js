import React, {useState} from "react";
import {Container, Card, Row, Col, Button, Image} from "react-bootstrap";
import { FaEye, FaWindows, FaAndroid, FaDownload, FaCode } from "react-icons/fa";
import Data from "./data.json";

const ProjectsCard = () => {
    const [showMoreData, setShowMoreData] = useState(3);
    const showMore = () => {
        if(showMoreData === 3){
            setShowMoreData(Data.length);
        }else if(showMoreData > 3){
            setShowMoreData(3);
        }
    }
    return (
        
        <div className="projects">
            <h1 className=" tc navy">Projects</h1>

            {
                Data.slice(0, showMoreData).map((data ,i) => {
                    if (data.isWebsite) {
                        return (
                            <Container key={i}>
                                {/**Start  project */}
                                <Row className="row">
                                    <Col sm={"12"} md={"6"} xs={"12"} className="tc">
                                        <div className="imgCard tc">

                                            <Image src={data.image} rounded fluid className="imgProject" alt="" />

                                        </div>
                                    </Col>

                                    <Col sm={"12"} md={"6"} xs={"12"}className="tc">
                                        <div className="project ml2 navy animate__animated animate__zoomInUp" id={data.id}>
                                            <div className="projectTitle tc">

                                                <h2>
                                                    {data.title}
                                                </h2>

                                            </div>

                                            <div className="projectDescription tc f3">
                                                {data.description}
                                            </div>

                                            <div className="tc btns">
                                                <a href={data.urlBtnLive} target="_blank" className="btnLive f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaEye className="btnLiveIcon" /><b>Live</b>
                                                </a>
                                                <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaCode className="btnSourceIcon" /><b>Source</b>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                
                                <hr />
                                {/**End  project */}
                            </Container>
                        )
                    }else if(data.isAndroid && data.isWindows){
                        return (
                            <Container key={i}>
                                {/**Start  project */}
                                <Row className="row">
                                    <Col sm={"12"} md={"6"} xs={"12"} className="tc">
                                        <div className="imgCard tc">

                                            <Image src={data.image} rounded fluid className="imgProject" alt="" />

                                        </div>
                                    </Col>

                                    <Col sm={"12"} md={"6"} xs={"12"} className="tc">
                                        <div className="project ml2 navy animate__animated animate__zoomInUp" id={data.id}>
                                            <div className="projectTitle tc">
                                                <h2>
                                                    {data.title}
                                                </h2>
                                            </div>

                                            <div className="projectDescription tc f3">
                                                {data.description}
                                            </div>

                                            <div className="tc btns">
                                                <a href={data.urlBtnWindows} target="_blank" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaWindows className="btnWindowsIcon" /><b><FaDownload className="download"/></b>
                                                </a>
                                                <a href={data.urlBtnAndroid} target="_blank" className="btnAndroid f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaAndroid className="btnAndroidIcon" /><b><FaDownload className="download"/></b>
                                                </a>
                                                <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaCode className="btnSourceIcon" /><b>Source</b>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <hr />
                                {/**End  project */}
                            </Container>
                        )
                    }
                    else if(data.isWindows){
                        return(
                            <Container key={i}>
                                {/**Start  project */}
                                <Row className="row">
                                    <Col sm={"12"} md={"6"} xs={"12"} className="tc">
                                        <div className="imgCard tc">

                                            <Image src={data.image} rounded fluid className="imgProject" alt="" />

                                        </div>
                                    </Col>

                                    <Col sm={"12"} md={"6"} xs={"12"} className="tc">
                                        <div className="project ml2 navy animate__animated animate__zoomInUp" id={data.id}>
                                            <div className="projectTitle tc">
                                                <h2>
                                                    {data.title}
                                                </h2>
                                            </div>

                                            <div className="projectDescription tc f3">
                                                    {data.description}
                                            </div>

                                            <div className="tc btns">
                                                <a href={data.urlBtnWindows} target="_blank" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaWindows className="btnWindowsIcon" /><b><FaDownload className="download"/></b>
                                                </a>
                                                <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaCode className="btnSourceIcon" /><b>Source</b>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <hr />
                                {/**End  project */}
                            </Container>
                        )
                    }
                    else if(data.isAndroid){
                        return(
                            <Container key={i}>
                                {/**Start  project */}
                                <Row className="row">
                                    <Col sm={"12"} md={"6"} xs={"12"} className="tc">
                                        <div className="imgCard tc">

                                            <Image src={data.image} rounded fluid className="imgProject" alt="" />

                                        </div>
                                    </Col>

                                    <Col sm={"12"} md={"6"} xs={"12"} className="tc">
                                        <div className="project ml2 navy animate__animated animate__zoomInUp" id={data.id}>
                                            <div className="projectTitle tc">
                                                <h2>
                                                    {data.title}
                                                </h2>
                                            </div>

                                            <div className="projectDescription tc f3">
                                                    {data.description}
                                            </div>

                                            <div className="tc btns">
                                                <a href={data.urlBtnWindows} target="_blank" className="btnAndroid f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaAndroid className="btnAndroidIcon" /><b><FaDownload className="download"/></b>
                                                </a>
                                                <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaCode className="btnSourceIcon" /><b>Source</b>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <hr />
                                {/**End  project */}
                            </Container>
                        )
                    }
                })
            }

            <div className="moreLessBtn">
                {
                    Data.length > 3 && (
                        <div className="flex items-center justify-center">
                            <span onClick={showMore} className="tc no-underline inline-flex items-center ba br4 pointer">
                               {showMoreData > 3 ? 'Show less' : 'Show More'}
                            </span>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ProjectsCard