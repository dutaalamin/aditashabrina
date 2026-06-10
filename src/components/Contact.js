import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    emailjs.sendForm(
      'service_1o3f1un',
      'template_876czll',
      form.current,
      'pc_TStT_UQhORjnR2'
    )
      .then(() => {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
        });
        form.current.reset();
        setLoading(false);
      }, (error) => {
        console.error("EmailJS error:", error);
        setStatus({
          type: 'error',
          message: 'Sorry, there was an issue sending your message. Please try emailing me directly.'
        });
        setLoading(false);
      });
  };

  return (
    <section className="py-16 max-w-7xl mx-auto" id="contact">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
          Contact Me
        </h2>
        <div className="w-12 h-1 bg-rose-600/30 rounded-full mt-4"></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left: Contact Info Channels */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                Connect Directly
              </h3>
              <p className="text-stone-500 font-semibold text-xs leading-relaxed">
                Feel free to reach out via phone, email, or LinkedIn. I am highly responsive and look forward to discussing how I can add value to your administrative or HR operations team.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Channel */}
                <a
                  href="mailto:aditashabrina@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white border border-stone-100 rounded-2xl hover:border-rose-200 hover:shadow-md hover:shadow-rose-50/40 transition-all duration-300 group"
                >
                  <div className="p-3 bg-rose-50 text-rose-600 rounded-xl group-hover:bg-rose-100 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Email Address</h4>
                    <p className="text-sm font-bold text-stone-850 group-hover:text-rose-700 transition-colors">aditashabrina@gmail.com</p>
                  </div>
                </a>

                {/* Phone Channel */}
                <a
                  href="tel:+6287835371990"
                  className="flex items-center gap-4 p-4 bg-white border border-stone-100 rounded-2xl hover:border-rose-200 hover:shadow-md hover:shadow-rose-50/40 transition-all duration-300 group"
                >
                  <div className="p-3 bg-rose-50 text-rose-600 rounded-xl group-hover:bg-rose-100 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                    <p className="text-sm font-bold text-stone-850 group-hover:text-rose-700 transition-colors">+62 878-3537-1990</p>
                  </div>
                </a>

                {/* LinkedIn Channel */}
                <a
                  href="https://linkedin.com/in/aditashabrina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-stone-100 rounded-2xl hover:border-rose-200 hover:shadow-md hover:shadow-rose-50/40 transition-all duration-300 group"
                >
                  <div className="p-3 bg-rose-50 text-rose-600 rounded-xl group-hover:bg-rose-100 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">LinkedIn Profile</h4>
                    <p className="text-sm font-bold text-stone-850 group-hover:text-rose-700 transition-colors">linkedin.com/in/aditashabrina</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-stone-100/50 shadow-md flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold text-stone-900 tracking-tight mb-6">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 flex-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50/50 focus:bg-white focus:border-rose-300 outline-none text-sm font-semibold transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">Your Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50/50 focus:bg-white focus:border-rose-300 outline-none text-sm font-semibold transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50/50 focus:bg-white focus:border-rose-300 outline-none text-sm font-semibold transition-all"
                    placeholder="Inquiry / Opportunity"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-stone-400 tracking-wider">Message Body</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-stone-100 bg-stone-50/50 focus:bg-white focus:border-rose-300 outline-none text-sm font-semibold resize-none transition-all"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
              </div>

              {/* Status Alert Banner */}
              {status.type && (
                <div className={`p-4 rounded-2xl flex items-start gap-3 mt-4 border ${status.type === 'success'
                  ? 'bg-emerald-50 border-emerald-100 text-emerald-800'
                  : 'bg-rose-50 border-rose-100 text-rose-800'
                  }`}>
                  {status.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                  <p className="text-xs font-semibold leading-relaxed">{status.message}</p>
                </div>
              )}

              <div className="flex justify-end pt-4 no-print">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-stone-900 hover:bg-rose-950 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-2 active:scale-95 disabled:bg-stone-400 disabled:scale-100 cursor-pointer shadow-md shadow-stone-200"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
