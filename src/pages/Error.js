import React from "react";
import styled from "styled-components";
import {Link} from "react-dom";

const Wrapper = styled.div``

const Error = () =>{

    return (
        <Wrapper>
            <h1>Opps... This route can't be found</h1>
            <Link to="/">Back Home</Link>
        </Wrapper>
    )
}

export default Error;