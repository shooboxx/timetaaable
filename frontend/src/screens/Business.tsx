import React from 'react'
// import { DeleteBox } from '../components/surfaces/DeleteBox'

const Business: React.FC = () => {
    return (
        <main className=' row'>
            <section className='section-portfolio side-by-side'> 

                <div className="portfolio-img-box">Test<img src="" alt="" className="portfolio-img" /></div>
                <div className="portfolio-img-box">Test<img src="" alt="" className="portfolio-img" /></div>
                <div className="portfolio-img-box">Test <img src="" alt="" className="portfolio-img" /></div>
                <div className="portfolio-img-box">Test<img src="" alt="" className="portfolio-img" /></div>
            </section>
            <section className="business-details side-by-side">
                <div className="business-main">
                    <h4 className="heading heading-4">Solomon's Flavor</h4>
                    <div className="side-by-side">
                        <div className="tags">
                            <p className="body body-small">Default tag</p>
                        </div>
                        <div className="tags">
                            <p className="body body-small">Default tag</p>
                        </div>
                        <div className="tags">
                            <p className="body body-small">Default tag</p>
                        </div>
                    </div>
                    <div className="rating">5 stars</div>
                    <p className="description body body-small">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quod maxime aliquam, ex hic magni consequuntur corrupti minima, id adipisci nobis nihil. Odio ipsam rem vel nesciunt quas optio consequatur doloremque atque? Iste voluptate dolores, neque excepturi illo rerum fuga quidem necessitatibus reiciendis quos porro ab dicta ducimus iusto quisquam veritatis tenetur placeat quod inventore repellendus, qui eos facilis dolorem fugiat! Aperiam laboriosam dolorum nam? Aut temporibus deleniti quod, natus aliquam sint magni nostrum laborum maxime. Iusto, ab eaque. Labore!</p>    
                </div>
                <div className="side-bar">
                    Testing
                </div>
            </section>
        </main>
    )
}

export {Business}