import { motion } from 'framer-motion';


const ContactForm = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Send us a message section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="company-name" className="block text-sm">Company Name</label>
              <input
                type="text"
                id="company-name"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                placeholder="e.g. Google, Apple"
              />
            </div>
            <div>
              <label htmlFor="company-email" className="block text-sm">Company Email</label>
              <input
                type="email"
                id="company-email"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                placeholder="e.g. name@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm">Message</label>
              <textarea
                id="message"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
                rows="4"
                placeholder="Hi, we'd like to create some awesomeness with you..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white hover:bg-gray-600"
              >
                Send Email
              </button>
            </div>
          </form>
        </motion.div>
        
        {/* Contact Us section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm mb-2">ADDRESS</p>
          <p className="text-lg mb-4">The Office Group</p>
          <p className="text-sm mb-2">91 Wimpole Street</p>
          <p className="text-sm mb-2">Marylebone</p>
          <p className="text-sm mb-2">London</p>
          <p className="text-sm mb-2">W1G 0EF</p>
          <p className="text-sm mb-8">United Kingdom</p>
          <p className="text-sm mb-2">EMAIL</p>
          <p className="text-lg mb-4"><a href="mailto:info@fillistudios.com" className="text-teal-500 hover:underline">info@fillistudios.com</a></p>
          <p className="text-sm mb-2">CALL US</p>
          <p className="text-lg"><a href="tel:+442078469316" className="text-teal-500 hover:underline">(+44) 020 7846 9316</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
