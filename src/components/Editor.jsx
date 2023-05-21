import React from 'react';
import {Box} from '@mui/material';
import { useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

function Editor() {
  useEffect(()=>{
    const quillServer=new Quill('#container',{theme:'snow', modules:{toolbar:toolbarOptions}})
  },[])
  
  
  
  return (

    <div  style={{paddingLeft:10,paddingRight:10, marginTop:10}}>
      <Box id='container'>
      <button id="custom-button">back</button>
      </Box>
    </div>
    
  )
}

export default Editor