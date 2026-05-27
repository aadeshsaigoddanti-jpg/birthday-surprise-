import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function BirthdaySurpriseWebsite() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showContent, setShowContent] = useState(false);

  const correctPassword = 'sahurutha';
  const herName = 'Sahurutha';

  useEffect(() => {
    if (unlocked) {
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      const timer = setTimeout(() => {
        setShowContent(true);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [unlocked]);

  const handleUnlock = () => {
    if (password.toLowerCase() === correctPassword) {
      setUnlocked(true);
    } else {
      alert('Wrong password 💔');
      setPassword('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  // Password Lock Screen
  if (!unlocked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/20 via-black to-purple-500/20"></div>

        <div className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center shadow-2xl">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Secret Surprise 🎁
          </h1>

          <p className="text-gray-300 mb-8 leading-7">
            Enter the special password to unlock {herName}'s birthday surprise ✨
          </p>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-5 py-4 rounded-2xl bg-white/20 text-white placeholder:text-gray-300 outline-none border border-white/20 focus:border-pink-500 transition-all duration-300"
            autoFocus
          />

          <button
            onClick={handleUnlock}
            className="mt-6 w-full bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white py-4 rounded-2xl font-semibold text-lg active:scale-95"
          >
            Unlock 💖
          </button>
        </div>
      </div>
    );
  }

  // Loading Screen
  if (!showContent) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-black to-purple-500/30 animate-pulse"></div>

        <div className="text-center z-10 px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wide animate-pulse">
            For {herName} ✨
          </h1>

          <p className="mt-8 text-gray-300 text-lg md:text-2xl">
            A special surprise is loading...
          </p>

          <div className="mt-12 flex justify-center gap-4 text-5xl animate-bounce">
            💖 ✨ 🎂
          </div>
        </div>
      </div>
    );
  }

  // Main Birthday Content
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-purple-100 text-gray-800 font-sans overflow-hidden select-none">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-5 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,105,180,0.4),transparent_50%)]"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 animate-pulse leading-tight z-10">
          Happy Birthday <br /> {herName} ❤️
        </h1>

        <p className="mt-6 text-lg md:text-2xl max-w-2xl leading-relaxed z-10">
          Today is all about celebrating the most special person ✨
        </p>

        <button
          onClick={() => {
            document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-10 px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-lg shadow-xl transition-all duration-300 active:scale-95 z-10"
        >
          Click for Surprise 🎁
        </button>
      </section>

      {/* Special Message */}
      <section
        id="message"
        className="min-h-screen flex items-center justify-center px-5 py-20"
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl max-w-3xl p-8 md:p-10 text-center border border-pink-200">
          <h2 className="text-4xl font-bold text-purple-600 mb-6">
            A Small Message For {herName} 💌
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-700">
            From all the random conversations to all the unforgettable memories,
            you've made life so much better just by being in it.
            <br /><br />
            I hope this birthday brings you endless happiness, crazy fun,
            beautiful moments, and everything your heart wishes for.
            <br /><br />
            Stay the amazing person you are, {herName} ✨
          </p>

          <div className="mt-10 text-5xl animate-bounce">🎂🎈✨</div>
        </div>
      </section>

      {/* Memory Timeline */}
      <section className="px-5 py-24">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-16">
          Memories With {herName} 📸
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'First Memory ❤️', emoji: '😊' },
            { title: 'Funniest Moment 😂', emoji: '😂' },
            { title: 'Best Day Ever ✨', emoji: '✨' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <div className="h-52 rounded-2xl bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-6xl hover:scale-110 transition-transform">
                {item.emoji}
              </div>

              <h3 className="text-2xl font-semibold mt-6 text-purple-700">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Add your favorite memories with {herName} here. Click to add photos!
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Music Suggestion */}
      <section className="px-5 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-3xl p-8 md:p-10 shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">{herName}'s Song 🎶</h2>

          <p className="text-lg leading-8 opacity-90">
            Add her favorite Spotify or YouTube song link here for an emotional surprise.
          </p>

          <button className="mt-8 bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 active:scale-95">
            Play Song ▶
          </button>
        </div>
      </section>

      {/* Final Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-5">
        <div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-purple-600 leading-tight">
            Keep Smiling, {herName} 🌸
          </h2>

          <p className="mt-8 text-xl text-gray-700 max-w-2xl mx-auto leading-9">
            Because you deserve all the happiness in the world 💖
          </p>

          <div className="mt-12 text-6xl animate-pulse">🎂✨🎈</div>
        </div>
      </section>
    </div>
  );
}
