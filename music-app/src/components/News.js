import React from 'react'


function News(props) {
    
    return (
        <section id="news">
            <div className="album-heading d-flex">
                <h2 className="heading-text">News</h2>
                <div className="view-all ml-auto">
                    <button className="btn text-light">View All</button>
                    <button className="btn btn-dark">&lt;</button>
                    <span>1</span>
                    <button className="btn btn-dark">&gt;</button>
                </div>
            </div>
            <div className="news-cards">
            {props.newsImgs.map(news => 
                <div className="news-conetent">
                    <img src={require(`../images/news/${news.img}`).default} alt="hhh" />
                    <p>22 Dec 20</p>
                    <h2>{news.title}</h2>
                    <p>{news.description}</p>
                </div>
            )}
            </div>

        </section>
    )
}

export default News
