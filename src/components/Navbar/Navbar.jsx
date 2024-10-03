import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/navv.png"; 
import naac from "../../assets/naac.png";
import nba from "../../assets/nba.png";

const Navbar = () => {
    const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
    const [admissionDropdownOpen, setAdmissionDropdownOpen] = useState(false);
    const [departmentsDropdownOpen, setDepartmentsDropdownOpen] = useState(false);
    const [placementsDropdownOpen, setPlacementsDropdownOpen] = useState(false);
    const [campusDropdownOpen, setCampusDropdownOpen] = useState(false);
    const [previousYearDropdownOpen, setPreviousYearDropdownOpen] = useState(false);
    const [notesDropdownOpen, setNotesDropdownOpen] = useState(false);
    const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

    const toggleDropdown = (setter) => () => setter(prev => !prev);

    return (
        <nav className='upperNav'>
            
            <div 
                className="login-button" 
                onClick={toggleDropdown(setLoginDropdownOpen)}
                style={{ cursor: 'pointer' }}
            >
                Login
                {loginDropdownOpen && (
                    <div className="dropdown login-dropdown">
                        <ul>
                            <li>Student</li>
                            <li>Parent's</li>
                            <li>Employee</li>
                            <li>HOD/Incharge</li>
                        </ul>
                    </div>
                )}
            </div>

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
                    Admissions
                    {admissionDropdownOpen && (
                        <div className="dropdown">
                            <ul>
                                <li>How to Apply</li>
                                <li>Eligibility</li>
                            </ul>
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
                        <div className="dropdown">
                            <ul>
                                <li>Department 1</li>
                                <li>Department 2</li>
                            </ul>
                        </div>
                    )}
                </li>
                <li 
                    onMouseEnter={toggleDropdown(setPlacementsDropdownOpen)} 
                    onMouseLeave={toggleDropdown(setPlacementsDropdownOpen)}
                    style={{ position: 'relative' }}
                >
                    Placements
                    {placementsDropdownOpen && (
                        <div className="dropdown">
                            <ul>
                                <li>Placement Stats</li>
                                <li>Companies Visited</li>
                            </ul>
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
                            <ul>
                                <li>Events</li>
                                <li>Facilities</li>
                            </ul>
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
