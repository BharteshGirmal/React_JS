import React from "react";
import styled from "styled-component"
import Link from "react-router-dom"


export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: radial-gradient(circle at top left, #333, #666, #000); /* Radial gradient effect */
  padding: 0 10px; /* Padding for spacing */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Optional shadow for the navbar */
  margin-bottom: 10px;
`

export const NavLinks = styled(Link)`
  color: #ffffff; /* White color for the links */
  text-decoration: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px; 
  .nav-link:hover {
      background-color: rgba(247, 197, 169, 0.2); /* Hover effect */
      } 
`

export const LogoContainer = styled.div`
  height: 100%;
  width: 70px;
  color: inherit;
  background-color: inherit;    
`
export const ProfileContainer = styled.div`
  height: 100%;
  width: 70px;
  color: inherit;
  background-color: inherit;    
`
export const Profile = styled.div`
  height: 100%;
  width: 70px;
  color: inherit;
  background-color: inherit;    
`
export const LogOutContainer = styled.div`
  display: flex;
  align-items: center; /* Vertically center the profile and logout icons */
  gap: 15px;    
`
export const LogOut = styled.div`
  display: flex;
  align-items: center; /* Vertically center the icons within this container */
  gap: 15px; /* Space between profile and logout icons */
  padding: 0 15px; /* Padding for spacing */
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent background for the container */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);    
`
