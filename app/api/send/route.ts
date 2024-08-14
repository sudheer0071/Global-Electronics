"use server"
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

// console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
const api = process.env.RESEND_API_KEY || ""
// const api = "re_ZV64QyeN_34HVyihAmqmDaKTLtErCVs5t"
const resend = new Resend(api); 

type RequestBody = {
  email: string;
  name: string;
  phone: number;
  message: string;
  product?:string,
  files?:[],
  isProduct?:boolean,
};


export async function POST(request: NextRequest, res:NextResponse) {

  const body: RequestBody = await request.json();
// console.log(body);

console.log("isProduct");
console.log(body.isProduct);


  try {
    const { data, error } = await resend.emails.send({
      from: 'enquiry@globalelectronicsolutions.in',
      to: ['sudheer1614@gmail.com'],
      subject: 'testing email 📨',
      react: EmailTemplate({ firstName:body.name, product:body.product , email:body.email, phone:body.phone, message:body.message, isProduct:body.isProduct}),
      attachments: body.files?.map((file:any)=>({
        filename:file.filename,
        content:file.content
      }))
    });

    if (error) {
      console.log(error);
      
      return Response.json({ error }, { status: 500 });
    }
 

    return Response.json({data, message:"Email send successfully"});
  } catch (error) {
    console.log(error);
    
    return Response.json({ error }, { status: 500 });
  }
}
