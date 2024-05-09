import React from "react";
import { FaEye, FaWindows, FaAndroid, FaCode } from "react-icons/fa";
import Data from "./data.json";


const ProjectsCard = () => {
    return (
        <div className="projects">
            <h1 className="tc navy">Projects</h1>
            <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">

                {
                    Data.map((data) => {
                        const imageProject = data.image;
                        const title = data.title;
                        const description = data.description;
                        const urlBtnLive = data.urlBtnLive;
                        const urlBtnCode = data.urlBtnCode;
                        const urlBtnAndroid = data.urlBtnAndroid;
                        const urlBtnWindows = data.urlBtnWindows;
                        const isWebsite =  data.isWebsite;
                        const isAndroid = data.isAndroid;
                        const isWindows = data.isWindows;

                        if (isWebsite) {

                            return (
                                <div class="card d-flex position-relative flex-column">
                                    <div class='imgContainer'>
                                        <img src={imageProject} className="img" alt="projectImage"/>
                                    </div>
                                    <div class="content navy">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <div className="tc btns">
                                            <a href={urlBtnLive} target="_blank" rel="noreferrer" className="btnLive f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaEye className="btnLiveIcon" />
                                            </a>
                                            <a href={urlBtnCode} target="_blank" rel="noreferrer" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaCode className="btnSourceIcon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (isAndroid && isWindows) {
                            return (
                                <div class="card d-flex position-relative flex-column">
                                    <div class='imgContainer'>
                                        <img src={imageProject} className="img"  alt="projectImage"/>
                                    </div>
                                    <div class="content navy">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <div className="tc btns">
                                            <a href={urlBtnWindows} target="_blank" rel="noreferrer" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaWindows className="btnWindowsIcon" />
                                            </a>
                                            <a href={urlBtnAndroid} target="_blank" rel="noreferrer" className="btnAndroid f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaAndroid className="btnAndroidIcon" />
                                            </a>
                                            <a href={urlBtnCode} target="_blank" rel="noreferrer" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaCode className="btnSourceIcon" />
                                            </a>
                                        </div>
                                    </div>


                                </div>
                            )
                        } else if (isWindows) {
                            return (
                                <div class="card d-flex position-relative flex-column">
                                    <div class='imgContainer'>
                                        <img src={imageProject} className="img"  alt="projectImage"/>
                                    </div>
                                    <div class="content navy">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <div className="tc btns">
                                            <a href={urlBtnWindows} target="_blank" rel="noreferrer" className="btnWindows f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaWindows className="btnWindowsIcon" />
                                            </a>
                                            <a href={urlBtnCode} target="_blank" rel="noreferrer" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaCode className="btnSourceIcon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )

                        } else if (isAndroid) {
                            return (
                                <div class="card d-flex position-relative flex-column" >
                                    <div class='imgContainer'>
                                        <img src={imageProject} className="img"  alt="projectImage"/>
                                    </div>
                                    <div class="content navy">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <div className="tc btns">
                                            <a href={urlBtnWindows} target="_blank" rel="noreferrer" className="btnAndroid f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaAndroid className="btnAndroidIcon" />
                                            </a>
                                            <a href={urlBtnCode} target="_blank" rel="noreferrer" className="btnSource f3 tc no-underline inline-flex items-center ba br4 pointer">
                                                <FaCode className="btnSourceIcon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }else{
                            return null
                        }

                    })
                }
            </div>
        </div>
    );
}

export default ProjectsCard