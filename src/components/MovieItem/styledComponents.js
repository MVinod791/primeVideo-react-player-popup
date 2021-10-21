// Style your elements here
import styled from 'styled-components'

export const ThumbnailUrl = styled.img`
  width: 215px;
  height: 150px;
  border-radius: 8px;
  cursor: pointer;
  @media (min-width: 1200px) {
    width: 254px;
    height: 170px;
  }
`
export const ModelCloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 90%;
  @media screen and(min-width:768px) {
    max-width: 1110px;
  }
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
