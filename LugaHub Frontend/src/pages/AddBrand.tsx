import {Link, useNavigate, useParams} from "react-router-dom";
import "../assets/css/AddCategory.css";
import {useForm} from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useMutation,useQuery} from "@tanstack/react-query";

function AddCategory() {
    const { id_p } = useParams();
    console.log(id_p)
    const { data: dataById } = useQuery({
        queryKey: ['GETBYID'],
        queryFn() {
            return axios.get(`http://localhost:8082/brand/getById/${id_p}`, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            });
        },
        enabled: !!id_p,
    });

    const navigate = useNavigate();
    const apiCall = useMutation({
        mutationKey: ["POST_ITEM"],
        mutationFn: (payload) => {
            console.log(payload);
            return axios.post("http://localhost:8082/brand/save", payload, {
                headers: { Authorization: "Bearer " + localStorage.getItem("token") }
            });
        },
        onSuccess: () => {
            toast.success("Brand added successfully!", { autoClose: 4000 });
            resetForm();
        },
        onError: (error) => {
            setTimeout(() => {
                toast.error('Please fill all the fields!');
            }, 0); // Set the timeout to 4000 milliseconds (4 seconds)
        },
    });

    const { register, handleSubmit, reset: resetForm } = useForm({
        values: id_p ? dataById?.data : {},
    });

    const onSubmit = (values) => {
        apiCall.mutate(values);
    };

    return (
        <div className={"addbrand-container"}>
            <div className={"addbrand-buttons"}>
                <div className={"addbrand-top"}>
                    <img src={"images/logo-white-removebg-preview.png"}
                         width={100}
                         alt={"logo"}
                    />
                    <span>GameAdmin</span>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className={"addbrand-btn"}>
                    <div className="addproduct-dropdown">
                        <button className="addproduct-dropbtn"><i className="fa-solid fa-clipboard"></i>Products<i className="fa-solid fa-caret-down" style={{ marginLeft: '57px' }}></i></button>
                        <div className="addproduct-dropdown-content">
                            <a href="/admin/products">View Product</a>
                            <a href="/admin/addproduct">Add Product</a>

                        </div>
                    </div>
                    <div className="cat-dropdown">
                        <button className="cat-dropbtn"><i className="fa-solid fa-list"></i>Categories<i className="fa-solid fa-caret-down" style={{ marginLeft: '40px' }}></i></button>
                        <div className="cat-dropdown-content">
                            <a href="/admin/addcategory">Add Category</a>
                        </div>
                    </div>
                    <div className="brand-dropdown">
                        <button className="brand-dropbtn"><i className="fa-solid fa-tag"></i>Brands<i className="fa-solid fa-caret-down" style={{ marginLeft: '69px' }}></i></button>
                        <div className="brand-dropdown-content">
                            <a href="/admin/addbrand">Add Brand</a>
                        </div>
                    </div>
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"addbrand-display"}>
                    <h2>Add Brand</h2>
                    <input type={"text"} placeholder={"Enter Brand Name"}  {...register("brandName")} />
                    <input className={"addbrand-desc"} type={"text"} placeholder={"Enter Brand Description"}  {...register("brandDescription")}/>
                    <button type={"submit"}>Add Brand</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default AddCategory;