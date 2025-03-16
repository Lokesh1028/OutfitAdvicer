import { useState } from 'react';
import { Shirt, Send, Sparkles, Clock, Users, Palette, TrendingUp } from 'lucide-react';

function App() {
  const [outfit,setOutfit] = useState('');
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

"evening cocktail party outfit": "For an evening cocktail party, choose a sleek dress in a vibrant color with statement accessories. Add high heels and a clutch. Ensure the outfit is elegant yet comfortable for mingling. Consider a jumpsuit for a modern twist, paired with statement earrings and a clutch.",

"outfit for a first date": "For a first date, aim for a balance between effort and comfort. Consider dark jeans paired with a button-down shirt and a casual blazer. Complete the look with clean sneakers or desert boots. Keep accessories minimal with just a nice watch. For cooler weather, add a stylish scarf or a light sweater. If the date is more casual, swap the blazer for a well-fitted cardigan and opt for chinos instead of jeans.",

"attire for a job promotion celebration": "When celebrating a job promotion, dress to impress while remaining appropriate for the venue. Opt for tailored trousers with a crisp button-up shirt and a textured blazer. Add leather oxfords and a quality belt that matches. Consider a pocket square for a touch of personality. For a more relaxed celebration, pair dark jeans with a casual blazer and a patterned shirt, finished with stylish loafers.",

"outfit for a gallery opening": "A gallery opening calls for artistic and sophisticated attire. Consider black trousers paired with a turtleneck and a statement jacket or blazer. Complete the look with leather chelsea boots and unique accessories like a sculptural ring or artistic watch. For warmer weather, opt for lightweight trousers and a silk shirt. Don't forget to bring a small notebook for thoughts on the exhibition.",

"casual Friday office wear": "For casual Friday at the office, strike a balance between professional and relaxed. Dark jeans paired with a tucked-in button-down shirt and a lightweight sweater works well. Add leather loafers or clean sneakers and a casual watch. Keep the overall look neat and put-together. For a more polished casual look, opt for chinos instead of jeans and add a knit tie or an unstructured blazer.",

"outfit for a sporting event": "When attending a sporting event, show team spirit while staying comfortable. Wear your team's jersey or a t-shirt in team colors paired with comfortable jeans or shorts depending on the weather. Add athletic shoes and a team cap. Don't forget sunglasses and sunscreen for outdoor events. Consider layering with a hoodie or lightweight jacket that can be easily removed. Bring a small backpack for essentials.",

"holiday office party attire": "For a holiday office party, embrace festive elements while maintaining professionalism. Consider a dark suit with a seasonal colored shirt or tie. Add polished dress shoes and subtle holiday-themed accessories like a pine tree pin or red pocket square. For a more casual office, pair dress pants with a festive sweater that's tasteful rather than over-the-top. Remember to dress for the venue specified in the invitation.",

"outfit for a garden wedding": "A garden wedding calls for sophisticated yet practical attire. Opt for a light-colored suit in linen or cotton paired with a pastel shirt and a floral tie. Wear leather loafers or oxfords that won't sink into grass. Consider the weather and bring sunglasses and perhaps a light jacket for evening. For a more casual garden wedding, khaki trousers with a blazer and an open-collar shirt would be appropriate.",

"networking event outfit": "For a networking event, project confidence and professionalism. Wear a well-fitted navy blazer with gray trousers and a light blue or white shirt. Add polished dress shoes and a quality leather belt. Ensure you have a professional bag or portfolio for business cards and materials. Consider a subtle pattern or texture in your shirt or tie to be memorable without being flashy. Keep accessories minimal but meaningful.",

"outfit for a Broadway show": "When attending a Broadway show, dress for both style and comfort. Consider dark jeans or trousers paired with a collared shirt and a sport coat. Add comfortable yet stylish shoes like loafers or dress boots. Bring a light jacket or sweater as theaters can be cool. For a more formal production or opening night, opt for a full suit or even a tuxedo depending on the theater and production.",

"winter date night attire": "For a winter date night, balance warmth with style. Layer a turtleneck sweater under a wool blazer or a tailored overcoat. Pair with dark jeans or wool trousers. Add leather boots and a cashmere scarf for extra warmth. Don't forget gloves and a stylish beanie if outdoor activities are planned. Consider textures like wool, cashmere, and leather to add depth to your winter ensemble.",

"summer outdoor concert outfit": "For a summer outdoor concert, prioritize comfort and sun protection. Opt for lightweight shorts or chinos paired with a breathable linen or cotton shirt. Add comfortable sneakers or sandals that you can stand in for hours. Don't forget a cap or hat, sunglasses, and sunscreen. Bring a light jacket for evening coolness. Consider a crossbody bag to keep your hands free for applauding or dancing.",

"business travel outfit": "When traveling for business, choose wrinkle-resistant pieces that transition well. Wear dark jeans or travel-friendly trousers with a wrinkle-free button-down and a comfortable blazer. Add slip-on shoes for easy security screening and a versatile watch. Layer with a light sweater that can be removed in different temperatures. Don't forget a quality carry-on and a laptop bag that looks professional while being functional.",

"outfit for a wine tasting": "A wine tasting calls for sophisticated casual attire. Consider chinos or dark jeans paired with a button-down shirt or a light sweater. Add leather loafers or driving shoes and a belt that matches. Avoid strong colognes that might interfere with the wine aromas. For outdoor vineyard visits, bring sunglasses and a light jacket. Consider wearing darker colors to hide potential wine spills.",

"winter weekend getaway attire": "For a winter weekend getaway, pack versatile layers. Start with thermal base layers under jeans and a chunky sweater. Add a water-resistant jacket and insulated boots. Don't forget a warm beanie, gloves, and a scarf. Pack items that can mix and match for different activities, from hiking to fireside relaxation. Consider bringing a dressier outfit option for nice dinners or unexpected social events.",

"college reunion outfit": "For a college reunion, aim for a put-together look that shows your personal evolution. Dark jeans paired with a crisp button-down and a blazer strike a good balance. Add clean sneakers or loafers and a quality watch. For a more casual reunion, a well-fitted polo with chinos works well. Consider wearing subtle school colors or a small alumni pin as a conversation starter.",

"outfit for a family portrait session": "When taking family portraits, choose timeless pieces that won't look dated in photos. Opt for neutral colors like navy, grey, or tan paired with white or light blue tops. Consider a sport coat with matching trousers or dark jeans with a button-down shirt. Avoid large logos or trendy items. Coordinate colors with other family members without matching exactly. Wear comfortable shoes as you may be standing for extended periods.",

"summer rooftop party attire": "For a summer rooftop party, embrace a breezy yet stylish aesthetic. Light chinos or linen pants paired with a short-sleeve button-down or a quality t-shirt work well. Add clean white sneakers or loafers and sunglasses. Consider a light jacket for when the sun sets. Accessorize with a casual watch and perhaps a hat for sun protection. Ensure your outfit allows for movement and comfort in warm weather.",

"funeral or memorial service outfit": "For a funeral or memorial service, show respect through traditional, conservative attire. A dark suit with a white or light blue shirt and a solid tie is appropriate. Add polished black dress shoes and minimal accessories. Ensure everything is clean, pressed, and in good condition. For less formal services, dark trousers with a dress shirt and blazer would be suitable. Always prioritize modesty and solemnity in your choices.",

"outfit for a home renovation DIY project": "When tackling home renovation, prioritize function and protection. Wear durable jeans or work pants with a comfortable t-shirt you don't mind getting dirty. Add closed-toe boots or sturdy sneakers for foot protection. Consider knee pads for floor work and work gloves to protect your hands. Have a bandana or cap to keep dust out of your hair. Layer with a flannel shirt that can be removed as you warm up from working.",

"first day at a new job outfit": "For your first day at a new job, dress slightly more formal than the everyday office dress code. A well-fitted suit in navy or charcoal with a crisp white shirt makes a strong impression. Add polished dress shoes and a quality leather belt. Keep accessories minimal and professional. For more casual workplaces, opt for dress pants with a blazer and a button-down shirt. Ensure everything is immaculate and well-pressed.",

"outdoor winter sporting event attire": "For an outdoor winter sporting event, prioritize warmth without bulk. Start with thermal base layers under jeans or snow pants. Add a warm mid-layer like a fleece and top with a waterproof jacket. Don't forget insulated waterproof boots, thick socks, a warm hat, and insulated gloves. Consider hand warmers and a thermos of hot beverage. For seated events, bring a stadium blanket and consider insulated seat pads.",

"outfit for a cooking class": "When attending a cooking class, choose comfortable clothes that can handle potential spills. Opt for dark jeans or chinos with a casual button-up shirt or a nice t-shirt. Wear closed-toe, non-slip shoes for safety in the kitchen. Avoid loose sleeves that might dip into food or catch on equipment. Skip valuable accessories that could get damaged or lost in food preparation. Consider bringing an apron if one isn't provided.",


"business lunch with clients": "For a business lunch with clients, project confidence and competence. Wear a tailored suit in a classic color like navy or grey with a crisp shirt and coordinating tie. Add polished dress shoes and a leather belt that matches. Ensure you have a professional notebook and pen. For slightly less formal industries, a blazer with coordinating trousers and an open-collar shirt would be appropriate. Always dress slightly above the expected dress code.",

"outfit for a volunteer day": "When volunteering, choose practical, comfortable clothing appropriate for the activity. For outdoor work, wear durable jeans or work pants with a comfortable t-shirt or long-sleeve shirt depending on weather. Add sturdy closed-toe shoes and bring work gloves if needed. For indoor volunteering like at a food bank, business casual attire might be more appropriate. Always check with the organization for any specific clothing requirements.",

"graduation ceremony outfit": "Under your graduation gown, wear something comfortable yet polished. A light button-down shirt with dress pants or a simple dress works well. Choose shoes that are comfortable for walking but nice enough for photos after you remove your gown. Avoid high collars that compete with the graduation gown neckline. Consider the weather, as venues can be hot or cold regardless of season. Bring a small bag for personal items during the ceremony.",

"outfit for a blind date": "For a blind date, aim for a balance of effort without seeming overdressed. Dark jeans paired with a button-down shirt and a casual blazer show you made an effort. Add clean sneakers or casual dress shoes and a simple watch. Consider the venue when choosing your outfit level of formality. Ensure everything is clean and well-fitted. For a more casual setting, swap the blazer for a nice sweater or cardigan.",

"parent-teacher conference attire": "For a parent-teacher conference, present yourself as a responsible and engaged parent. Business casual is typically appropriate—consider dress pants or dark jeans with a button-down shirt or a simple blouse. Add a blazer for a more professional touch or a cardigan for a softer approach. Wear comfortable yet polished shoes. Keep accessories minimal and professional. The goal is to appear respectful of the teacher's time and the educational setting.",

"outfit for a neighborhood block party": "A neighborhood block party calls for casual, approachable attire. Wear comfortable jeans or shorts with a simple t-shirt or polo. Add clean sneakers or casual shoes that are comfortable for standing. Consider layers like a light jacket or hoodie as these events often extend into evening. Keep accessories minimal and functional. The goal is to appear friendly and ready to socialize while being comfortable for outdoor activities.",

"golf outing attire": "For a golf outing, adhere to course dress codes while ensuring comfort for your swing. Typically, this means a collared shirt with khaki pants or golf shorts. Add proper golf shoes for traction during your swing. Consider a lightweight hat for sun protection and sunglasses. For cooler weather, layer with a quarter-zip pullover or a vest. Don't forget to bring a light rain jacket in case of changing weather conditions.",

"outfit for an art class": "When attending an art class, choose comfortable clothes that can handle potential paint or clay splatters. Opt for jeans or casual pants with a relaxed t-shirt or button-up. Add closed-toe shoes that you don't mind getting dirty. Consider bringing an apron or smock for additional protection. Avoid wearing your favorite or expensive clothes. For drawing classes, comfort is key as you may be sitting or standing for extended periods.",

"dinner with the in-laws outfit": "When dining with in-laws, aim for respectful yet comfortable attire. A button-down shirt with nice jeans or chinos makes a good impression without seeming stuffy. Add clean casual dress shoes or loafers and a simple watch. For more formal in-laws or upscale restaurants, consider adding a sport coat. Ensure clothes are clean, wrinkle-free, and well-fitted. When in doubt, dress slightly more formally than you think necessary.",

"outfit for a charity gala": "A charity gala typically calls for formal attire. A black tuxedo or dark suit with a crisp white shirt and bow tie is classic. Add polished formal shoes and minimal, elegant accessories like cufflinks and a dress watch. Check the invitation for specific dress codes like black tie or creative black tie. For creative black tie, you might incorporate a subtle pattern or color in your accessories while maintaining overall formality.",

"coffee meeting with a mentor": "For a coffee meeting with a mentor, business casual attire shows respect while maintaining approachability. Consider dark jeans or chinos with a button-down shirt and a blazer. Add clean casual shoes like loafers or clean sneakers. Bring a notebook and pen for taking advice. The goal is to appear professional but not overly formal, as coffee meetings are typically more relaxed than office meetings.",

"outfit for a house hunting day": "When house hunting, prioritize comfort for a potentially long day while maintaining a presentable appearance for realtors and sellers. Wear nice jeans or chinos with a collared shirt or neat casual top. Add comfortable walking shoes as you'll be touring multiple properties. Bring a light jacket or sweater as house temperatures vary. Consider a small notebook for taking notes on properties and a phone with a full battery for photos.",

"costume party outfit": "For a costume party, consider the theme, your comfort level, and the venue. Choose a costume that allows enough mobility and comfort for the event's duration. For pop culture costumes, focus on iconic elements rather than complex details. Consider group costumes with friends for added fun. Ensure masks don't impede vision or breathing. For cooler weather events, think about how to incorporate layers into your costume concept.",
"outfit for a day at the races": "A day at the races calls for refined, traditional attire. Consider a lightweight suit in a season-appropriate color with a crisp shirt and a patterned tie. Add a pocket square and perhaps a statement watch. Don't forget a hat for sun protection – perhaps a panama hat or similar style. For more prestigious race events, follow specific dress codes which might include morning suits or other formal requirements.",

"moving day outfit": "For moving day, prioritize function, comfort, and protection. Wear durable jeans or work pants with a comfortable t-shirt and a sweatshirt you can remove as you warm up. Add sturdy closed-toe shoes with good support – athletic shoes or work boots are ideal. Consider work gloves to protect your hands and a bandana or cap to keep sweat and dust at bay. Avoid loose clothing that could catch on furniture or boxes.",


"outfit for a home inspection": "When attending a home inspection, dress for both business and potentially dirty spaces. Wear casual but neat pants like khakis or jeans with a button-down shirt or polo. Add closed-toe shoes that you don't mind getting dusty. Bring a light jacket as you may be moving between air-conditioned and non-climate-controlled spaces. Consider bringing a small flashlight and a notebook for recording inspection details.",

"hiking trip attire": "For a hiking trip, layer appropriately for changing conditions. Start with moisture-wicking base layers, add insulating mid-layers depending on temperature, and top with a waterproof/breathable shell if needed. Wear hiking pants that convert to shorts for versatility. Add proper hiking boots with ankle support and wool or synthetic hiking socks. Don't forget a hat for sun protection, sunglasses, and a bandana. Avoid cotton which stays wet when damp.",

"outfit for attending a lecture or seminar": "For a lecture or seminar, business casual attire is typically appropriate. Consider chinos or dress pants with a button-down shirt or blouse. Add a blazer or cardigan for a more polished look. Comfortable yet professional shoes are essential as you may be sitting for extended periods. Bring a professional notebook and pen for taking notes. For academic settings, a messenger bag or professional backpack works well for materials.",

"first time meeting partner's friends outfit": "When meeting your partner's friends for the first time, aim for a put-together yet authentic look. Dark jeans with a nice t-shirt or casual button-down strikes the right balance. Add clean sneakers or casual shoes and minimal accessories. Consider the venue and planned activities when choosing your outfit's formality level. The goal is to appear approachable and authentic while showing you made an effort for the occasion.",

"outdoor winter wedding guest attire": "For an outdoor winter wedding, balance formality with practicality. Wear a dark wool suit with a seasonal tie and add a tailored overcoat. Consider thermal undergarments for extra warmth. Opt for dress boots rather than dress shoes for better traction and warmth. Bring dress gloves, a scarf, and possibly a hat that won't disrupt your hairstyle. For extended outdoor portions, consider discreet heat packs for hands and feet.",
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