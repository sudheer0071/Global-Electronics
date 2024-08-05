import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  phone: number;
  email: string;
  message: string;
  product?:string;
  isProduct?:boolean
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, phone, email, message,product,isProduct
}) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <div style={{ fontSize: '24px', fontWeight: 'semibold', paddingLeft: '10px' }}>
        {isProduct?'Request for Enquiry':'Request for a quote'} 
      </div>
    </div>
    <div style={{ marginTop: '15px', maxWidth: '600px', fontSize: '20px' }}> <br />
      A user with <br />
      <div style={{ display: 'inline', fontSize: '20px', fontWeight: 600 }}>Name: </div> {firstName} <br /> 
      <div style={{ display: 'inline', fontWeight: 600 }}>Phone number: </div>
      <div style={{ display: 'inline', color: '#1E3A8A', fontSize: '20px' }}>{phone}</div> <br /> 
      <div style={{ display: 'inline', fontWeight: 600 }}>Email: </div>  
      <div style={{ display: 'inline', color: '#1E3A8A', fontSize: '16px' }}>
        <a href={`mailto:${email}`} style={{fontWeight:500,fontSize: '20px'}}>{email}</a>
      </div> <br /> 
      {isProduct?<div>
        <div style={{ display: 'inline', fontSize: '20px', fontWeight: 600 }}>Requested Product: </div> <div style={{display:'inline',color: '#1E3A8A' }} > {product} </div><br /> 
      </div>:''} 
      <div style={{ marginTop: '9px' }}>
        has sent you the following message:
      </div>
      <div style={{ marginTop: '5px', maxWidth: '600px', width: '100%', borderRadius: '8px', padding: '16px', border: '2px solid #0EA5E9', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', paddingLeft: '40px' }}>
        {message}
      </div>
    </div>
  </div>
);
