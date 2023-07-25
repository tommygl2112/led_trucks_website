import emailjs from 'emailjs-com';

const serviceId = 'service_t0dpeyo';
const templateId = 'template_csgs8d9';
const userId = '7EVZUvF_ikhYjmd3v';

export const sendEmail = (name, number, email, message, country) => {
  const templateParams = {
    name,
    number,
    email,
    message,
    country
  };

  emailjs.send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
};

export default sendEmail;
