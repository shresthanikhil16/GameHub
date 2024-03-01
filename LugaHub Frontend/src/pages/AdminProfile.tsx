
import "../assets/css/AdminProfile.css";

import {Link} from "react-router-dom";

function AdminProfile() {
    return (
        <div className={"Ap-container"}>
            <div className={"Ap-buttons"}>
                <div className={"Ap-top"}>
                    <a href="/admin/products">
                        <img src={"images/logo-white-removebg-preview.png"}
                             width={100}
                             alt={"logo"}
                        />

                    </a>
                    <span>GameAdmin</span>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={"Ap-btn"}>
                    <div className="addproduct-dropdown">
                        <button className="addproduct-dropbtn"><i className="fa-solid fa-clipboard"></i>Products<i className="fa-solid fa-caret-down" style={{ marginLeft: '57px' }}></i></button>
                        <div className="addproduct-dropdown-content">
                            <a href="/admin/products">View Product</a>
                            <a href="/admin/addproduct">Add Product</a>

                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-list"></i>Categories</button>*/}
                    <div className="cat-dropdown">
                        <button className="cat-dropbtn"><i className="fa-solid fa-list"></i>Categories<i className="fa-solid fa-caret-down" style={{ marginLeft: '40px' }}></i></button>
                        <div className="cat-dropdown-content">
                            <a href="/admin/addcategory">Add Category</a>
                        </div>
                    </div>
                    {/*<button className={"products"}><i className="fa-solid fa-tag"></i>Brands</button>*/}
                    <div className="brand-dropdown">
                        <button className="brand-dropbtn"><i className="fa-solid fa-tag"></i>Brands<i className="fa-solid fa-caret-down" style={{ marginLeft: '69px' }}></i></button>
                        <div className="brand-dropdown-content">
                            <a href="/admin/addbrand">Add Brand</a>
                        </div>
                    </div>

                    {/*<button className={"products"}><i className="fa-solid fa-user"></i>Profile</button>*/}
                    <div className="profile-dropdown">
                        <button className="profile-dropbtn"><i className="fa-solid fa-user"></i>Profile<i className="fa-solid fa-caret-down" style={{ marginLeft: '70px' }}></i></button>
                        <div className="profile-dropdown-content">
                            <a href="/admin/profile">View Profile</a>
                            <a href="/admin/editprofile">Edit Profile</a>
                            <a href="/admin/changepassword">Change Password</a>
                        </div>
                    </div>
                    <Link to={"/admin/aboutus"}><button className={"products"}><i className="fa-regular fa-address-card"></i>About Us</button></Link>
                    <Link to={"/admin/login"}><button className={"products"}><i className="fa-solid fa-arrow-right"></i>Log Out</button></Link>
                </div>
            </div>
            <div className={"Ap-display"}>
                <h2>My Profile</h2>
                <label>Full name:</label>
                <input type="text"/>
                <label>Email Address:</label>
                <input type={"text"}/>
                <label>Mobile Number:</label>
                <input type={"text"}/>
                <label>Birthday:</label>
                <input type={"text"}/>
                <label>Gender:</label>
                <input type={"text"}/>




            </div>
        </div>
    )
}

export default AdminProfile;