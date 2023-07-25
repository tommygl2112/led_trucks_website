import emailjs from 'emailjs-com';

const serviceId = 'service_nuieqny';
const templateId = 'template_o3g1xv9';
const userId = '7EVZUvF_ikhYjmd3v';

export const sendEmail = (name, email, message) => {
  const templateParams = {
    name,
    email,
    message
  };

  emailjs.send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
};

export default sendEmail;
