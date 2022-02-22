import React from 'react';
import * as Styled from './styles';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from "react-icons/fa";


function Footer() {
  return (
        <>
            <Styled.Footer>
                <Styled.Container>
                    <Styled.BoxSocial>
                        <ul>
                            <li>
                                <FaFacebook />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaYoutube />
                            </li>
                            <li>
                                <FaLinkedin />
                            </li>
                        </ul>
                        <Styled.BoxContact>
                            <p>info@mocs.com</p>
                            <p>{(new Date().getFullYear())} © MOCS. ALL RIGHTS RESERVED.</p>
                        </Styled.BoxContact>
                    </Styled.BoxSocial>
                    <Styled.LinkAnchor>
                        <a href="#header">
                            Back to top
                        </a>
                    </Styled.LinkAnchor>
                </Styled.Container>
            </Styled.Footer>
        </>
    )
}

export default Footer;