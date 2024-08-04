"use client"

import React from 'react';
import { RecoilRoot, atom} from 'recoil';  
export const btnState = atom({
  key:"btn",
  default:false  
})

export default function RecoilContextProvider({ children }:any){
  return <RecoilRoot>{children}</RecoilRoot>
}