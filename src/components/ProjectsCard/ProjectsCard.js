import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaEye, FaCode, FaWindows, FaAndroid } from "react-icons/fa";
import Data from "./data.json";
import "./ProjectsCard.css";

const styleIconBtns = { color: 'white', fontSize: '35px' };/**Button's icon style */

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
                    if (data.isWebsite === true) {
                        return (
                            <Container key={i}>
                                {/**Start  project */}
                                <Row className="row">
                                    <Col sm={"6"} className="tc">
                                        <div className="project ml2 navy animate__animated animate__fadeInLeft" id={data.id}>
                                            <div className="tc">

                                                <h2>
                                                    {data.title}
                                                </h2>
                                            </div>

                                            <div className="tc">
                                                <p className="f3">
                                                    {data.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col sm={"6"} className="tc">
                                        <div className="imgCard">

                                            <Image src={data.image} rounded fluid className="imgProject" alt="" />

                                            <div className="tc mt4">
                                                <a href={data.urlBtnLive} target="_blank" className="btnLive f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaEye style={styleIconBtns} />
                                                </a>
                                                <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaCode style={styleIconBtns} />
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
                                    <Col sm={"6"} className="tc">
                                        <div className="project ml2 navy animate__animated animate__fadeInLeft" id={data.id}>
                                            <div className="tc">

                                                <h2>
                                                    {data.title}
                                                </h2>
                                            </div>

                                            <div className="tc">
                                                <p className="f3">
                                                    {data.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col sm={"6"} className="tc">
                                        <div className="imgCard">

                                            <Image src={data.image} rounded fluid className="imgProject" alt="" />

                                            <div className="tc mt4">
                                                <a href={data.urlBtnWindows} target="_blank" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaWindows style={styleIconBtns} />
                                                </a>
                                                <a href={data.urlBtnAndroid} target="_blank" className="btnAndroid f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaAndroid style={styleIconBtns} />
                                                </a>
                                                <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaCode style={styleIconBtns} />
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
                    else{
                        return(
                            <Container key={i}>
                                {/**Start  project */}
                                <Row className="row">
                                    <Col sm={"6"} className="tc">
                                        <div className="project ml2 navy animate__animated animate__fadeInLeft" id={data.id}>
                                            <div className="tc">

                                                <h2>
                                                    {data.title}
                                                </h2>
                                            </div>

                                            <div className="tc">
                                                <p className="f3">
                                                    {data.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col sm={"6"} className="tc">
                                        <div className="imgCard">

                                            <Image src={data.image} rounded fluid className="imgProject" alt="" />

                                            <div className="tc mt4">
                                                <a href={data.urlBtnWindows} target="_blank" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaWindows style={styleIconBtns} />
                                                </a>
                                                <a href={data.urlBtnCode} target="_blank" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                    <FaCode style={styleIconBtns} />
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
                                <h3>
                                    {showMoreData > 3 ? 'Show less ' : 'Show More'}
                                </h3>
                            </span>
                        </div>
                    )
                }
            </div>
        </div>

    );
}

export default ProjectsCard