import React from 'react';

const Location = () => {
  return (
    <section className="location mt-20 mb-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Location</h2>
        <p className="text-lg text-gray-600 mb-4">
          We are conveniently located to serve your dental needs. You can find us at:
        </p>
        <address className="mb-6">
          <strong className="text-xl">Dental Care Center</strong><br />
          <span className="text-gray-700">123 Smile Avenue</span><br />
          <span className="text-gray-700">San Pedro, Davao City, Philippines</span><br />
          <span className="text-gray-700">Phone: (123) 456-7890</span><br />
          <span className="text-gray-700">Email: info@dentalcarecenter.com</span>
        </address>

        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Directions</h3>
        <p className="text-gray-600 mb-4">
          <strong>By Car:</strong> We offer ample parking spaces for our patients. Simply follow the main roads to reach Smile Avenue.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Public Transport:</strong> Our clinic is accessible via local transport options and is just a short walk from the nearest bus stop.
        </p>

        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Office Hours</h3>
        <p className="text-gray-600 mb-4">
          Monday - Friday: 8:00 AM - 5:00 PM<br />
          Saturday: 9:00 AM - 1:00 PM<br />
          Sunday: Closed
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Map</h3>
        <div className="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723504.5822468003!2d125.601151!3d7.072345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9b0bb80e1a1f5%3A0x2a9f486cb23ee6b0!2sSan%20Pedro%2C%20Davao%20City%2C%20Philippines!5e0!3m2!1sen!2sph!4v1681234567890!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
