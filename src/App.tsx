import React, { useState } from 'react';
import { Shirt, Send, Sparkles, Clock, Users, Palette, TrendingUp } from 'lucide-react';

function App() {
  const [outfit, setOutfit] = useState('');
  const [advice, setAdvice] = useState('');

  const fashionAdvice = {
    "outfit for a casual weekend brunch": "For a casual weekend brunch, consider a relaxed yet stylish look. Opt for a lightweight blazer paired with distressed jeans and a simple t-shirt. Complete the outfit with loafers and a fedora for a chic touch. Don't forget a crossbody bag for convenience. For warmer weather, swap the blazer for a stylish kimono and wear espadrilles. Accessorize with a statement watch and sunglasses.",
    "business casual attire for a job interview": "For a job interview, choose a navy suit with a crisp white shirt and a subtle tie. Add brown leather shoes and a leather briefcase. Keep accessories minimal and ensure everything is polished and wrinkle-free. Consider a pop of color with a pocket square or a vibrant tie. For a more modern look, pair a tailored blazer with khaki pants and a polished oxford shirt.",
    "beach day outfit for a summer vacation": "A beach day calls for comfort and style. Wear a flowy sundress with sandals and a wide-brim hat. Accessorize with sunglasses and a beach tote for your essentials. Don't forget reef-safe sunscreen and a light jacket for cooler breezes. For a more casual look, pair board shorts with a graphic tee and flip-flops.",
    "formal wear for a wedding": "For a formal wedding, a black tuxedo with a white shirt and a silk tie is classic. Add dress shoes and a pocket square. Consider the time and location of the wedding to decide on accessories and the formality level. For a more modern touch, opt for a navy suit with a patterned shirt and a stylish bow tie.",
    "casual dinner with friends": "A casual dinner with friends could be stylish yet comfortable. Pair a graphic tee with chinos and sneakers. Add a bomber jacket for a relaxed vibe and keep accessories simple. For a more polished look, choose a slim-fit denim jacket with a collared shirt and loafers.",
    "workout clothes for a gym session": "For a gym session, wear moisture-wicking shorts and a tech tee. Add a pair of running shoes and a sweat-resistant watch. Don't forget a gym bag for your essentials and a water bottle. Consider layering with a lightweight hooded sweatshirt for pre- or post-workout warmth.",
    "outfit for a music festival": "At a music festival, opt for comfortable jeans or shorts, a band tee, and sturdy boots. Add a festival backpack and a statement hat. Consider the weather and bring layers for cooler evenings. Accessorize with festival-themed jewelry and a reusable water bottle.",
    "business formal attire for a conference": "For a business conference, wear a tailored suit in a dark color with a matching shirt and tie. Add dress shoes and a briefcase. Keep accessories professional and ensure your attire is immaculate. Consider a power suit with a bold pattern for a memorable look.",
    "casual daytime outfit for running errands": "A casual daytime outfit for errands could include a casual shirt, jeans, and sneakers. Add a lightweight jacket and a practical bag. Keep the look comfortable and functional with a versatile backpack and a pair of sunglasses.",
    "evening cocktail party outfit": "For an evening cocktail party, choose a sleek dress in a vibrant color with statement accessories. Add high heels and a clutch. Ensure the outfit is elegant yet comfortable for mingling. Consider a jumpsuit for a modern twist, paired with statement earrings and a clutch."
  };

  const getOutfitAdvice = () => {
    if (!outfit) return;
    
    const userInput = outfit.toLowerCase();
    const keywords = userInput.split(/\s+/);
    
    const matches = Object.entries(fashionAdvice).map(([key, value]) => {
      const keyLower = key.toLowerCase();
      let score = 0;
      
      if (keyLower === userInput) {
        return { key, value, score: 1000 };
      }
      
      const keyPhrases = ['outfit for', 'attire for', 'what to wear', 'clothes for'];
      for (const phrase of keyPhrases) {
        if (userInput.includes(phrase)) {
          score += 50;
        }
      }
      
      const occasions = ['wedding', 'interview', 'brunch', 'dinner', 'gym', 'festival', 'conference', 'party', 'beach', 'errands'];
      for (const occasion of occasions) {
        if (userInput.includes(occasion) && keyLower.includes(occasion)) {
          score += 100;
        }
      }
      
      const styles = ['casual', 'formal', 'business', 'workout', 'evening'];
      for (const style of styles) {
        if (userInput.includes(style) && keyLower.includes(style)) {
          score += 75;
        }
      }
      
      keywords.forEach(keyword => {
        if (keyLower.includes(keyword)) {
          score += 25;
        }
      });
      
      return { key, value, score };
    });
    
    const bestMatch = matches.sort((a, b) => b.score - a.score)[0];
    
    if (bestMatch.score < 25) {
      setAdvice("I recommend keeping your outfit balanced and appropriate for the occasion. Consider the weather, venue, and dress code. Don't forget to accessorize thoughtfully and ensure your clothes are clean and well-fitted. For more specific advice, please provide details about the occasion or setting (e.g., 'outfit for a casual weekend brunch' or 'what to wear to a job interview').");
      return;
    }
    
    setAdvice(bestMatch.value);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
        
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-4">
              <Shirt className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Outfit Advisor
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Your Personal AI Fashion Advisor
          </p>
          <p className="text-lg text-white/80 max-w-2xl">
            Get personalized outfit recommendations for any occasion, curated just for you
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-50 rounded-full p-3">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Time-Aware</h3>
              <p className="text-gray-600 text-center">Get outfit suggestions perfectly suited for any time of day</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-50 rounded-full p-3">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Occasion-Perfect</h3>
              <p className="text-gray-600 text-center">From casual meetups to formal events, we've got you covered</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-50 rounded-full p-3">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Style-Matched</h3>
              <p className="text-gray-600 text-center">Recommendations that match your personal style preferences</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-50 rounded-full p-3">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Trend-Aware</h3>
              <p className="text-gray-600 text-center">Stay fashionable with current trend-incorporating suggestions</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg">
              <div className="max-w-3xl mx-auto">
                {/* Input Section */}
                <div className="mb-8">
                  <label htmlFor="outfit" className="block text-lg font-medium text-gray-700 mb-3">
                    What are you looking to wear? Describe the occasion or ask for specific advice
                  </label>
                  <div className="relative">
                    <textarea
                      id="outfit"
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all min-h-[120px] resize-none text-gray-800 shadow-sm"
                      placeholder="Try asking something like: 'What should I wear to a job interview?' or 'outfit for a beach day'"
                      value={outfit}
                      onChange={(e) => setOutfit(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          getOutfitAdvice();
                        }
                      }}
                    />
                    <button
                      onClick={getOutfitAdvice}
                      className="absolute bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Output Section */}
                {advice && (
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 animate-fade-in shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-white rounded-full p-2 shadow-md">
                        <Sparkles className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-3 text-xl">Style Advice</h3>
                        <p className="text-gray-700 leading-relaxed">{advice}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        Get personalized fashion advice to elevate your style
      </footer>
    </div>
  );
}

export default App;