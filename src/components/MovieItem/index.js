import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import {ThumbnailUrl, CloseButton} from './styledComponents'
import './index.css'

// Write your code here
const MovieItem = props => {
  const {moviesDetails} = props
  const {thumbnailUrl, videoUrl, ModelCloseContainer} = moviesDetails
  return (
    <Popup
      modal
      trigger={<ThumbnailUrl src={thumbnailUrl} alt="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <ModelCloseContainer>
          <CloseButton
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose size="30" color="#616e7c" />
          </CloseButton>
          <ReactPlayer url={videoUrl} controls />
        </ModelCloseContainer>
      )}
    </Popup>
  )
}
export default MovieItem
