"use client"

import React, { ReactNode, useEffect } from 'react';
import { RecoilRoot, atom, useSetRecoilState} from 'recoil';  
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
const isBrowser = typeof window !== 'undefined';

export const quoteState = atom({
  key:"quoteBtn",
  default:false  
})
export const enquiryState = atom({
  key:"enquireyBtn",
  default:false  
})

export const contactState = atom({
  key:"contatBtn",
  default:false  
})


export const sendEnquiryState = atom({
  key:"sendEnquiryBtn",
  default:false  
})

export const showSearchState  = atom({
  key:"showSearch",
  default:false
})

export const productNameState = atom<string>({
  key:'productName',
  default:'',
  effects_UNSTABLE: isBrowser ? [persistAtom] : [],
})

export const responsiveNavState = atom<boolean>({
  key:'responsive',
  default:false, 
})

export default function RecoilContextProvider({ children }:{children:ReactNode}){
  return <RecoilRoot>{children}</RecoilRoot>
}
 