import React from "react";
import {Tabs, TabPanel} from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import {SRLWrapper} from "simple-react-lightbox";
import {FiPlus} from "react-icons/fi";
import Masonry from "react-masonry-css";
import todoPhoto from '../../assets/img/portfolio/todo.jpg'
import socPhoto from '../../assets/img/portfolio/social.jpg'
import uikitPhoto from '../../assets/img/portfolio/uikit.jpg'
import chat from '../../assets/img/portfolio/chat.jpg'
import html from '../../assets/img/portfolio/html.jpg'
import table from '../../assets/img/portfolio/table.jpg'


const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
};

const AllPortfolioContent = [
    {
        img: todoPhoto,
        title: "Todo-list",
        subTitle: "React+Redux+TS+Material.UI",
        alterText: `https://github.com/TarasovAleksei/todolist`
    },
    {
        img: socPhoto,
        title: "Social network",
        subTitle: "React+Redux+TS",
        alterText: "https://github.com/TarasovAleksei/social_network",
    },
    {
        img: uikitPhoto,
        title: "UI kit",
        subTitle: "React+Redux+TS+AntDesign",
        alterText: "https://github.com/TarasovAleksei/tasks_by_Ignat",
    },
    {
        img: chat,
        title: "Chat",
        subTitle: "React+Redux+Material.UI",
        alterText: "https://github.com/TarasovAleksei/ChatReactClass",
    },
    {
        img: table,
        title: "dynamicTable",
        subTitle: "React+Redux+Material.UI",
        alterText: "https://github.com/TarasovAleksei/dynamicTable",
    },
    {
        img: html,
        title: "HTML/CSS-1",
        subTitle: "SASS",
        alterText: "https://github.com/TarasovAleksei/HTML-CSS1",
    },
    {
        img: html,
        title: "HTML/CSS-2",
        subTitle: "SASS",
        alterText: "https://github.com/TarasovAleksei/HTNL-CSS2",
    },
    {
        img: html,
        title: "HTML/CSS-3",
        subTitle: "SASS",
        alterText: "https://github.com/TarasovAleksei/HTNL-CSS2",
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
                                        <a target={'_blank'} href={val.alterText} className="portfolio-box-01" key={i}>
                                            <div className="portfolio-img">
                                                <div className="portfolio-info">
                                                    <h5>{val.title}</h5>
                                                    <span>{val.subTitle}</span>
                                                </div>
                                                <div

                                                    className="gallery-link"
                                                >
                                                    <img
                                                        src={val.img} alt={val.alterText}
                                                    />
                                                </div>
                                                <div className="portfolio-icon">
                                                    <FiPlus/>
                                                </div>
                                            </div>
                                        </a>
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
