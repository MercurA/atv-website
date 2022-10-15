import { init } from 'emailjs-com';

init(process.env.NEXT_PUBLIC_USER_ID);

function postEmail(formData) {
  const data = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.USER_ID,
    template_params: formData && formData
  }
  return fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    // .then(res => res.json())
    .then(res => console.log(res.body))
}

export default postEmail;