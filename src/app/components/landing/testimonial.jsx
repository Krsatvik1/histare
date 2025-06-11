import React from 'react';

function Testimonial() {
  return (
    <div className=" py-16 px-4 md:px-20">
      <h2
        className="text-4xl md:text-5xl mb-12 text-[#3c597B] text-center"
        style={{ fontFamily: 'Rofane' }}
      >
        Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border border-[#f1d394] rounded-xl p-6 shadow-sm">
          <p className="text-[#333]">
            We like Histare Group&apos;s endeavors in propelling the Indian inventive arena. Their efforts will certainly energise the changing art &amp; design landscape.
          </p>
          <p className="font-semibold mt-4 text-[#1e1e1e]">
            Professor Gaurav Sharma <br />
            <span className="font-normal">Head of Department of Art and Design, Sharda University</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-[#f1d394] rounded-xl p-6 shadow-sm">
          <p className="text-[#333]">
            Histare’s innovative implementation of AI assisted tools for advanced systemizations shall be of great value to creative specialists for populating art in the digital environment.
          </p>
          <p className="font-semibold mt-4 text-[#1e1e1e]">
            Sanjeev Chopra <br />
            <span className="font-normal">CEO, Electrorporate Park, Ministry of Electronics and Information Technology, GOI</span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-[#f1d394] rounded-xl p-6 shadow-sm">
          <p className="text-[#333]">
            I am very happy to learn of Histare&apos;s future plans which gives great prominence to India&apos;s artistic traditions. Akhil comes from a venerable business family of Delhi and the arts and I am glad he is focussing on the arts as his passion.
          </p>
          <p className="font-semibold mt-4 text-[#1e1e1e]">
            Jalabala Vaidya <br />
            <span className="font-normal">Artistic Director of the Akshara Theatre, India&apos;s leading stage actresses</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
