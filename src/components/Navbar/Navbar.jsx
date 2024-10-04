import React, { useState } from 'react';
import "./Navbar.css"; 
import logo from "../../assets/navv.png"; 
import naac from "../../assets/naac.png";
import nba from "../../assets/nba.png";

const Navbar = () => {
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
    const [admissionDropdownOpen, setAdmissionDropdownOpen] = useState(false);
    const [departmentsDropdownOpen, setDepartmentsDropdownOpen] = useState(false);
    const [placementsDropdownOpen, setPlacementsDropdownOpen] = useState(false);
    const [campusDropdownOpen, setCampusDropdownOpen] = useState(false);
    const [previousYearDropdownOpen, setPreviousYearDropdownOpen] = useState(false);
    const [notesDropdownOpen, setNotesDropdownOpen] = useState(false);

    const toggleLoginDropdown = () => {
        setIsLoginDropdownOpen(prev => !prev);
    };

    
    const handleClickOutside = (event) => {
        if (event.target.closest('.login-dropdown') === null && event.target.closest('.login-button') === null) {
            setIsLoginDropdownOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = (setter) => () => setter(prev => !prev);

    return (
        <nav className='upperNav'>
            <div className="login-button" onClick={toggleLoginDropdown}>
                Login
            </div>
            {isLoginDropdownOpen && (
                <div className="login-dropdown">
                    <ul>
                        <li>Student</li>
                        <li>Parent's</li>
                        <li>Employee</li>
                        <li>HOD/Incharge</li>
                    </ul>
                </div>
            )}

            <ul className='upperNavLinks'>
                <li>Home</li>
                <li>Library</li>
                <li>Syllabus</li>
            </ul>
            <img src={logo} alt="logo" className='logo' />
            <ul className='lowernav'>
                <li 
                    onMouseEnter={toggleDropdown(setAcademicsDropdownOpen)} 
                    onMouseLeave={toggleDropdown(setAcademicsDropdownOpen)}
                    style={{ position: 'relative' }}
                >
                    Academics
                    {academicsDropdownOpen && (
                        <div className="dropdown academics-dropdown">
                            <div className="dropdown-column">
                                <ul>
                                    <li><b>UG Programme</b></li>
                                    <li>Bachelor Of Technology (B.Tech)</li>
                                </ul>
                                <ul>
                                    <li><b>PG Programme</b></li>
                                    <li>Master Of Technology (M.Tech)</li>
                                    <li>Master Of Computer Applications (MCA)</li>
                                    <li>Master Of Business Administration (MBA)</li>
                                </ul>
                                <ul>
                                    <li><b>Doctoral Programme</b></li>
                                    <li>Doctor Of Philosophy (PhD)</li>
                                </ul>
                                <ul>
                                    <li><b>More..</b></li>
                                    <li>Academic Calendar</li>
                                    <li>Academic Regulations</li>
                                    <li>Exam Manual</li>
                                    <li>Syllabus (CSVTU)</li>
                                    <li>Syllabus (BIT)</li>
                                </ul>
                            </div>
                            <div className="dropdown-column">
                                <ul>
                                    <li><b>Research @ BIT-Durg</b></li>
                                    <li>Research Overview</li>
                                    <li>Patent & Copyright</li>
                                    <li>Research Policies & Guidelines</li>
                                    <li>Sponsored Research Projects</li>
                                    <li>Annual Conference (BITCON)</li>
                                    <li>ISC-2019</li>
                                    <li>AICTE ATAL FDP</li>
                                    <li>International Conference</li>
                                    <li>SIH (Smart India Hackathon)</li>
                                </ul>
                            </div>
                            <div className="dropdown-column">
                                <ul>
                                    <li><b>Achievements</b></li>
                                    <li>Faculty Achievements</li>
                                    <li>Student Achievements</li>
                                </ul>
                            </div>
                            <div className="dropdown-column">
                                <ul>
                                    <li><img src={naac} alt="NAAC Badge" /></li>
                                    <li><img src={nba} alt="NBA Badge" /></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </li>

                <li 
                    onMouseEnter={toggleDropdown(setAdmissionDropdownOpen)} 
                    onMouseLeave={toggleDropdown(setAdmissionDropdownOpen)}
                    style={{ position: 'relative' }}
                >
                    Admission
                    {admissionDropdownOpen && (
                        <div className="dropdown">
                            <div className="dropdown-column">
                                <ul>
                                    <li><b>Get Started</b></li>
                                    <li>Admission Procedure</li>
                                    <li>Reservation Policy</li>
                                    <li>Tuition Fees Waiver Scheme</li>
                                    <li>Scholarships</li>
                                    <li>Fees Structure (2022-23)</li>
                                    <li>Fees Structure (2021-22)</li>
                                </ul>
                                <ul>
                                    <li><b>Regular Course</b></li>
                                    <li>B.Tech</li>
                                    <li>M.Tech</li>
                                    <li>MCA</li>
                                    <li>MBA</li>
                                    <li>PhD</li>
                                </ul>
                                <ul>
                                    <li><b>Lateral Entry Courses</b></li>
                                    <li>B.Tech Lateral Entry</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </li>

                <li 
                    onMouseEnter={toggleDropdown(setDepartmentsDropdownOpen)} 
                    onMouseLeave={toggleDropdown(setDepartmentsDropdownOpen)}
                    style={{ position: 'relative' }}
                >
                    Departments
                    {departmentsDropdownOpen && (
                        <div className="dropdown departments-dropdown">
                            <div className="dropdown-column">
                                <h3>Engineering Departments</h3>
                                <ul>
                                    <li><a href="#">Civil Engineering</a></li>
                                    <li><a href="#">Mechanical Engineering</a></li>
                                    <li><a href="#">Electrical Engineering</a></li>
                                    <li><a href="#">Computer Science & Engineering</a></li>
                                    <li><a href="#">Electronics & Telecom. Engineering</a></li>
                                    <li><a href="#">Electrical & Electronics Engineering</a></li>
                                </ul>
                            </div>
                            <div className="dropdown-column">
                                <h3>Basic Science Departments</h3>
                                <ul>
                                    <li><a href="#">Physics</a></li>
                                    <li><a href="#">Chemistry</a></li>
                                    <li><a href="#">Mathematics</a></li>
                                    <li><a href="#">Humanities</a></li>
                                </ul>
                            </div>
                            <div className="dropdown-column">
                                <h3>Management Departments</h3>
                                <ul>
                                    <li><a href="#">MBA</a></li>
                                   
                                </ul>
                            </div>
                            <div className="dropdown-column">
                                <h3>Computer Applications Department</h3>
                                <ul>
                                    <li><a href="#">MCA</a></li>
                                   
                                </ul>
                            </div>
                        </div>
                    )}
                </li>

                <li 
                    onMouseEnter={toggleDropdown(setPlacementsDropdownOpen)} 
                    onMouseLeave={toggleDropdown(setPlacementsDropdownOpen)}
                    style={{ position: 'relative' }}
                >
                    Placement
                    {placementsDropdownOpen && (
                        <div className="dropdown">
                            <div className="dropdown-column">
                                <ul>
                                    <li><b>Overview</b></li>
                                    <li>About T&P</li>
                                    <li>Placement Team</li>
                                    <li>Placement Gallery</li>
                                    <li>Contact T&P Cell</li>
                                </ul>
                                <ul>
                                    <li><b>For Companies</b></li>
                                    <li>Why Recruit BITians</li>
                                    <li>Placement Procedure</li>
                                    <li>Placement Statistics</li>
                                    <li>Infrastructure For T&P</li>
                                </ul>
                                <ul>
                                    <li><b>Esteemed Recruiters</b></li>
                                    <li>Recruiters</li>
                                    <li>Recruiters Feedback</li>
                                </ul>
                                <ul>
                                    <li><b>Entrepreneurship Development Cell</b></li>
                                    <li>About ED Cell</li>
                                    <li>Programs Conducted</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </li>

                <li 
                    onMouseEnter={toggleDropdown(setCampusDropdownOpen)} 
                    onMouseLeave={toggleDropdown(setCampusDropdownOpen)}
                    style={{ position: 'relative' }}
                >
                    Campus Life
                    {campusDropdownOpen && (
                        <div className="dropdown">
                            <div className="dropdown-column">
                                <ul>
                                    <li><b>Campus Overview</b></li>
                                    <li>Infrastructure</li>
                                    <li>Hostel Facilities</li>
                                    <li>Library Facilities</li>
                                    <li>Sports Facilities</li>
                                    <li>Health Care Facilities</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </li>

              
                <li 
                    onMouseEnter={toggleDropdown(setPreviousYearDropdownOpen)} 
                    onMouseLeave={toggleDropdown(setPreviousYearDropdownOpen)}
                    style={{ position: 'relative' }}
                >
                    Previous Year Question Paper
                    {previousYearDropdownOpen && (
                        <div id="previous-year-dropdown" className="dropdown">
                            <div className="dropdown-scroll-container">
                                <ul>
                                    <li 
                                        onClick={(e) => { 
                                            e.stopPropagation();
                                            window.open('https://bitdurg.ac.in/downloads/epaper/100101AM.pdf', '_blank'); 
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        1st year
                                    </li>
                                    <li>2nd year</li>
                                    <li>3rd year</li>
                                    <li>4th year</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </li>

                
                <li 
                    onMouseEnter={toggleDropdown(setNotesDropdownOpen)} 
                    onMouseLeave={toggleDropdown(setNotesDropdownOpen)}
                    style={{ position: 'relative' }}
                >
                    Notes
                    {notesDropdownOpen && (
                        <div className="dropdown">
                            <ul>
                                <li>Class Notes</li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
