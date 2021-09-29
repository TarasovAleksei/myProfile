import React from "react";
import {Tabs, TabPanel} from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from "simple-react-lightbox";
import {FiPlus} from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
};


const AllPortfolioContent = [
    {
        img: "todo",
        title: "Todo-list",
        subTitle: "React+TS+Material.UI",
        alterText: "https://github.com/TarasovAleksei/todolist",
    },
    {
        img: "social",
        title: "Social network",
        subTitle: "React+TS",
        alterText: "Social network",
    },
    {
        img: "uikit",
        title: "UI kit",
        subTitle: "React+TS+AntDesign",
        alterText: "UI kit",
    },
    {
        img: "chat",
        title: "Chat",
        subTitle: "React+JS+Material.UI",
        alterText: "Chat",
    },
    {
        img: "html",
        title: "HTML/CSS-1",
        subTitle: "SASS",
        alterText: "HTML/CSS-1",
    },
    {
        img: "html",
        title: "HTML/CSS-2",
        subTitle: "SASS",
        alterText: "HTML/CSS-2",
    },
    {
        img: "html",
        title: "HTML/CSS-3",
        subTitle: "SASS",
        alterText: "HTML/CSS-3",
    },
    {
        img: "html",
        title: "HTML/CSS-4",
        subTitle: "SASS",
        alterText: "HTML/CSS-4",
    },
];

const Portfolio = () => {
    return (
        <SimpleReactLightbox>
            <div className="portfolio-filter-01">
                <Tabs>
                    <SRLWrapper>
                        <TabPanel>
                            <div className="portfolio-content ">
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column"
                                >
                                    {AllPortfolioContent.map((val, i) => (
                                        <div className="portfolio-box-01" key={i}>
                                            <div className="portfolio-img">
                                                <div className="portfolio-info">
                                                    <h5>{val.title}</h5>
                                                    <span>{val.subTitle}</span>
                                                </div>
                                                <a
                                                    href='https://github.com/TarasovAleksei/todolist'
                                                    className="gallery-link"
                                                >
                                                    <img
                                                        src={`img/portfolio/${val.img}.jpg`} alt={val.alterText}
                                                    />
                                                </a>
                                                <div className="portfolio-icon">
                                                    <FiPlus/>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Masonry>
                            </div>
                        </TabPanel>
                    </SRLWrapper>
                </Tabs>
            </div>
        </SimpleReactLightbox>
    );
};

export default Portfolio;
