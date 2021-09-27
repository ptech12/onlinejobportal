import React, {useState} from 'react'
import './style.css'
export default function Home() {

    return (
        <>

        <div id="home" class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-lg-6 ">
                    <div id="title" class="jumbotron title text-center">
                        <h1>Find your dream company</h1>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-6">
                    <div class="jumbotron text-center welcome">
                        <h1>Online Job Portal</h1>
                        <p>Find your dream job</p>
                        {/* <!-- FORM Group --> */}
                        <form action="GET" class="form-inline">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search Jobs" size="100" required />
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-danger"> Search</button>
                                </div>
                            </div>
                
                        </form>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
