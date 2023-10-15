const Contact = () => {
  return (
  <div className="mx-5">
      <div className="text-lg  md:w-3/5 lg:w-1/2  mx-auto  my-10  rounded-xl   bg-gray-100 p-10 ">
      <h2 className="text-3xl text-center font-bold">Contact Us</h2> <br />
      At CelebrateTogether, we value your feedback, questions, and suggestions.
      We're here to make your social event experiences memorable and enjoyable.
      If you have any inquiries, need assistance, or want to get in touch with
      us, please feel free to reach out using the following methods: <br />{" "}
      <br />
      Customer Support <br />
      Our dedicated customer support team is available to assist you with any
      issues or concerns. You can reach them via email at CelebrateTogether or
      by filling out the contact form below. <br /> <br />
      Contact Form <br />
      Use our convenient contact form to send us your message or request. We'll
      do our best to respond promptly to your inquiries. <br /> <br />
      <textarea
        className="textarea textarea-accent"
        placeholder="Write here?"
      ></textarea>{" "}
      <br />
      <button className="btn btn-active btn-neutral btn-sm">Submit</button>
      <br></br>
      <br />
      Social Media <br />
      Stay connected with us on social media platforms to get the latest updates
      on upcoming events, news, and more. Follow us on CelebrateTogether. <br />{" "}
      <br />
      Visit Us <br />
      If you prefer face-to-face interaction, our office is located at Dhaka.
      Feel free to visit us during our business hours. We'd love to meet you in
      person! <br /> <br />
      We look forward to hearing from you and assisting you with all your
      event-related needs! <br />
      Best regards, <br />
      The CelebrateTogether Team <br />
    </div>
  </div>
  );
};

export default Contact;
