export default function AfghanRestaurantOrderingBrochure() {
  const flow = [
    {
      title: 'At the Table',
      label: 'Tablet Menu',
      icon: '📱',
      small: ['Food photos', 'Tap to order', 'Table number'],
      bg: 'from-[#6f2624] to-[#a56a2a]',
      inner: 'bg-[#f8edd9]',
    },
    {
      title: 'Order Travels',
      label: 'Instant Send',
      icon: '📶',
      small: ['One tap', 'No confusion', 'Direct to kitchen'],
      bg: 'from-[#b67a2c] to-[#d7b46a]',
      inner: 'bg-[#fff8ea]',
    },
    {
      title: 'Inside Kitchen',
      label: 'Kitchen Screen',
      icon: '🧑‍🍳',
      small: ['New order alert', 'Items list', 'Preparing / Ready'],
      bg: 'from-[#16352a] to-[#31584a]',
      inner: 'bg-[#233d35]',
      dark: true,
    },
  ];

  const benefits = [
    { icon: '⚡', word: 'Faster' },
    { icon: '✅', word: 'Clearer' },
    { icon: '🍽️', word: 'Better Service' },
    { icon: '📉', word: 'Less Mistakes' },
  ];

  return (
    <div className="min-h-screen bg-[#efe3cf] text-[#2f1d14] font-sans p-5 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[34px] overflow-hidden shadow-2xl border border-[#dcc6a8] bg-[#f7eddc]">
          <div className="grid grid-cols-1 xl:grid-cols-12">
            <section className="xl:col-span-4 bg-gradient-to-br from-[#5d1d1d] via-[#7a2c2c] to-[#9e6d2d] text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 20%, white 2px, transparent 2px)', backgroundSize:'22px 22px'}} />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm tracking-wide">
                  <span>Visual Concept</span>
                </div>

                <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                  Restaurant Order Flow
                </h1>
                <p className="mt-4 text-white/90 text-lg leading-7 max-w-md">
                  A restaurant owner should understand this just by looking.
                </p>

                <div className="mt-8 rounded-[28px] bg-[#f8edd9] text-[#352117] p-5 shadow-xl">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-[22px] bg-white p-4 shadow-sm min-h-[150px] flex flex-col justify-between">
                      <div>
                        <div className="text-4xl">👨‍👩‍👧</div>
                        <div className="mt-3 font-bold text-lg">Customer at table</div>
                      </div>
                      <div className="text-sm text-[#6d5240]">Looks at tablet instead of waiting</div>
                    </div>
                    <div className="rounded-[22px] bg-[#20352f] text-white p-4 shadow-sm min-h-[150px] flex flex-col justify-between">
                      <div>
                        <div className="text-4xl">🖥️</div>
                        <div className="mt-3 font-bold text-lg">Kitchen sees order</div>
                      </div>
                      <div className="text-sm text-white/75">Alert arrives immediately</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[24px] bg-gradient-to-r from-[#7a2c2c] to-[#31584a] p-4 text-white">
                    <div className="text-sm uppercase tracking-[0.16em] text-white/75">Main idea</div>
                    <div className="mt-2 text-xl md:text-2xl font-bold leading-snug">
                      Customer taps on tablet → kitchen receives the order instantly
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {benefits.map(function (item) {
                    return (
                      <div key={item.word} className="rounded-[22px] bg-white/12 border border-white/15 backdrop-blur-sm p-4 text-center">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="mt-2 font-semibold">{item.word}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="xl:col-span-8 p-6 md:p-8 bg-[#fbf5ea]">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-[#9e6d2d] font-semibold">Picture-first explanation</div>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">See the full journey</h2>
                </div>
                <div className="rounded-full bg-[#ead5b2] px-4 py-2 text-sm font-semibold">Very little reading needed</div>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
                {flow.map(function (card, index) {
                  return (
                    <div key={card.title} className={`rounded-[30px] overflow-hidden shadow-xl border border-[#e7d7c0] bg-white ${index === 1 ? 'lg:mt-10' : ''}`}>
                      <div className={`bg-gradient-to-br ${card.bg} p-5 text-white`}>
                        <div className="flex items-center justify-between">
                          <div className="text-sm uppercase tracking-[0.16em] text-white/75">{card.title}</div>
                          <div className="text-3xl">{card.icon}</div>
                        </div>
                        <div className="mt-3 text-2xl font-bold leading-tight">{card.label}</div>
                      </div>

                      <div className={`p-5 ${card.dark ? 'bg-[#152722] text-white' : card.inner}`}>
                        {index === 0 && (
                          <div className="rounded-[24px] bg-white p-4 shadow-md">
                            <div className="flex items-center justify-between">
                              <div className="font-bold">Table 4</div>
                              <div className="text-xs bg-[#7a2c2c] text-white px-2 py-1 rounded-full">Dine-in</div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3">
                              <div className="rounded-[18px] bg-[#fbf5ea] p-3 text-center">
                                <div className="text-3xl">🍛</div>
                                <div className="mt-2 text-sm font-semibold">Main Meal</div>
                              </div>
                              <div className="rounded-[18px] bg-[#fbf5ea] p-3 text-center">
                                <div className="text-3xl">🥤</div>
                                <div className="mt-2 text-sm font-semibold">Drink</div>
                              </div>
                              <div className="rounded-[18px] bg-[#fbf5ea] p-3 text-center">
                                <div className="text-3xl">🍟</div>
                                <div className="mt-2 text-sm font-semibold">Side</div>
                              </div>
                              <div className="rounded-[18px] bg-[#16352a] text-white p-3 text-center">
                                <div className="text-3xl">✔️</div>
                                <div className="mt-2 text-sm font-semibold">Send Order</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {index === 1 && (
                          <div className="min-h-[270px] flex flex-col justify-center items-center text-center">
                            <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center text-5xl">📤</div>
                            <div className="mt-5 flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#7a2c2c]">
                              <span>Tablet</span>
                              <span className="text-[#b67a2c]">→</span>
                              <span>Kitchen</span>
                            </div>
                            <div className="mt-5 flex items-center gap-2 flex-wrap justify-center">
                              <span className="rounded-full bg-white px-3 py-2 text-sm shadow-sm">Instant</span>
                              <span className="rounded-full bg-white px-3 py-2 text-sm shadow-sm">No paper</span>
                              <span className="rounded-full bg-white px-3 py-2 text-sm shadow-sm">No shouting</span>
                            </div>
                          </div>
                        )}

                        {index === 2 && (
                          <div className="rounded-[24px] bg-[#20352f] p-4 border border-white/10 shadow-md min-h-[270px]">
                            <div className="flex items-center justify-between">
                              <div className="font-bold text-lg">New Order Alert</div>
                              <div className="rounded-full bg-[#7a2c2c] px-3 py-1 text-xs">Table 4</div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3">
                              <div className="rounded-[18px] bg-white/8 p-3 text-center">
                                <div className="text-2xl">🍛</div>
                                <div className="text-sm mt-2">2 Main Meals</div>
                              </div>
                              <div className="rounded-[18px] bg-white/8 p-3 text-center">
                                <div className="text-2xl">🥤</div>
                                <div className="text-sm mt-2">2 Drinks</div>
                              </div>
                              <div className="rounded-[18px] bg-white/8 p-3 text-center">
                                <div className="text-2xl">🍟</div>
                                <div className="text-sm mt-2">1 Side</div>
                              </div>
                              <div className="rounded-[18px] bg-white/8 p-3 text-center">
                                <div className="text-2xl">📝</div>
                                <div className="text-sm mt-2">Special Note</div>
                              </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold">
                              <div className="rounded-[16px] bg-[#d7b46a] text-[#1e1712] py-3 text-center">Preparing</div>
                              <div className="rounded-[16px] bg-white/10 py-3 text-center">Ready</div>
                            </div>
                          </div>
                        )}

                        <div className={`mt-4 grid grid-cols-1 gap-2 ${card.dark ? 'text-white/80' : 'text-[#5f4639]'}`}>
                          {card.small.map(function (item) {
                            return (
                              <div key={item} className={`rounded-full px-3 py-2 text-sm ${card.dark ? 'bg-white/10' : 'bg-white/70'} text-center`}>
                                {item}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-[32px] border border-[#e7d7c0] bg-white p-6 shadow-lg">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  <div className="md:col-span-1 rounded-[24px] bg-[#f6ead4] p-5 text-center">
                    <div className="text-5xl">🏪</div>
                    <div className="mt-3 text-lg font-bold">Restaurant Owner</div>
                  </div>
                  <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-[24px] bg-[#fbf5ea] p-4 text-center">
                      <div className="text-3xl">👀</div>
                      <div className="mt-2 font-semibold">Sees the concept quickly</div>
                    </div>
                    <div className="rounded-[24px] bg-[#fbf5ea] p-4 text-center">
                      <div className="text-3xl">📋</div>
                      <div className="mt-2 font-semibold">Understands the workflow</div>
                    </div>
                    <div className="rounded-[24px] bg-[#fbf5ea] p-4 text-center">
                      <div className="text-3xl">👍</div>
                      <div className="mt-2 font-semibold">Can imagine it in his restaurant</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
