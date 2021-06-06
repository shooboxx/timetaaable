import React from 'react'
import { Button } from '../components/inputs/Button'
import { LeftPane } from '../components/templates/LeftPane'
import { RightPane } from '../components/templates/RightPane'
import Error404img from './../assets/images/Error404img.svg'
import {Link} from 'react-router-dom'

const Error404: React.FC = () => {
    return (
        <main className=' row'>
            <div className="side-by-side">
                <LeftPane> 
                     <div className="center">
                        <h2 className='heading heading-2'> 404: Page not found</h2>
                        <h3 className='heading heading-4'>Uh oh.. Seems like the wrong location.</h3>
                        <p className='body body-regular'>Let's go to safety</p>
                        <Link to='/'> <Button title='Go to home'/></Link>
                     </div>
                </LeftPane>
                <RightPane>
                <img src={Error404img} alt="Page not found error" />

                </RightPane>


            </div>
        </main>
    )
}

export {Error404}