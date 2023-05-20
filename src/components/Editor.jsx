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
  const [title,setTitle]=useState('Untitled');
  useEffect(() => {
      document.title = title;
  }, [title]);
  
  const handleTitle = (e)=>{
    setTitle(e.target.value)
  }
  return (
    <div className='Editor' >
      <input type='text' onChange={handleTitle} />
      <Box id='container'> </Box>
    </div>
    
  )
}

export default Editor