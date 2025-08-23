'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "It is fascinating to see how a young man like Akhil is redefining the art world. By bringing technology and science (AI) to arts, Akhil is truly revolutionizing the creative world. His holistic approach of promoting sustainable innovations backed by solid research and cutting-edge technology will certainly draw in more art patrons and support artists and artisans. Akhil and Histare Group are sure to lead the way towards the new art world.",
    name: "Hemant Mehta",
    role: "Former Managing Director at Kantar\nChief Strategy Officer, Kantar South Asia"
  },
  {
    text: "We like Histare Group's endeavors in propelling the Indian inventive arena. Their efforts will certainly energise the changing art & design landscape.",
    name: "Professor Gaurav Sharma",
    role: "Head of the Department of Art and Design, Sharda University"
  },
  {
    text: "Histare’s innovative implementation of AI assisted tools for advanced systemizations shall be of great value to creative specialists for populating art in the digital environment.",
    name: "Sanjeev Chopra",
    role: "CEO, Electroporate Park, Ministry of Electronics and Information Technology, GOI"
  },
  {
    text: "I am very happy to learn of Histare's future plans which gives great prominence to India's artistic traditions. Akhil comes from a venerable business family of Delhi and the arts and I am glad he is focussing on the arts as his passion.",
    name: "Jalabala Vaidya",
    role: "Artistic Director of the Akshara Theatre\nIndia's leading stage actress"
  },
  {
    text: "Histare Group's evolved ways to think about community service, as marketeers, hoping to accomplish more than the intermittent demonstrations is admirable. I earnestly find it fulfilling to know about the social venture on their essential plans, their well-created marketing efforts, and quantified impact. I wish only the best to the team!!",
    name: "Pulak Paul",
    role: "Dubai Holdings"
  },
  {
    text: "The future requires inventive masterminds — individuals who can reconsider and recreate. Inventiveness encourages individuals in tackling indubitable issues comprehensively. We are eager to witness social organization Histare widen the allure of visual expressions.",
    name: "Ahana Deol Vohra & Vaibhav Vohra",
    role: "Continental Group"
  },
  {
    text: "I, on behalf of T&T Motors Private Limited, appreciate the smart programme 'The Vitrine' produced by Histare Concepts Private Limited. Your team's efforts and sincerity in successfully handling each aspect of the project was commendable. I would like to personally thank your team for helping us achieve our goals. It was concluded successfully with your help. On behalf of the management, we thank you for the effort put in for the event.",
    name: "Nitesh Bhalla",
    role: "Marketing Manager - T&T Motors Pvt Ltd"
  },
  {
    text: "Histare will always hold a special place in the evolution of Indian art. Powering our traditional arts, crafts, and artisans with technology is not just a brilliant idea, but also our best shot at conserving our legacy. Akhil Vadehra's passion and commitment to creating a sustainable future for the arts is truly infectious. The creative, young minds in this team are carving the way for our artists to be recognised on global platforms and bringing them the value they deserve. I am happy to congratulate Histare on this remarkable achievement!",
    name: "Shubhra Banerjee Batra",
    role: "Communications and Sustainability Specialist, Indian markets"
  },
  {
    text: "Indian art has a long history that goes back to cave paintings. Among the Indian traditional arts, Indian miniature paintings and sculptures from different schools are well recognized all over the world. Contemporary and modern art still needs better exposure in the world art scenario. It is my privilege to congratulate Akhil Vadhera to take this sacred project to promote visual art in the world art scenario. Under his patronage the Indian contemporary and modern art will make its mark and will be recognized as the premier country of the world. I am sure that the interest of Indian art and artists will be protected. I am also sure that artists of the country will take the venture of HISTARE with full confidence.",
    name: "Paramjeet Singh",
    role: "Indian Modernist, Former Principal of College of Art\nFormer Chairman of AIFACS"
  },
  {
    text: "The craftsmanship law may neither be a different statute nor a bound together lawful precept, yet its multidisciplinary nature uses numerous parts of legitimate protection in the guideline and assistance of the making, and the utilization and marketing of art. We have so much to learn from our shared histories and a great way to accomplish this is to harness technology to create engaging interactions that enable the user to learn something new and have fun in the process. We are glad to be a part of Histare's journey in creating paramount experiences!",
    name: "Sumes Dewan",
    role: "Managing Partner, Lex Favios\nLegal expert in Capital Markets & Corporate Finance"
  },
  {
    text: "I am enthused with Histare Group’s inventive explorations as a single-source integrated setup created based on the opportunities and risks in the given working environment in India. I believe that the same will assist them with staying focussed on developing the business and setting up their market position, while setting a way for long term sustainability and expanding value for all partners in the universe of sustainable creativity. I wish the Histare Group every success in their endeavours to showcase Indian art globally through a wide range of sustainable methodologies.",
    name: "Kritika Goel",
    role: "Ardent"
  },
  {
    text: "Histare Group’s unique Smart Programmes show a blend of development, boldness and a sharp eye for detail, initiated by youthful exceptional cultural strategists who are on top of present day times and quick to address the challenges of the future. An organization like Histare transforming the social frameworks is one of the most effective to combat the future crisis. We are delighted for their new endeavours and wish them the best.",
    name: "Sanyam Tyagi",
    role: "Aston Martin"
  },
  {
    text: "I am truly enthused with Akhil Vadehra and the Histare team’s belief and concerted endeavours in promoting a globalised arena in which artists have a right to their work's value and transparency in the art market.",
    name: "Yamini Kumar Jaipuria",
    role: "Indian Philanthropist | Cosmo Foundation | Former VP, General Electrics Capital Europe, Asia and India"
  },
  {
    text: "I commend the unprecedented efforts by Akhil Vadehra and the Histare Group pertaining to their pivotal contribution in the fields of art, education, culture and heritage, thereby leading to the creation of a sustainable model of growth and development which would be relevant for the Indian market and globally. With the onset of systematisation and the evolution of disruptive technologies in the creative arena, the Histare Group has been a complete pioneer in terms of its progressive approach and generation of ideas, strategies, thought processes as well as its steadfast focus on innovation.",
    name: "Attreyee Roy Chowdhury",
    role: "Vice President - India & Singapore at Henningson Black Level\nFormer Visiting Scholar at University of Cambridge"
  },
  {
    text: "On behalf of Casa Vida and Domov Housing, I express my heartfelt appreciation for the outstanding creative work Histare has delivered on our recent project in Goa. The paintings, sculptures, candles, and murals that you have designed have truly elevated our spaces, adding a refined, artistic touch that perfectly aligns with our brand vision. Your professionalism, creativity, and attention to detail were evident at every stage, making our collaboration smooth and inspiring. Thank you for your commitment to excellence. We look forward to more successful projects together.",
    name: "Mr. Rajeev Behl",
    role: "Casa Vida, Domov Housing"
  },
  {
    text: "It was a privilege to witness such a well-conceived tribute to Indian artisans. The Erbe Project went beyond mere exhibition, encapsulating the essence of India’s artistic traditions. From the captivating Kathak performances to the rich tapestry of artworks on display, the event was a beautiful blend of history, art, and modern innovation. It was also a dream project of Simran Aunty, and my family is thrilled to see it come to life. The focus on sustainability and innovation in craft is what truly sets this movement apart.",
    name: "Kavita Aneja",
    role: "Art Aficionado"
  },
  {
    text: "By providing students with opportunities to connect with local artisans, craftsmen and industry through live projects, IIAD attempts to include tradition and integrate innovation. Collaborative projects, like the Khakhan Batik exhibition not only offer students with direct exposure to craft as a form of spatial expression but at a larger level aim to benefit artisan communities and revitalize the Batik traditions for a contemporary audience.",
    name: "Dr. Jitin Chadha",
    role: "Founder & CEO, Indian Institute of Art & Design"
  },
  {
    text: "The Erbe Project was a masterclass in showcasing the intricate world of Indian crafts. Each exhibition segment was thoughtfully curated, and the performances brought alive the cultural heritage of our country. The Kathak performance, in particular, was mesmerizing, blending tradition with modern sensibilities, offering a deep and moving reflection on how art transcends generations.",
    name: "Preeti Singh",
    role: "Art Connoisseur"
  },
  {
    text: "The Erbe Project was not just an exhibition but a celebration of Indian craftsmanship. I was in awe of the range of artistry on display, from traditional Warli paintings to the detailed textile works of Khakhan. It was a beautifully orchestrated exhibition that paid tribute to the artisans and the cultural treasures they safeguard. The dialogue on sustainable practices in craft was especially thought-provoking.",
    name: "Bhawna Nanda Dewan",
    role: "Cultural Enthusiast"
  },
  {
    text: "I enjoyed the program thoroughly !! It was impressive from the minute we entered and were greeted by warm smiles, flowers and candles. The display of paintings, murals and art-works was exceptional, and done with great attention to detail. The art walks and panel discussion were very insightful. The dance performance by the 2 students of Shovanajis was really beautiful and captivating. In a nutshell, a beautiful evening immersed in the rich heritage of our country.",
    name: "Chitra Chaudhary",
    role: "Art Lover"
  }
];


function Testimonial() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Slide direction

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // always right to left
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Auto change every 2 sec

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
    }),
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
    }),
  };

  return (
    <div className=" flex items-center min-h-screen justify-center px-4 md:pt-5  ">
      <div className="w-full max-w-4xl --bg-blue-200 flex flex-col align-center">
        <h2
          className="text-4xl md:text-5xl --mb-12 pb-16 text-[#3c597B] text-center md:pt-5"
          style={{ fontFamily: 'Playfair Display' }}
        >
          Testimonials
        </h2>

        {/* Testimonial Card */}
        <div className="relative min-h-[450px] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute w-full h-90% border-2 border-[#f1d394] rounded-lg md:p-8 p-6 text-[#333]"
            >
              <p className="text-lg leading-relaxed mb-6">{testimonials[index].text}</p>
              <p className="md:text-right font-semibold text-[#1e1e1e] text-center">
                {testimonials[index].name}
                <br />
                <span className="font-normal text-sm whitespace-pre-line">
                  {testimonials[index].role}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-0 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 w-2 rounded-full ${
                i === index ? 'bg-[#3c597B]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
