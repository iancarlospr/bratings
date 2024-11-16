import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ShieldCheckIcon, CurrencyDollarIcon, FireIcon, CheckCircleIcon, CreditCardIcon, UsersIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import creditCard1 from './assets/card-1.png';
import creditCard2 from './assets/card-2.png';
import creditCard3 from './assets/card-3.png';
import creditCard4 from './assets/card-4.png';
import creditCard5 from './assets/card-5.png';

const insuranceProviders = [
  {
    id: 1,
    name: 'Mastercard Black Banreservas',
    logo: <img src={creditCard5} alt="Credit Card 1" className="w-full h-auto object-contain mx-auto md:mx-0 rounded-xl" />,
    features: ['Bonus: 150k points', 'Intro APR: 0% for 24 months', 'Rewards: 5X Points on All Purchases', 'Annual Fee: $450'],
    highlight: 'Best Overall',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mastercard Standard Tactile Banreservas',
    logo: <img src={creditCard4} alt="Credit Card 2" className="w-full h-auto object-contain mx-auto md:mx-0 rounded-xl" />,
    features: ['Bonus: 75k points', 'Intro APR: 0% for 18 months', 'Rewards: 3.5X Points on Travel', 'Annual Fee: $95'],
  },
  {
    id: 3,
    name: 'Visa Platinum Universe',
    logo: <img src={creditCard3} alt="Credit Card 3" className="w-full h-auto object-contain mx-auto md:mx-0 rounded-xl" />,
    features: ['Bonus: 60k points', 'Intro APR: 0% for 15 months', 'Rewards: 2X Points on Dining', 'Annual Fee: $0'],
  },
  {
    id: 4,
    name: 'Mastercard MLB',
    logo: <img src={creditCard1} alt="Credit Card 4" className="w-full h-auto object-contain mx-auto md:mx-0 rounded-xl" />,
    features: ['Bonus: 40k points', 'Intro APR: 0% for 12 months', 'Rewards: 1.5X Points on Everything', 'Annual Fee: $0'],
  },
  {
    id: 5,
    name: 'Mastercard Infinity',
    logo: <img src={creditCard2} alt="Credit Card 5" className="w-full h-auto object-contain mx-auto md:mx-0 rounded-xl" />,
    features: ['Bonus: 100k points', 'Intro APR: 3% for 24 months', 'Rewards: 5X Points on All Purchases', 'Annual Fee: $0'],
  }
];

function App() {
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = document.getElementById('pills-container');
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = document.getElementById('pills-container');
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Check initial scroll state
      checkScroll();
    }
    return () => container?.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-center items-center py-4 px-6 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <CreditCardIcon className="h-8 w-8 text-gray-900" />
          <span className="text-2xl font-['Montserrat'] text-gray-800 tracking-tight">BankRatings</span>
        </div>
      </nav>

      <motion.header
        initial={{ backgroundPositionY: 0 }}
        animate={{ 
          backgroundPositionY: [0, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative py-16 px-4 bg-cover bg-center min-h-[300px] bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1646992914433-de93d0d06c98?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundAttachment: 'fixed', // Added for better browser support
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-left"> {/* Changed from text-center */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-white"
          >
            Best 5 Credit Cards 2024
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl text-white mb-2" /* Added mb-2 */
          >
            Find the perfect credit card for your lifestyle.
            Make informed decisions with our expert reviews and comprehensive comparisons. We analyze annual fees, APR rates, and reward programs to help you choose the best option.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-300"
          >
            List Updated: 14 November, 2024
          </motion.p>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="relative">
          <div className="flex items-center justify-center"> {/* Added justify-center */}
            {canScrollLeft && (
              <button 
                className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-blue-600"
                onClick={() => document.getElementById('pills-container').scrollBy({left: -200, behavior: 'smooth'})}
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
            )}

            <div id="pills-container" className="flex gap-3 overflow-x-hidden scroll-smooth px-8">
              {[
                { id: 'best', label: 'Best' },
                { id: 'travel', label: 'Travel' },
                { id: 'balance', label: 'Balance Transfer' },
                { id: 'secured', label: 'Secured' },
                { id: 'low-interest', label: 'Low Interest' },
                { id: 'business', label: 'Business' },
              ].map((category) => (
                <button
                  key={category.id}
                  className={`
                    px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all
                    ${category.id === 'best' 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {canScrollRight && (
              <button 
                className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-blue-600"
                onClick={() => document.getElementById('pills-container').scrollBy({left: 200, behavior: 'smooth'})}
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16 pt-8">  {/* Added pt-16 */}
        {insuranceProviders.map((provider, index) => (
          <div key={provider.id} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6 pb-6 border-2 border-blue-400/50 hover:border-blue-500/70"
            >
              <h2 className="text-2xl font-bold text-gray-800 pb-0 text-center">{provider.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                {/* Logo section */}
                <div className="flex flex-col justify-center md:justify-start relative">
                  <div className="w-full mb-2">
                    {index === 0 ? (
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          times: [0, 0.5, 1]
                        }}
                      >
                        {provider.logo}
                      </motion.div>
                    ) : (
                      provider.logo
                    )}
                  </div>
                  {index === 0 && (
                    <div className="absolute top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-7 w-7 text-yellow-400 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                      ))}
                    </div>
                  )}
                </div>

                {/* Features section */}
                <div className="col-span-2 w-full">
                  <ul className="space-y-2">
                    {provider.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-gray-700 mr-2" />
                        {feature.split(':').map((part, index) => 
                          index === 0 ? (
                            <><strong key={index}>{part}</strong>:{' '}</>
                          ) : part
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button section */}
                <div className="flex flex-col items-center">
                  {index === 0 && (
                    <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mb-4">
                      <UsersIcon className="h-4 w-4" />
                      <span>37 applied in the last 24 hours</span>
                    </div>
                  )}
                  <button className="w-full max-w-xs bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200">
                    Apply to this offer
                  </button>
                  <p className="text-sm text-gray-500 mt-4">No Credit Check • Instant Results</p>
                </div>
              </div>

              <div className="w-full mt-4 flex flex-col items-center">
                <motion.button
                  onClick={() => {
                    const newExpanded = new Set(expandedCards);
                    if (newExpanded.has(provider.id)) {
                      newExpanded.delete(provider.id);
                    } else {
                      newExpanded.add(provider.id);
                    }
                    setExpandedCards(newExpanded);
                  }}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <span>More Details</span>
                  <motion.div
                    animate={{ rotate: expandedCards.has(provider.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="h-5 w-5" />
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{ height: expandedCards.has(provider.id) ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden w-full"
                >
                  <div className="py-4">
                    <h3 className="font-bold text-lg mb-3">Card Benefits</h3>
                    <ul className="space-y-2">
                      {[
                        'Earn $200 cash back after you spend $1,500 on purchases in the first 6 months of account opening. This bonus offer will be fulfilled as 20,000 ThankYou® Points, which can be redeemed for $200 cash back.',
                        '0% Intro APR on balance transfers and purchases for 15 months. After that, the variable APR will be 18.74% - 28.74%, based on your creditworthiness.',
                        'No rotating bonus categories to sign up for – as your spending changes each billing cycle, your earn adjusts automatically when you spend in any of the eligible categories.',
                        'Up to $600 of cell phone protection against damage or theft. Subject to a $25 deductible.'
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1.5">
                            <div className="h-2 w-2 rounded-full bg-gray-700"></div>
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <footer className="bg-gray-100 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Branding Column */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CreditCardIcon className="h-8 w-8 text-gray-900" />
                <span className="text-xl font-['Montserrat'] text-gray-800">BankRatings</span>
              </div>
              <p className="text-sm text-gray-600">
              BankRatings, LLC.<br />
                123 Financial Street<br />
                Santo Domingo, DR
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Press</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Credit Card Guide</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Sitemap</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-600">Accessibility</a></li>
                <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="text-sm text-gray-600 text-center md:text-left">
              <p className="mb-4">
                Advertising Disclosure: Some offers on this site may be from companies who are advertising clients of BankRatings. This may impact how and where products appear on this site. The site does not include all card companies or all card offers available in the marketplace.
              </p>
              <p>© 2024 BankRatings, LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;