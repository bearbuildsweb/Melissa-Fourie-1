import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../data/content';
import heroEditorialPortraitImg from '../assets/images/hero-MF.jpg';

interface HeroProps {
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[96vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 overflow-hidden bg-[#F2ECE6] select-none"
    >
      {/* Background Archival Hairlines - Subtle luxury margin guides */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="max-w-[1440px] h-full mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="absolute left-6 sm:left-8 lg:left-12 top-0 bottom-0 w-[1px] bg-[#E0D6CB]/60" />
          <div className="absolute right-6 sm:right-8 lg:right-12 top-0 bottom-0 w-[1px] bg-[#E0D6CB]/60" />
        </div>
      </div>

      {/* Main Editorial Canvas Container */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex-1 flex flex-col justify-center my-auto py-6 sm:py-8 lg:py-10">
        {/* Asymmetric Hero Composition */}
        <div className="relative w-full flex-1 flex flex-col lg:block my-auto">
          
          {/* Dominant Editorial Photography (70% Visual Core) */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[65%] xl:w-[63%] lg:ml-auto relative z-10"
          >
            {/* Architectural Frame */}
            <div className="relative overflow-hidden bg-[#E8E0D7] border border-[#DDD2C5] shadow-[0_25px_60px_rgba(62,32,35,0.06)]">
              
              {/* Top Line Overlay with Soft Vignette / Fog & Corner Placement */}
              <div className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-7 pt-3.5 sm:pt-5 pb-10 sm:pb-12 bg-gradient-to-b from-black/65 via-black/25 to-transparent flex items-center justify-between text-[8px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.32em] text-[#F2ECE6] drop-shadow-sm pointer-events-none">
                <span className="font-light">Capetown</span>
                <div className="flex items-center space-x-1.5 sm:space-x-2 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29A3A]" aria-hidden="true" />
                  <span>Worldwide</span>
                </div>
              </div>

              {/* High-Resolution Luxury Editorial Portrait */}
              <img
                src={heroEditorialPortraitImg}
                alt="Melissa Fourie signature luxury bridal hair and makeup artistry"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] sm:h-[580px] lg:h-[680px] xl:h-[740px] object-cover object-top filter contrast-[1.02] brightness-[0.99] transition-transform duration-1000 ease-out hover:scale-[1.015]"
              />

              {/* Tablet & Mobile Soft Mist / Vignette Dissolve for Bottom Legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-[#F2ECE6] via-[#F2ECE6]/85 to-transparent lg:hidden z-10 pointer-events-none"
              />

              {/* Minimal Floating Instagram Badge - positioned above the blur on mobile & tablet */}
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute bottom-48 sm:bottom-60 lg:bottom-6 right-4 sm:right-6 z-40 bg-[#FAF6F1]/95 backdrop-blur-md border border-[#DDD2C5] hover:border-[#C29A3A] px-3.5 py-1.5 sm:px-4 sm:py-2 flex items-center space-x-2 text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.26em] text-[#3E2023] transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-[#3E2023] transition-all duration-300 group-hover:scale-110 group-hover:text-[#C29A3A]" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Subtle Offset Shadow Hairline Frame */}
            <div className="absolute -inset-2.5 sm:-inset-3 border border-[#E0D6CB] pointer-events-none -z-10 hidden sm:block" />
          </motion.div>

          {/* Overlapping Typography & Floating Editorial Placard */}
          {/* On desktop: absolutely positioned to overlap 15-20% into the photograph */}
          {/* On mobile: gentle negative top margin to bridge the composition smoothly without congestion */}
          <div className="relative -mt-10 sm:-mt-16 lg:mt-0 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[56%] xl:w-[54%] z-30 flex flex-col justify-center pointer-events-none">
            
            {/* Grand Scale Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-0 relative"
            >
              {/* Tablet & Mobile Frosted Mist / Vignette Halo for "Established Excellence" Legibility */}
              <div
                aria-hidden="true"
                className="absolute -inset-x-4 sm:-inset-x-6 -inset-y-3 sm:-inset-y-4 -z-10 lg:hidden bg-gradient-to-r from-[#F2ECE6]/95 via-[#F2ECE6]/80 to-transparent backdrop-blur-[2px] pointer-events-none"
              />

              <h1 className="font-serif text-[2.75rem] sm:text-7xl md:text-8xl lg:text-[6.6rem] xl:text-[7.6rem] font-light text-[#3E2023] leading-[0.92] sm:leading-[0.85] tracking-[-0.035em] drop-shadow-sm">
                Established <br />
                <span className="italic font-normal text-[#3E2023] ml-2 sm:ml-4 lg:ml-8 inline-block transform translate-y-1">
                  Excellence
                </span>
              </h1>
            </motion.div>

            {/* Tactile Ivory Editorial Placard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto mt-5 sm:mt-8 lg:mt-10 max-w-sm sm:max-w-md bg-[#FAF6F1]/98 backdrop-blur-md p-5 sm:p-8 border border-[#DDD2C5] shadow-[0_20px_50px_rgba(62,32,35,0.06)]"
            >
              <p className="font-sans text-sm sm:text-base text-[#664D50] font-light leading-relaxed mb-5 sm:mb-6">
                Trusted by clients and celebrated across the world.
              </p>

              {/* Exact CTA preserved & styled like a fashion house invitation */}
              <div className="pt-3 border-t border-[#E0D6CB] flex items-center justify-between">
                <button
                  id="hero-secondary-portfolio-btn"
                  onClick={onExplorePortfolio}
                  className="group relative inline-flex items-center justify-between w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 bg-[#3E2023] text-[#F2ECE6] text-[10px] sm:text-[10.5px] uppercase tracking-[0.22em] sm:tracking-[0.24em] font-normal hover:bg-[#4E2C30] transition-all duration-300 shadow-sm active:scale-[0.99] border border-[#3E2023] hover:border-[#C29A3A]/40"
                >
                  <span className="flex items-center space-x-3">
                    <span>See the work</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#C29A3A]">
                      &rarr;
                    </span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 ml-3 sm:hidden text-[#C29A3A]" />
                </button>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};



