'use client'
import { Button, IconButton, styled } from "@mui/material";
import { useState } from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const SingleFileUploader =()=>{
    const [file,setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            setFile(e.target.files[0]);
        }
    }

    const handleUpload = async ()=>{

    }



    return (
      <Button
      component="label"
      color="inherit"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
        name="file"
      />
    </Button>
    )
}

export default SingleFileUploader;