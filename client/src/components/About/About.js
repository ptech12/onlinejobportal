import React from 'react'
import './style.css'
export default function About() {
    return (
        <>
        <div id="abt-us" class="container-fluid bg-grey">
                <div class="row">

                    <div class="col-sm-6">
                        <h1>About Us</h1>
                        <p><strong>We are happy to give you the very pleasant way of searching your dream jobs with out any extra
                            charges or hassleness.</strong>
                        </p>
                    </div>
                    <div id="abt-logo" class="col-sm-6">
                        <span class="glyphicon glyphicon-signal logo"></span>
                    </div>
                </div>
            </div>
            <div id="mission" class="container-fluid">
                    <div class="row">
                        <div id="abt-logo" class="col-sm-6">
                            <span class="glyphicon glyphicon-globe logo"></span>
                        </div>
                        <div class="col-sm-6">
                            <h1>Our Mission</h1>
                            <h4><strong>MISSION: </strong> Our one of the main mission is to provide jobs for most
                                skilled people who is without job</h4>
                            <p><strong>VISION: </strong> The most educated and talented people need to get the
                                most suitable job</p>
                        </div>
                    </div>
                </div>
        </>
    )
}
