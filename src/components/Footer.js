import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const Footer = () =>{

    return(
        <Wrapper >
            <h1>Footer</h1>
    </Wrapper>

    );
}

export default Footer;
