import React, { Component } from 'react';
import SideMenu from '../components/SideMenu';

const pageWithSideMenu = ({children}) =>
  <div className="page">
    <SideMenu />
    {children}
  </div>

export const Home = () =>
  <pageWithSideMenu>
    <section></section>
  </pageWithSideMenu>

export const Work = () =>
  <pageWithSideMenu>
    <section></section>
  </pageWithSideMenu>

export const Blog = () =>
  <pageWithSideMenu>
    <section></section>
  </pageWithSideMenu>

export const About = () =>
  <pageWithSideMenu>
    <section></section>
  </pageWithSideMenu>

export const Contact = () =>
  <pageWithSideMenu>
    <section></section>
  </pageWithSideMenu>

export default pageWithSideMenu;
