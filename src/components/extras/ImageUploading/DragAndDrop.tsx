/*import React from 'react';
import ImageUploading from "react-images-uploading";
import { useUploadImage } from '../../../hooks/useUploadImage';

import {DragAndDropBox} from './DragAnDropBox';
import {SelectedImage} from './SelectedImage'
import {Message} from './Message';


export const DragAndDrop = () => {

  const { urlImage, handleChange, images, ...rest } = useUploadImage();

  return (
    <>
      <Message urlImage={urlImage} />
      <ImageUploading multiple={false} value={images} onChange={handleChange} maxNumber={1}>
        {({
          imageList,
          onImageUpload,
          dragProps,
          isDragging,
          onImageRemove,
          onImageUpdate,
        }) => (
          <>
            {
              imageList[0]
                ? <SelectedImage  {...{ onImageRemove, onImageUpdate, ...rest }} img={imageList[0].dataURL} />
                : <DragAndDropBox {...{ onImageUpload, dragProps, isDragging }} />
            }
          </>
        )}
      </ImageUploading>
    </>
  )
}*/