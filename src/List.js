import React from 'react';
import dateFormat from "dateformat";
const ListComponent = ({ articles }) => {
  

    return (
        <div>
            <div className="container">
                <div className="row">
                   
                    {
                        articles.map((article) => (
                            <div className="col-xl-12">
                            <div className="card mb-3 card-body">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <a href="#!.html">
                                            <img src={article.node.ImageStyle_thumbnail} className="width-90 rounded-3" alt="" />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <div className="overflow-hidden flex-nowrap">
                                            <h6 className="mb-1">
                                                <a href="#!" className="text-reset">{article.node.title}</a>
                                            </h6>
                                            <span className="text-muted d-block mb-2 small">
                                                {/* {dateFormat(article.node.last_update, "dddd, mmmm dS, yyyy, h:MM TT")} */}
                                                {dateFormat(article.node.last_update, "mmm d, yyyy, h:MM TT Z")}

                                            </span><br />
                                            <div className="row align-items-center">
                                                <div className="col-12">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col-auto">
                                                            <small className="me-2">Auther:</small>
                                                        </div>
                                                        <div className="col">
                                                           
                                                        {article.node.author_name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> <br />
                                            <div className="row align-items-center">
                                                <div className="col-12">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col-auto">
                                                            <small className="me-2">Views:</small>
                                                        </div>
                                                        <div className="col">
                                                           
                                                        {article.node.views_count}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                   


                    {/* <div className="col-xl-12">
                        <div className="card mb-3 card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <a href="#!.html">
                                        <img src="https://www.bootdey.com/image/280x280/00FFFF/000000" className="width-90 rounded-3" alt="" />
                                    </a>
                                </div>
                                <div className="col">
                                    <div className="overflow-hidden flex-nowrap">
                                        <h6 className="mb-1">
                                            <a href="#!" className="text-reset">CRM dashboard landing page</a>
                                        </h6>
                                        <span className="text-muted d-block mb-2 small">
                                            Updated 2 Hours Ago
                                        </span>
                                        <div className="row align-items-center">
                                            <div className="col-12">
                                                <div className="row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <small className="me-2">25%</small>
                                                    </div>
                                                    <div className="col">

                                                        <div className="progress bg-tint-success" style={{"height": "4px"}}>
                                                            <div className="progress-bar bg-success" role="progressbar" style={{"width": "45%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-12">
                        <div className="card mb-3 card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <a href="#!.html">
                                        <img src="https://www.bootdey.com/image/280x280/FFB6C1/000000" className="width-90 rounded-3" alt="" />
                                    </a>
                                </div>
                                <div className="col">
                                    <div className="overflow-hidden flex-nowrap">
                                        <h6 className="mb-1">
                                            <a href="#!" className="text-reset">CRM dashboard landing page</a>
                                        </h6>
                                        <span className="text-muted d-block mb-2 small">
                                            Updated 2 Hours Ago
                                        </span>
                                        <div className="row align-items-center">
                                            <div className="col-12">
                                                <div className="row align-items-center g-0">
                                                    <div className="col-auto">
                                                        <small className="me-2">65%</small>
                                                    </div>
                                                    <div className="col">
                                                        <div className="progress bg-tint-success" style={{"height": "4px"}}>
                                                            <div className="progress-bar bg-success" role="progressbar" style={{"width": "45%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default ListComponent