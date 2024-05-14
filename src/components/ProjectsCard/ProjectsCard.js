import React from "react";
import { FaEye, FaWindows, FaAndroid, FaCode } from "react-icons/fa";
import Data from "./data.json";


const ProjectsCard = () => {
    return (
        <div className="projects">
            <h1 className="tc navy">Projects</h1>
            <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">

                {
                    Data.map((data) => {

                        if (data.isWebsite) {

                            return (
                                <div className="card d-flex position-relative flex-column" key={data.id}>
                                    <div className='imgContainer'>
                                        <img src={data.image} className="img" alt="projectImage" />
                                    </div>
                                    <div className="content navy">
                                        <h2>{data.title}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className="tc btns">
                                        <a href={data.urlBtnLive} target="_blank" rel="noreferrer" className="btnLive f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaEye className="btnLiveIcon" />
                                        </a>
                                        <a href={data.urlBtnCode} target="_blank" rel="noreferrer" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaCode className="btnSourceIcon" />
                                        </a>
                                    </div>

                                </div>
                            )
                        } else if (data.isAndroid && data.isWindows) {
                            return (
                                <div className="card d-flex position-relative flex-column" key={data.id}>
                                    <div className='imgContainer'>
                                        <img src={data.image} className="img" alt="projectImage" />
                                    </div>
                                    <div className="content navy">
                                        <h2>{data.title}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className="tc btns">
                                        <a href={data.urlBtnWindows} target="_blank" rel="noreferrer" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaWindows className="btnWindowsIcon" />
                                        </a>
                                        <a href={data.urlBtnAndroid} target="_blank" rel="noreferrer" className="btnAndroid f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaAndroid className="btnAndroidIcon" />
                                        </a>
                                        <a href={data.urlBtnCode} target="_blank" rel="noreferrer" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaCode className="btnSourceIcon" />
                                        </a></div>
                                </div>
                            )
                        } else if (data.isWindows) {
                            return (
                                <div className="card d-flex position-relative flex-column" key={data.id}>
                                    <div className='imgContainer'>
                                        <img src={data.image} className="img" alt="projectImage" />
                                    </div>
                                    <div className="content navy">
                                        <h2>{data.title}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className="tc btns">
                                        <a href={data.urlBtnWindows} target="_blank" rel="noreferrer" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaWindows className="btnWindowsIcon" />
                                        </a>
                                        <a href={data.urlBtnCode} target="_blank" rel="noreferrer" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaCode className="btnSourceIcon" />
                                        </a>
                                    </div>
                                </div>
                            )

                        } else if (data.isAndroid) {
                            return (
                                <div className="card d-flex position-relative flex-column" key={data.id}>
                                    <div className='imgContainer'>
                                        <img src={data.image} className="img" alt="projectImage" />
                                    </div>
                                    <div className="content navy">
                                        <h2>{data.title}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className="tc btns">
                                        <a href={data.urlBtnWindows} target="_blank" rel="noreferrer" className="btnAndroid f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaAndroid className="btnAndroidIcon" />
                                        </a>
                                        <a href={data.urlBtnCode} target="_blank" rel="noreferrer" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                            <FaCode className="btnSourceIcon" />
                                        </a>
                                    </div>
                                </div>
                            )
                        } else {
                            return null
                        }
                    })
                }
            </div>
        </div>
    );
}

export default ProjectsCard