"use client"

import React from 'react';
import { RecoilRoot, atom} from 'recoil';  
export const quoteState = atom({
  key:"quoteBtn",
  default:false  
})
export const enquiryState = atom({
  key:"enquireyBtn",
  default:false  
})

export default function RecoilContextProvider({ children }:any){
  return <RecoilRoot>{children}</RecoilRoot>
}