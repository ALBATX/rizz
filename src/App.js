// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [randomContent, setRandomContent] = useState({ text: '', imageUrl: '' });
  const [previousContent, setPreviousContent] = useState(null);

  const contentArray = [
    {
      text: 'Sen kedi misin acaba? Çünkü seni görünce sevesim geliyor.',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207881745916239912/1.png?ex=65e14289&is=65cecd89&hm=fd0c1cd7e3c9ae8189bfa9ef95ac384d8c8aec03e046e359bda815b164c50b66&',
    },
    {
      text: 'Matematik sınavı mısın? Sadece bakışıyoruzda...',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207884700736299019/3.png?ex=65e1454a&is=65ced04a&hm=9f9e3abbd9fd6298c0b915c638faa8485d0e6e016168370bd12f2e2033256dea&',
    },
    {
      text: 'Bir lades tutuşsak seninle "Nesine?" desen "Sesine" derim bilirsin yüzün aklımdadır hep ben sesini özlerim.',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207883111942324296/2.png?ex=65e143cf&is=65cececf&hm=da35f2aca830b1051353cb7a8f861a171ecf790fd02fbb5a0dc15c736f252d6c&',
    },
    {
      text: 'Sen "Gotham" şehri misin? Çünkü seni her zaman korumak istiyorum.',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207885409300779039/4.png?ex=65e145f3&is=65ced0f3&hm=b72b0a92ae505b1ced190c3ad4cd0af086bbfcdf0267388e3860903a88841480&',
    },
    {
      text: 'Bebeğim sen bir sır mısın? Çünkü seni paylaşabileceğimi sanmıyorum.',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207886036386975744/5er.png?ex=65e14688&is=65ced188&hm=dff6992a798c729ade0b5ceadae403a4058549179e0b130a5b8ee42428d8156d&',
    },
    {
      text: 'Tatlım sen baklava mısın? Çünkü senden tatlısı yok.',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207890285703733258/56.png?ex=65e14a7d&is=65ced57d&hm=d8f5f587e3685ae1e1f5cf2a8e093ab001a67c03a5734a1911c2e9fe595d560d&',
    },
    {
      text: 'Kızım sen Ötüken misin? Her şeyden daha güzelsin.',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207886036386975744/5er.png?ex=65e14688&is=65ced188&hm=dff6992a798c729ade0b5ceadae403a4058549179e0b130a5b8ee42428d8156d&',
    },
    {
      text: 'Kızım sen Güneş mısın? Çünkü senden daha ateşli bir şey yok.',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207893900531073064/43443.png?ex=65e14ddb&is=65ced8db&hm=267903021f21dc5df5fa8bec6487b515362cb535c043381a9ef254b9d1533d45&',
    },
    {
      text: 'Merhaba seni takip edebilir miyim? Çünkü annem hayallerimin peşinden gitmemi istedi.',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207893900778414100/3423432.png?ex=65e14ddb&is=65ced8db&hm=26de850a4958ecd088dc658e2468ba8adc639dcf0ce98713fb9700c1fb527ddc&',
    },
    {
      text: 'Güzelim sen halter misin? Kalbim seni kaldıramıyor da.',
      imageUrl: 'https://cdn.discordapp.com/attachments/908045304597729352/1207893901000581152/313.png?ex=65e14ddb&is=65ced8db&hm=d2da137718e8b87d6a2946728a1c8c2202123fc6fa2ba503ac7114e656806c15&',
    },
    // Diğer metin ve resim çiftleri
  ];

  useEffect(() => {
    // Sayfa yüklendiğinde veya bağımlılıklar değiştiğinde yeni bir içerik seç
    getRandomContent();
  }, []);

  // Yeni bir içerik seçen fonksiyon
  const getRandomContent = () => {
    let randomIndex;
    
    // Eğer daha önce seçilen içerik varsa, farklı bir içerik seçene kadar devam et
    do {
      randomIndex = Math.floor(Math.random() * contentArray.length);
    } while (previousContent && contentArray[randomIndex] === previousContent);

    // Seçilen içeriği sakla
    setPreviousContent(contentArray[randomIndex]);

    // Yeni içerikleri ayarla
    setRandomContent(contentArray[randomIndex]);
  };

  return (
    <body>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <div className="mt-10 flex items-center justify-center">
        <img
          src={randomContent.imageUrl}
          alt="Random Image"
          className="ml-4 max-w-full max-h-full flex"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
        />
      </div>
      <p className="text-rose-600	 tracking-tight text-xl sm:text-3xl w-full font-bold items-center justify-center text-center">{randomContent.text}</p>



      <div className="mt-10 flex items-center justify-center">
        <div className="heart transition ease-in duration-300">
          <svg
            width="300px"
            height="300px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M6.47358 1.96511C8.27963 1.93827 10.2651 2.62414 12 4.04838C13.7349 2.62414 15.7204 1.93827 17.5264 1.96511C19.5142 1.99465 21.3334 2.90112 22.2141 4.68531C23.0878 6.45529 22.9326 8.87625 21.4643 11.7362C19.9939 14.6003 17.1643 18.0021 12.4867 21.8566C12.4382 21.898 12.3855 21.9324 12.3298 21.9596C12.1243 22.0601 11.8798 22.0624 11.6702 21.9596C11.6145 21.9324 11.5618 21.898 11.5133 21.8566C6.83565 18.0021 4.00609 14.6003 2.53569 11.7362C1.06742 8.87625 0.912211 6.45529 1.78589 4.68531C2.66659 2.90112 4.4858 1.99465 6.47358 1.96511Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </body>
  );
};

export default App;
