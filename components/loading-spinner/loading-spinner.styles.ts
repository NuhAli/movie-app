import { motion } from "framer";
import styled from "styled-components";

export const LoadingOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100%;
    background: #10141E;
    z-index: 99999999999;
    display: flex;
    justify-content: center;
    align-items: center;
`