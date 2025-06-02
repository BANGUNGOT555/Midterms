import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FreeTuitionImage from "../src/assets/FREETUITION.png";
import EaristLogo from "../src/assets/EaristLogo.png";
import ApproveSignature from "../src/assets/ApproveSignature.png";

const CertificateOfRegistration = () => {
    const navigate = useNavigate();
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedSignature, setUploadedSignature] = useState(null);
    const [currentDate, setCurrentDate] = useState("");
    const [certificateData, setCertificateData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const registrationNo = "2147483647";

    useEffect(() => {
        fetchCertificate();
    }, []);

    const fetchCertificate = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/certificate/${registrationNo}`);
            setCertificateData(response.data);
            setLoading(false);
        } catch (err) {
            if (err.response?.status === 404) {
                setError("Certificate not found. Please check your registration number.");
            } else if (err.response?.status === 401 || err.response?.status === 403) {
                setError("Unauthorized access.");
            } else {
                setError(`Failed to load certificate data: ${err.response?.data?.message || err.message}`);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, "0");
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const year = now.getFullYear();
            const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            const ampm = now.getHours() >= 12 ? "PM" : "AM";

            const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
            setCurrentDate(formattedDate);
        };

        updateDate();
        const interval = setInterval(updateDate, 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <div>Loading certificate data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!certificateData) {
        return <div>No certificate found</div>;
    }


    const containerStyle = {
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
        marginTop: "50px",
        color: "Black",
        overflowY: "scroll",
    };

    const contentStyle = {
        color: "black",
        width: "100%",
        maxWidth: "800px",
        paddingBottom: "90px",
    };


    return (

        <div style={containerStyle}>
            
            <div style={contentStyle}>
            <div>
            </div>
                <form
                    style={{
                        border: "1px solid black",
                        padding: "0.25in",
                        width: "8in",
                        marginBottom: "7%",
                        height: "fit-content",
                        position: "relative",
                    }}
                >
                    <table
                        style={{
                            border: "1px solid black",
                            borderCollapse: "collapse",
                            fontFamily: "Arial, Helvetica, sans-serif",
                            width: "8in",
                            position: "relative",
                            tableLayout: "fixed",
                        }}
                    >
                        <tbody>
                            <tr>
                                <td colSpan={2} style={{ height: "0.1in", fontSize: "72.5%" }}>
                                    <b>

                                    </b>
                                </td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ height: "0.1in", fontSize: "62.5%" }}>
                                    <b>

                                    </b>
                                </td>
                            </tr>
                            <tr>

                                <td colSpan={40} style={{ height: "0.5in", textAlign: "center" }}>
                                    <table width="100%" style={{ borderCollapse: "collapse" }}>
                                        <tbody>
                                            <tr>


                                                <td style={{ width: "20%", textAlign: "center" }}>
                                                    <img src={EaristLogo} alt="Earist Logo" style={{ marginLeft: "25px", width: "150px", height: "110px" }} />
                                                </td>

                                                {/* Center Column - School Information */}
                                                <td style={{ width: "60%", textAlign: "center", lineHeight: "1" }}>
                                                    <div>Republic of the Philippines</div>
                                                    <b>Eulogio "Amang" Rodriguez</b><br />
                                                    <b>Institute of Science and Technology</b><br />
                                                    Nagtahan St. Sampaloc, Manila<br />
                                                    <br />
                                                    <br />
                                                    <b style={{ fontSize: "16px", }}>CERTIFICATE OF REGISTRATION</b>
                                                </td>

                                                {/* Right Column - 2x2 Picture */}
                                                <td
                                                    colSpan={4}
                                                    rowSpan={6}
                                                    style={{
                                                        textAlign: "center",
                                                        position: "relative",
                                                        width: "3.5cm",
                                                        height: "4.5cm", // Ensuring 2x2 size
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: "3.8cm",
                                                            height: "3.8cm",
                                                            marginRight: "30px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            position: "relative",
                                                        }}
                                                    >
                                                        {certificateData?.student_img ? (
                                                            <img
                                                                src={`data:image/jpeg;base64,${certificateData.student_img}`}
                                                                alt="Student"
                                                                style={{
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover",
                                                                    borderRadius: "4px",
                                                                }}
                                                            />
                                                        ) : (
                                                            <div
                                                                style={{
                                                                    fontSize: "10px",
                                                                    lineHeight: "1.2",
                                                                    cursor: "pointer",
                                                                    paddingTop: "60px",
                                                                    color: "#888",
                                                                }}
                                                            >
                                                                Click to Upload Image
                                                            </div>
                                                        )}

                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={"#"}
                                                            style={{
                                                                position: "absolute",
                                                                width: "100%",
                                                                height: "100%",
                                                                top: 0,
                                                                left: 0,
                                                                opacity: 0,
                                                                cursor: "pointer",
                                                            }}
                                                            title="Upload ID Picture"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>

                            </tr>
                            <tr>
                                <td colSpan={15} style={{ height: "0.3in", fontSize: "62.5%" }}>


                                </td>
                            </tr>
                            <tr>
                                <td colSpan={10} style={{ height: "0.1in", fontSize: "55%" }}>
                                    <i>
                                        <b style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: "black" }}>
                                            Registration No:&nbsp;
                                            <span style={{ color: "red" }}>
                                                {certificateData.registration_no}
                                            </span>
                                        </b>
                                    </i>
                                </td>


                                <td
                                    colSpan={29}
                                    style={{
                                        height: "0.1in",
                                        fontSize: "50%",
                                        textAlign: "right",

                                    }}
                                >
                                    <b style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: "black" }}>
                                        Academic Year/Term : <span style={{ color: "red" }}>Second Semester AY 2024-2025</span>
                                    </b>

                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={40}
                                    style={{
                                        height: "0.2in",
                                        fontSize: "72.5%",
                                        backgroundColor: "gray",
                                        color: "white",
                                    }}
                                >
                                    <b>
                                        <i style={{
                                            color: "black", fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px', textAlign: "center", display: "block"
                                        }}>
                                            STUDENT GENERAL INFORMATION
                                        </i>
                                    </b>
                                </td>
                            </tr>
                            <tr>

                            </tr>


                            <td
                                colSpan={4}
                                style={{



                                }}
                            >
                                <input
                                    type="text"
                                    value={"Student No:"}
                                    style={{
                                        fontWeight: "bold",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '12px',
                                        color: "black",
                                        width: "98%",
                                        border: "none",
                                        outline: "none",
                                        background: "none"
                                    }}
                                />
                            </td>
                            <td
                                colSpan={12}
                                style={{

                                    fontSize: "62.5%",

                                }}
                            >
                                <input
                                    type="text"
                                    value={certificateData.student_no}
                                    style={{
                                        fontFamily: "Arial",
                                        color: "black",
                                        width: "98%",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '12px',
                                        border: "none",
                                        outline: "none",
                                        background: "none"
                                    }}
                                />
                            </td>
                            <td
                                colSpan={3}
                                style={{

                                    fontSize: "62.5%",

                                }}
                            >
                                <input
                                    type="text"
                                    value={"College:"}
                                    style={{
                                        fontWeight: "Bold",
                                        color: "black",
                                        width: "98%",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '12px',
                                        border: "none",
                                        outline: "none",
                                        background: "none"
                                    }}
                                />
                            </td>
                            <td
                                colSpan={14}
                                style={{

                                    fontSize: "62.5%",

                                }}
                            >
                                <input
                                    type="text"
                                    value={certificateData.college}
                                    style={{
                                        color: "black",
                                        width: "98%",
                                        border: "none",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '12px',
                                        outline: "none",
                                        background: "none"
                                    }}
                                />
                            </td>
                            <tr>
                                <td
                                    colSpan={3}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Name:"}
                                        style={{
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            color: "black",
                                            fontWeight: "bold",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.name}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={3}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Program:"}
                                        style={{
                                            color: "black",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            fontWeight: "Bold",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={17}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.program}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={3}
                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Gender :"}
                                        style={{
                                            fontWeight: "bold",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.gender}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={10}
                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Major:"}
                                        style={{
                                            fontWeight: "bold",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Curriculum:"}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontWeight: "Bold",
                                            border: "none",
                                            textAlign: "left",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"2018 - 2019"}
                                        style={{
                                            color: "black",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            width: "98%",
                                            border: "none",
                                            textAlign: "left",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Age :"}
                                        style={{
                                            fontWeight: "bold",
                                            color: "black",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={14}
                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.age}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={4}
                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Year Level:"}
                                        style={{
                                            fontWeight: "bold",
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={6}

                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.year_level}
                                        style={{
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={12}

                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={`Scholarship/Discount : ${certificateData.scholarship_discount}`}
                                        style={{
                                            fontWeight: "bold",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />

                                </td>




                            </tr>
                            <tr>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Email Address:"}
                                        style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={20}
                                    style={{

                                        fontSize: "50%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.email_address}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            background: "none"
                                        }}
                                    />
                                </td>





                            </tr>

                            <tr>

                            </tr>
                            <tr>

                                <td
                                    colSpan={8}
                                    rowSpan={2}
                                    style={{
                                        color: "black",
                                        height: "0.3in",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '12px',
                                        fontWeight: "bold",

                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    CODE
                                </td>
                                <td
                                    colSpan={8}
                                    rowSpan={2}
                                    style={{
                                        color: "black",
                                        height: "0.3in",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '12px',
                                        fontWeight: "bold",

                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    SUBJECT TITLE
                                </td>

                                <td
                                    colSpan={4}
                                    style={{
                                        color: "black",
                                        height: "0.3in",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '12px',
                                        fontWeight: "bold",

                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    UNIT
                                </td>

                                <td
                                    colSpan={4}
                                    rowSpan={2}
                                    style={{
                                        color: "black",
                                        height: "0.3in",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '12px',
                                        fontWeight: "bold",

                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    SECTION
                                </td>
                                <td
                                    colSpan={8}
                                    rowSpan={2}
                                    style={{
                                        color: "black",
                                        height: "0.3in",
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    SCHEDULE/ROOM

                                </td>
                                <td
                                    colSpan={8}
                                    rowSpan={2}
                                    style={{
                                        color: "black",
                                        height: "0.3in",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '12px',
                                        fontWeight: "bold",

                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    FACULTY
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={1}
                                    style={{
                                        color: "black",
                                        height: "0.1in",
                                        fontSize: "50%",
                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    Lec
                                </td>

                                <td
                                    colSpan={1}
                                    style={{
                                        color: "black",
                                        height: "0.1in",
                                        fontSize: "50%",
                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    Lab
                                </td>
                                <td
                                    colSpan={1}
                                    style={{
                                        color: "black",
                                        height: "0.1in",
                                        fontSize: "50%",
                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    Credit
                                </td>
                                <td
                                    colSpan={1}
                                    style={{
                                        color: "black",
                                        height: "0.1in",
                                        fontSize: "50%",
                                        backgroundColor: "gray",
                                        border: "1px solid black",
                                        textAlign: "center",
                                    }}
                                >
                                    Tuition
                                </td>
                            </tr>
                            {/* Dynamic Subject Rows */}
                            {certificateData.subject_code.map((code, index) => (
                                <tr key={index}>
                                    {/* Subject Code */}
                                    <td
                                        colSpan={8}
                                        style={{
                                            height: "0.25in",
                                            fontSize: "62.5%",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={code}
                                            readOnly
                                            style={{
                                                color: "black",
                                                width: "98%",
                                                border: "none",
                                                outline: "none",
                                                background: "none"
                                            }}
                                        />
                                    </td>

                                    {/* Subject Title */}
                                    <td
                                        colSpan={8}
                                        style={{
                                            height: "0.25in",
                                            fontSize: "52.5%",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={certificateData.subject_title[index]}
                                            readOnly
                                            style={{
                                                color: "black",
                                                width: "98%",
                                                textAlign: "center",
                                                border: "none",
                                                outline: "none",
                                                background: "none"
                                            }}
                                        />
                                    </td>

                                    {/* Units */}
                                    <td
                                        colSpan={1}
                                        style={{
                                            height: "0.25in",
                                            fontSize: "52.5%",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={certificateData.lec_units[index]}
                                            readOnly
                                            style={{
                                                color: "black",
                                                width: "98%",
                                                textAlign: "center",
                                                border: "none",
                                                outline: "none",
                                                background: "none"
                                            }}
                                        />
                                    </td>
                                    <td
                                        colSpan={1}
                                        style={{
                                            height: "0.25in",
                                            fontSize: "52.5%",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={certificateData.lab_units[index]}
                                            readOnly
                                            style={{
                                                color: "black",
                                                width: "98%",
                                                textAlign: "center",
                                                border: "none",
                                                outline: "none",
                                                background: "none"
                                            }}
                                        />
                                    </td>
                                    <td
                                        colSpan={1}
                                        style={{
                                            height: "0.25in",
                                            fontSize: "52.5%",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={certificateData.credit_units[index]}
                                            readOnly
                                            style={{
                                                color: "black",
                                                width: "98%",
                                                textAlign: "center",
                                                border: "none",
                                                outline: "none",
                                                background: "none"
                                            }}
                                        />
                                    </td>
                                    <td
                                        colSpan={1}
                                        style={{
                                            height: "0.25in",
                                            fontSize: "52.5%",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={certificateData.tuition_units[index]}
                                            readOnly
                                            style={{
                                                color: "black",
                                                width: "98%",
                                                textAlign: "center",
                                                border: "none",
                                                outline: "none",
                                                background: "none"
                                            }}
                                        />
                                    </td>

                                    {/* Section */}
                                    <td
                                        colSpan={4}
                                        style={{
                                            height: "0.25in",
                                            fontSize: "52.5%",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={certificateData.subject_section[index]}
                                            readOnly
                                            style={{
                                                color: "black",
                                                width: "98%",
                                                textAlign: "center",
                                                border: "none",
                                                outline: "none",
                                                background: "none"
                                            }}
                                        />
                                    </td>

                                    {/* Schedule/Room */}
                                    <td
                                        colSpan={8}
                                        style={{
                                            height: "0.25in",
                                            fontSize: "52.5%",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={certificateData.subject_schedule_room[index]}
                                            readOnly
                                            style={{
                                                color: "black",
                                                width: "98%",
                                                textAlign: "center",
                                                border: "none",
                                                outline: "none",
                                                background: "none"
                                            }}
                                        />
                                    </td>

                                    {/* Faculty */}
                                    <td
                                        colSpan={8}
                                        style={{
                                            height: "0.25in",
                                            fontSize: "52.5%",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <input
                                            type="text"
                                            value={certificateData.subject_faculty[index]}
                                            readOnly
                                            style={{
                                                color: "black",
                                                width: "98%",
                                                textAlign: "center",
                                                border: "none",
                                                outline: "none",
                                                background: "none"
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}



                            <tr>
                                <td
                                    colSpan={10}
                                    style={{
                                        height: "0.1in",
                                        fontSize: "55%",

                                        color: "black",

                                        textAlign: "center",
                                    }}
                                >
                                    <b>
                                        <i>Note: Subject marked with
                                            "*" is Special Subject.</i>
                                    </b>
                                </td>
                                <td
                                    colSpan={6}
                                    style={{

                                        fontSize: "55%",

                                        color: "black",

                                        textAlign: "center",
                                    }}
                                >
                                    <b>
                                        Total Unit(s)</b>
                                </td>

                                <td
                                    colSpan={1}
                                    style={{

                                        fontSize: "55%",

                                        color: "black",

                                        textAlign: "center",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.total_lec_units}
                                        readOnly
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />

                                </td>
                                <td
                                    colSpan={1}
                                    style={{

                                        fontSize: "55%",

                                        color: "black",

                                        textAlign: "center",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.total_lab_units}
                                        readOnly
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={1}
                                    style={{
                                        height: "0.1in",
                                        fontSize: "55%",

                                        color: "black",

                                        textAlign: "center",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.total_credit_units}
                                        readOnly
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={1}
                                    style={{
                                        height: "0.1in",
                                        fontSize: "55%",

                                        color: "black",

                                        textAlign: "center",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.total_tuition}
                                        readOnly
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={2}
                                    style={{
                                        height: "0.1in",
                                        fontSize: "55%",

                                        color: "black",

                                        textAlign: "center",
                                    }}
                                >
                                </td>
                                <td
                                    colSpan={2}
                                    style={{
                                        height: "0.1in",
                                        fontSize: "55%",

                                        color: "black",

                                        textAlign: "center",
                                    }}
                                >
                                </td>
                                <td
                                    colSpan={3}
                                    style={{
                                        height: "0.1in",
                                        fontSize: "55%",

                                        color: "black",

                                        textAlign: "center",
                                    }}
                                >
                                </td>
                            </tr>
                            <tr
                                colSpan={12}

                                style={{
                                    color: "white",

                                    height: "0.1in",
                                    fontSize: "62.5%",
                                    backgroundColor: "gray",
                                    textAlign: "center",
                                }}
                            >


                            </tr>
                            <tr>
                                <td
                                    colSpan={20}
                                    style={{

                                        fontSize: "62.5%",
                                        border: "1px solid black",
                                        backgroundColor: "gray",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"A S S E S S E D  F E E S"}
                                        style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={8}

                                    style={{
                                        color: "white",


                                        fontSize: "62.5%",
                                        color: "black",
                                        border: "1px 0px 1px 1px solid black",
                                        textAlign: "center",
                                    }}
                                >

                                </td>
                            </tr>



                            <tr>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Tuition (21 unit(s)) "}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                        borderRight: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.tuition}
                                        style={{
                                            textAlign: "left",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>



                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >

                                    <input
                                        type="text"
                                        value={"RULES OF REFUND"}
                                        style={{
                                            textAlign: "center",
                                            color: "black",
                                            marginLeft: "40px",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '10px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>

                            </tr>
                            <tr>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Athletic Fee"}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                        borderRight: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.athletic_fee}
                                        style={{
                                            textAlign: "left",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >

                                    <input
                                        type="text"
                                        value={"1. Full refund of tuition fee - Before the start of classes"}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            marginLeft: "40px",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '10px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Cultural Fee"}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                        borderRight: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.cultural_fee}
                                        style={{
                                            textAlign: "left",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >

                                    <input
                                        type="text"
                                        value={"2. 80% refund of tuition fee - within 1 week from the start of classes"}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            marginLeft: "40px",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '10px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Developmental Fee"}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                        borderRight: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.development_fee}
                                        style={{
                                            textAlign: "left",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >

                                    <input
                                        type="text"
                                        value={"3. 50% refund - within 2 weeks from the start of classes."}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            marginLeft: "40px",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '10px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Guidance Fee"}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                        borderRight: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.guidance_fee}
                                        style={{
                                            textAlign: "left",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >

                                    <input
                                        type="text"
                                        value={"4. No refund - after the 2nd week of classes."}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            marginLeft: "40px",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '10px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Library Fee"}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                        borderRight: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.library_fee}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Medical and Dental Fee"}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                        borderRight: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.medical_dental_fee}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={20}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >

                                    <input
                                        type="text"
                                        value={"PLEDGE UPON ADMISSION"}
                                        style={{
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Registration Fee"}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                        borderRight: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.registration_fee}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={20}
                                    style={{

                                        textAlign: "center",
                                        fontWeight: "bold",
                                        color: "black",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '10px',
                                    }}
                                >
                                    "As a student of EARIST, I do solemnly promise that I will
                                </td>


                            </tr>
                            <tr>
                                <td
                                    colSpan={15}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Computer Fee"}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",

                                        borderRight: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.computer_fee}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={20}
                                    style={{

                                        textAlign: "center",
                                        fontWeight: "bold",
                                        color: "black",
                                        fontFamily: 'Arial, sans-serif',
                                        fontSize: '10px',
                                    }}
                                >
                                    comply with the rules and regulations of the Institution."
                                </td>

                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={""}
                                        style={{

                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",


                                    }}
                                >
                                    <input
                                        type="text"
                                        value={""}
                                        style={{

                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",

                                        borderRight: "1px solid black",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={""}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{


                                        marginRight: "20px",

                                    }}
                                >

                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Total Assessment : "}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",

                                        borderRight: "1px solid black",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.total_assessment} 
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                            </tr>

                            <tr>
                                <td
                                    colSpan={2}
                                    style={{


                                        marginRight: "20px",

                                    }}
                                >

                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Less Financial Aid : "}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",

                                        borderRight: "1px solid black",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.less_financial_aid}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>


                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{


                                        marginRight: "20px",

                                    }}
                                >

                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Net Assessed : "}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",

                                        borderRight: "1px solid black",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.net_assessed}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>


                                <td
                                    colSpan={20}

                                >
                                    <input
                                        type="text"
                                        value={"_________________________________"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            textDecoration: "underline",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{


                                        marginRight: "20px",

                                    }}
                                >

                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Less Financial Aid : "}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",

                                        borderRight: "1px solid black",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"0.00"}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                                <td
                                    colSpan={20}

                                >
                                    <input
                                        type="text"
                                        value={"Student's Signature"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{

                                        marginRight: "20px",

                                    }}
                                >

                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Medical and Dental Fee : "}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",

                                        borderRight: "1px solid black",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"0.00"}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{


                                        marginRight: "20px",

                                    }}
                                >

                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Registration Fee : "}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",

                                        borderRight: "1px solid black",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"0.00"}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td
                                    colSpan={2}
                                    style={{


                                        marginRight: "20px",

                                    }}
                                >

                                </td>
                                <td
                                    colSpan={13}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Computer Fee : "}
                                        style={{
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={5}
                                    style={{

                                        fontSize: "62.5%",
                                        marginRight: "20px",

                                        borderRight: "1px solid black",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"0.00"}
                                        style={{
                                            textAlign: "left",
                                            color: "black",
                                            width: "98%",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td
                                    colSpan={20}
                                    style={{

                                        fontSize: "62.5%",
                                        border: "1px solid black",
                                        backgroundColor: "gray",
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"A S S E S S E D  F E E S"}
                                        style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>


                                <td
                                    colSpan={6}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"APPROVED BY : "}
                                        style={{
                                            color: "black",
                                            textAlign: "left",
                                            marginLeft: "20px",
                                            fontWeight: "bold",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={10}
                                    style={{

                                        fontSize: "55%",
                                        textAlign: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "3.5rem",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            overflow: "hidden",
                                            position: "relative",

                                        }}
                                    >
                                        {ApproveSignature ? (
                                            <img
                                                src={ApproveSignature}
                                                alt="Signature"
                                                style={{
                                                    maxWidth: "100%",
                                                    maxHeight: "100%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        ) : (
                                            <label
                                                htmlFor="signatureUpload"
                                                style={{
                                                    fontSize: "10px",
                                                    color: "gray",
                                                    cursor: "pointer",
                                                    padding: "5px",
                                                }}
                                            >
                                                Click to upload your Signature
                                            </label>
                                        )}
                                    </div>

                                    {/* Hidden File Input */}
                                    <input
                                        id="signatureUpload"
                                        type="file"
                                        accept="image/*"
                                        onChange={"#"}
                                        style={{
                                            display: "none",
                                        }}
                                    />
                                </td>

                            </tr>

                            <tr>
                                <td
                                    colSpan={7}
                                    style={{

                                        fontSize: "62.5%",
                                        border: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"1st Payment/Due"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={6}
                                    style={{


                                        border: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"2nd Payment/Due"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={7}
                                    style={{


                                        border: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"3rd Payment/Due"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={20}
                                    style={{

                                        fontSize: "62.5%",


                                    }}
                                >
                                    <input
                                        type="text"
                                        value={`________${certificateData.registrar_name}________`}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            textDecoration: "underline",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>


                            <tr>
                                <td
                                    colSpan={7}
                                    style={{

                                        fontSize: "62.5%",
                                        border: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"0.0"}
                                        style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={6}
                                    style={{

                                        fontSize: "62.5%",
                                        border: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"0.0"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={7}
                                    style={{

                                        fontSize: "62.5%",
                                        border: "1px solid black",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"0.0"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            width: "98%",
                                            fontWeight: "bold",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={20}
                                    style={{

                                        fontSize: "12px",


                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Registrar"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            width: "98%",
                                            fontWeight: "bold",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            border: "none",
                                            fontWeight: "bold",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>

                            </tr>
                            <tr>
                                <td
                                    colSpan={12}
                                    style={{

                                        fontSize: "62.5%",

                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Payment/Validation Date : "}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            width: "98%",
                                            fontWeight: "bold",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={7}
                                    style={{
                                        height: "0.3in",
                                        fontSize: "62.5%",


                                    }}
                                >
                                    <input
                                        type="text"
                                        value={certificateData.payment_validation_date}
                                        style={{
                                            textDecoration: "underline",
                                            color: "black",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    colSpan={12}
                                    style={{

                                        fontSize: "62.5%",


                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Official Receipt :"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            width: "98%",
                                            fontWeight: "bold",
                                            border: "none",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                                <td
                                    colSpan={7}
                                    style={{

                                        fontSize: "62.5%",


                                    }}
                                >
                                    <input
                                        type="text"
                                        value={"Scholar  _____"}
                                        style={{
                                            color: "black",
                                            textAlign: "center",
                                            width: "98%",
                                            fontWeight: "bold",
                                            fontFamily: 'Arial, sans-serif',
                                            fontSize: '12px',
                                            border: "none",
                                            outline: "none",
                                            background: "none"
                                        }}
                                    />
                                </td>
                            </tr>



                            <tr>
                                <td style={{ width: "20%", textAlign: "center" }}>
                                    <img src={FreeTuitionImage} alt="EARIST MIS FEE" style={{ marginTop: "10px", width: "200px", height: "150px", marginLeft: "150px" }} />
                                </td>
                            </tr>

                            <tr>
                                <td
                                    colSpan={40}
                                    style={{
                                        height: "0.25in",
                                        fontSize: "62.5%",
                                        textAlign: "right",
                                        textAlign: "right",
                                        verticalAlign: "middle", // Centers vertically
                                    }}
                                >
                                    <input
                                        type="text"
                                        value={currentDate}
                                        readOnly
                                        style={{
                                            color: "black",
                                            textAlign: "right", // Centers text inside the input
                                            width: "98%",
                                            border: "none",
                                            outline: "none",
                                            background: "none",
                                        }}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td
                                    colSpan={40}
                                    style={{
                                        height: "0.2in",
                                        fontSize: "72.5%",
                                        backgroundColor: "gray",
                                        color: "white",
                                    }}
                                >
                                    <b>
                                        <i style={{ color: "black", textAlign: "center", display: "block" }}>
                                            KEEP THIS CERTIFICATE. YOU WILL BE REQUIRED TO PRESENT THIS IN ALL YOUR DEALINGS WITH THE COLLEGE.
                                        </i>
                                    </b>
                                </td>
                            </tr>

                        </tbody>

                    </table>


                </form>
            </div>
        </div>
    );
};

export default CertificateOfRegistration;

