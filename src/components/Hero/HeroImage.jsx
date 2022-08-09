import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Image from "components/Image"

const dynamicStyles = ({ theme, imageSize, backgroundImage }) => css`
  ${imageSize === "Large" &&
  `
        transform: rotate(0deg);
        
        ${theme.breakpoints.between("md", "lg")} {
          bottom: 30px;
          height: 241px;
          left: 37px;
          max-width: 248px;
        }
    
        ${theme.breakpoints.between("lg", "xl")} {
          bottom: 40px;
          left: 67px;
          max-width: 332px;
          height: 330px;
        }
    
        ${theme.breakpoints.between("xl", "2xl")} {
          bottom: 130px;
          left: 87px;
          height: 419px;
          max-width: 418px;
        }
    
        ${theme.breakpoints.up("2xl")} {
          bottom: 420px;
          left: 217px;
          height: 524px;
          max-width: 522px;
        }
  `}

  ${imageSize === "Normal" &&
  `

        ${theme.breakpoints.between("lg", "2xl")} {
          left: 50%;
          transform: translate(-50%, -50%);
          top: 50%;
        }

        ${theme.breakpoints.between("md", "lg")} {
          top: 48px;
           left: 50%;
          transform: translateX(-50%);
        }

        ${theme.breakpoints.between("md", "xl")} {
          max-width: 213px;
          height: 225px;
        }

        ${theme.breakpoints.between("xl", "2xl")} {
          max-width: 302px;
          height: 302px;
          left: 50%;
          top: 50%;
        }

        ${theme.breakpoints.up("2xl")} {
          max-height: 400px;
          left: 49%;
          top: 30%;
          width: 378px;
          transform: translate(-50%, -50%);
        }
  `}

  ${backgroundImage === "None" &&
  `
          ${theme.breakpoints.down("lg")} {
          position: static;
          transform: translateX(0) !important;
        }
  `}
`

const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }

  ${dynamicStyles}
`

export default HeroImage
