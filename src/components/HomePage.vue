<template>
  <div>

    <!-- ANNOUNCEMENT BAR -->
    <div class="bg-sagedark text-paper text-center py-2 text-xs care-tag tracking-wide">
      Free shipping on orders over ₦50,000 &nbsp;•&nbsp; 30-night trial &nbsp;•&nbsp; Softer with every wash
    </div>

    <!-- NAV -->
    <header class="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div class="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" class="font-display italic text-xl sm:text-2xl text-ink flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#E3B7B0"><path d="M12 21s-7.5-4.6-10-9.1C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.4C11 6 12.4 5 14.4 5 18 5 19.6 8.6 22 11.9 19.5 16.4 12 21 12 21z"/></svg>
          Love Bhedding Hubs
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm text-body">
          <a href="#shop" class="hover:text-ink transition-colors">Shop</a>
          <a href="#feel" class="hover:text-ink transition-colors">Shop by feel</a>
          <a href="#story" class="hover:text-ink transition-colors">Our weave</a>
          <a href="#reviews" class="hover:text-ink transition-colors">Reviews</a>
        </nav>

        <div class="flex items-center gap-3">
          <button @click="wishlistOpen = true" class="hidden sm:flex relative w-9 h-9 border border-line rounded-full items-center justify-center hover:border-sage transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7.5-4.6-10-9.1C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.4C11 6 12.4 5 14.4 5 18 5 19.6 8.6 22 11.9 19.5 16.4 12 21 12 21z"/></svg>
            <span v-if="wishlist.length > 0" class="absolute -top-2 -right-2 bg-rose text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">{{ wishlist.length }}</span>
          </button>
          <button @click="cartOpen = true" class="relative flex items-center gap-2 border border-line rounded-full pl-3 pr-4 py-1.5 text-sm hover:border-sage transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.3" fill="currentColor"/><circle cx="17" cy="20" r="1.3" fill="currentColor"/><path d="M3 3h2l1 3"/></svg>
            <span>Bag</span>
            <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-brass text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">{{ cartCount }}</span>
          </button>
          <button @click="menuOpen = !menuOpen" class="md:hidden border border-line rounded-full w-9 h-9 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
      <div v-if="menuOpen" class="md:hidden border-t border-line bg-paper px-5 py-4 flex flex-col gap-3 text-sm text-body">
        <a href="#shop" @click="menuOpen = false">Shop</a>
        <a href="#feel" @click="menuOpen = false">Shop by feel</a>
        <a href="#story" @click="menuOpen = false">Our weave</a>
        <a href="#reviews" @click="menuOpen = false">Reviews</a>
      </div>
    </header>

    <!-- HERO -->
    <section class="relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-30" style="background: radial-gradient(circle, #E3B7B0, transparent 70%);"></div>
      <div class="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20" style="background: radial-gradient(circle, #7C8B6F, transparent 70%);"></div>

      <div class="relative max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="care-tag text-[11px] text-sagedark border border-line stitch rounded-full px-3 py-1 inline-flex items-center gap-1.5 mb-6 bg-white/60">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#BE9A55"><path d="M12 21s-7.5-4.6-10-9.1C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.4C11 6 12.4 5 14.4 5 18 5 19.6 8.6 22 11.9 19.5 16.4 12 21 12 21z"/></svg>
            Woven for rest — Est. Lagos
          </p>
          <h1 class="font-display text-4xl sm:text-6xl leading-[1.05] text-ink">
            Fall in love<br/>with <span class="italic text-sagedark">bedtime again.</span>
          </h1>
          <p class="mt-6 text-body text-base sm:text-lg max-w-md leading-relaxed">
            Bedsheets chosen the way you'd choose a good armchair: by how it actually feels, not how it photographs. Linen, sateen, percale and flannel, in colours pulled from real mornings.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a href="#shop" class="bg-ink text-paper px-6 py-3 rounded-full text-sm hover:bg-sagedark transition-colors">Shop the collection</a>
            <a href="#feel" class="text-sm text-ink border-b border-ink/40 pb-0.5 hover:border-ink transition-colors">Find your fabric &rarr;</a>
          </div>
          <div class="mt-10 flex items-center gap-6 text-xs text-body">
            <div class="flex items-center gap-1.5">
              <div class="flex text-brass">
                <svg v-for="n in 5" :key="n" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.2l7.1-.6z"/></svg>
              </div>
              <span>4.9 from 2,300+ sleepers</span>
            </div>
          </div>
        </div>

        <!-- Hero images -->
        <div class="relative h-72 sm:h-[26rem] flex items-center justify-center" data-reveal>
          <div class="absolute w-40 sm:w-52 h-52 sm:h-64 rounded-2xl overflow-hidden shadow-lg stitch" style="transform: rotate(-14deg) translate(-70px, 10px);">
            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80" alt="Bedsheet" class="w-full h-full object-cover">
          </div>
          <div class="absolute w-40 sm:w-52 h-52 sm:h-64 rounded-2xl overflow-hidden shadow-lg stitch" style="transform: rotate(6deg) translate(40px, -10px);">
            <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80" alt="Bedsheet" class="w-full h-full object-cover">
          </div>
          <div class="relative w-44 sm:w-60 h-56 sm:h-80 rounded-2xl overflow-hidden shadow-xl stitch">
            <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&q=80" alt="Bedsheet" class="w-full h-full object-cover">
            <span class="absolute bottom-3 left-3 right-3 care-tag text-[9px] text-white/90 bg-black/40 rounded px-2 py-1">320 GSM · French linen</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST STRIP -->
    <section class="border-y border-line bg-card/60">
      <div class="max-w-6xl mx-auto px-5 sm:px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div class="flex flex-col items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F6C53" stroke-width="1.6"><path d="M12 3l7 4v5c0 5-3.4 8.4-7 9-3.6-.6-7-4-7-9V7z"/><path d="M9 12l2 2 4-4"/></svg>
          <span class="care-tag text-[10px] text-body leading-tight">GOTS-certified<br/>cotton</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F6C53" stroke-width="1.6"><path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z"/><path d="M12 7v5l3 3"/></svg>
          <span class="care-tag text-[10px] text-body leading-tight">30-night<br/>trial</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F6C53" stroke-width="1.6"><path d="M21 12H8M11 7l-5 5 5 5"/><path d="M21 5v14"/></svg>
          <span class="care-tag text-[10px] text-body leading-tight">Free<br/>returns</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F6C53" stroke-width="1.6"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/></svg>
          <span class="care-tag text-[10px] text-body leading-tight">Softer with<br/>every wash</span>
        </div>
      </div>
    </section>

    <!-- SHOP BY FEEL -->
    <section id="feel" class="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <div class="flex items-baseline justify-between mb-8" data-reveal>
        <h2 class="font-display text-3xl text-ink flex items-center gap-2">
          <span class="w-6 h-px bg-line"></span> Shop by feel
        </h2>
        <span class="care-tag text-[11px] text-body">03 fabrics</span>
      </div>
      <div class="grid sm:grid-cols-3 gap-5">
        <button
          v-for="f in FEELS" :key="f.key"
          @click="activeFeel = activeFeel === f.key ? null : f.key"
          class="text-left rounded-2xl border p-6 transition-colors"
          :class="activeFeel === f.key ? 'border-sagedark bg-card' : 'border-line bg-card/50 hover:bg-card'"
        >
          <div class="w-full h-28 rounded-xl overflow-hidden mb-5 stitch">
            <img :src="f.image" :alt="f.name" class="w-full h-full object-cover">
          </div>
          <h3 class="font-display text-xl flex items-center justify-between">
            {{ f.name }}
            <span v-if="activeFeel === f.key" class="text-xs care-tag text-sagedark">Selected ✕</span>
          </h3>
          <p class="text-sm text-body mt-2 leading-relaxed">{{ f.desc }}</p>
        </button>
      </div>
    </section>

    <!-- PRODUCT GRID -->
    <section id="shop" class="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <div class="flex items-baseline justify-between mb-8" data-reveal>
        <h2 class="font-display text-3xl text-ink flex items-center gap-2">
          <span class="w-6 h-px bg-line"></span> Bestselling sets
        </h2>
        <span class="care-tag text-[11px] text-body">{{ filteredProducts.length }} sets</span>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="p in filteredProducts" :key="p.id" class="group rounded-2xl border border-line bg-white/40 overflow-hidden flex flex-col" data-reveal>
          <div class="relative w-full h-52 overflow-hidden">
            <img :src="p.image" :alt="p.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span v-if="p.tag" class="absolute top-3 left-3 care-tag text-[9px] bg-white/90 text-ink rounded px-2 py-1">{{ p.tag }}</span>
            <button @click="toggleWishlist(p)" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:scale-105 transition-transform">
              <svg width="14" height="14" viewBox="0 0 24 24" :fill="isWishlisted(p) ? '#E3B7B0' : 'none'" stroke="#2B2440" stroke-width="1.8"><path d="M12 21s-7.5-4.6-10-9.1C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.4C11 6 12.4 5 14.4 5 18 5 19.6 8.6 22 11.9 19.5 16.4 12 21 12 21z"/></svg>
            </button>
          </div>
          <div class="p-5 flex flex-col flex-1">
            <h3 class="font-display text-lg text-ink">{{ p.name }}</h3>
            <p class="text-xs text-sagedark mt-1">{{ p.mood }}</p>
            <div class="flex gap-2 mt-3 flex-wrap">
              <span class="care-tag text-[9px] border border-line stitch rounded px-2 py-1 text-body">{{ p.material }}</span>
              <span class="care-tag text-[9px] border border-line stitch rounded px-2 py-1 text-body">{{ p.spec }}</span>
            </div>
            <div class="mt-auto pt-5 flex items-center justify-between">
              <span class="font-display text-lg text-ink">{{ fmt(p.price) }}</span>
              <button @click="addToCart(p)" class="text-xs bg-ink text-paper px-4 py-2 rounded-full hover:bg-sagedark transition-colors">Add to bag</button>
            </div>
          </div>
        </div>
      </div>
      <p v-if="filteredProducts.length === 0" class="text-center text-sm text-body py-10">No sets match that feel yet — check back soon.</p>
    </section>

    <!-- STORY -->
    <section id="story" class="bg-card/60 border-y border-line">
      <div class="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1" data-reveal>
          <p class="care-tag text-[11px] text-sagedark mb-4 flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#BE9A55"><path d="M12 21s-7.5-4.6-10-9.1C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.4C11 6 12.4 5 14.4 5 18 5 19.6 8.6 22 11.9 19.5 16.4 12 21 12 21z"/></svg>
            Our weave
          </p>
          <h2 class="font-display text-3xl text-ink leading-tight">Every set is finished, not just sewn.</h2>
          <p class="mt-5 text-body leading-relaxed">
            We work with small mills that still finish fabric the slow way — washed and softened before it ever touches a shelf, not after your third laundry cycle. Every corner carries a stitched tag with the fibre, weave and weight, so you always know exactly what's on your bed.
          </p>
          <p class="mt-4 text-body leading-relaxed">
            No polyester blends hiding under a nice name. If it says linen, it's linen.
          </p>
        </div>
        <div class="order-1 md:order-2 flex justify-center gap-4" data-reveal>
          <div class="w-24 sm:w-28 h-40 sm:h-48 rounded-xl overflow-hidden stitch self-end">
            <img src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300&q=80" alt="" class="w-full h-full object-cover">
          </div>
          <div class="w-24 sm:w-28 h-52 sm:h-60 rounded-xl overflow-hidden stitch">
            <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=300&q=80" alt="" class="w-full h-full object-cover">
          </div>
          <div class="w-24 sm:w-28 h-40 sm:h-48 rounded-xl overflow-hidden stitch self-end">
            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&q=80" alt="" class="w-full h-full object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <section id="reviews" class="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <h2 class="font-display text-3xl text-ink mb-8 flex items-center gap-2" data-reveal>
        <span class="w-6 h-px bg-line"></span> What washes well
      </h2>
      <div class="grid sm:grid-cols-3 gap-5">
        <div v-for="r in REVIEWS" :key="r.name" class="rounded-2xl border border-line p-6 bg-white/40" data-reveal>
          <div class="flex items-center justify-between mb-4">
            <span class="care-tag text-[9px] border border-line stitch rounded px-2 py-1 text-sagedark">{{ r.wash }}</span>
            <div class="flex text-brass">
              <svg v-for="n in 5" :key="n" width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.2l7.1-.6z"/></svg>
            </div>
          </div>
          <p class="text-body leading-relaxed text-sm">&ldquo;{{ r.quote }}&rdquo;</p>
          <p class="font-display text-sm mt-4 text-ink">{{ r.name }}</p>
        </div>
      </div>
    </section>

    <!-- GALLERY STRIP -->
    <section class="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
      <h2 class="font-display text-3xl text-ink mb-8 flex items-center gap-2" data-reveal>
        <span class="w-6 h-px bg-line"></span> #LoveBheddingHubs
      </h2>
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-3" data-reveal>
        <div v-for="(img, i) in GALLERY" :key="i" class="aspect-square rounded-xl overflow-hidden">
          <img :src="img" alt="Bedsheet" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="border-y border-line bg-ink text-paper">
      <div class="max-w-6xl mx-auto px-5 sm:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="font-display text-2xl flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#E3B7B0"><path d="M12 21s-7.5-4.6-10-9.1C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.4C11 6 12.4 5 14.4 5 18 5 19.6 8.6 22 11.9 19.5 16.4 12 21 12 21z"/></svg>
            Get first look at new colours.
          </h3>
          <p class="text-sm text-paper/70 mt-1">One email a month. No spam, no accounts to make.</p>
        </div>
        <form class="flex w-full sm:w-auto gap-2" @submit.prevent="showToast('You\'re on the list')">
          <input type="email" required placeholder="you@example.com" class="flex-1 sm:w-64 bg-transparent border border-paper/30 rounded-full px-4 py-2.5 text-sm placeholder:text-paper/50 focus:outline-none focus:border-paper" />
          <button class="bg-paper text-ink text-sm px-5 py-2.5 rounded-full hover:bg-brass hover:text-white transition-colors">Sign up</button>
        </form>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid sm:grid-cols-3 gap-8 text-sm text-body">
      <div>
        <p class="font-display italic text-lg text-ink flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#E3B7B0"><path d="M12 21s-7.5-4.6-10-9.1C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.4C11 6 12.4 5 14.4 5 18 5 19.6 8.6 22 11.9 19.5 16.4 12 21 12 21z"/></svg>
          Love Bhedding Hubs
        </p>
        <p class="mt-2 max-w-xs leading-relaxed">Good bedsheets, honestly described, delivered to your door.</p>
      </div>
      <div class="flex gap-10">
        <div>
          <p class="care-tag text-[10px] text-ink mb-2">Shop</p>
          <a href="#shop" class="block hover:text-ink">All sets</a>
          <a href="#feel" class="block hover:text-ink mt-1">By feel</a>
        </div>
        <div>
          <p class="care-tag text-[10px] text-ink mb-2">Studio</p>
          <a href="#story" class="block hover:text-ink">Our weave</a>
          <a href="#reviews" class="block hover:text-ink mt-1">Reviews</a>
        </div>
      </div>
      <div>
        <p class="care-tag text-[10px] text-ink mb-2">Follow</p>
        <div class="flex gap-3 mt-1">
          <span class="w-8 h-8 rounded-full border border-line flex items-center justify-center text-xs">IG</span>
          <span class="w-8 h-8 rounded-full border border-line flex items-center justify-center text-xs">TT</span>
          <span class="w-8 h-8 rounded-full border border-line flex items-center justify-center text-xs">PT</span>
        </div>
      </div>
    </footer>
    <p class="text-center text-xs text-body/60 pb-8">© 2026 Love Bhedding Hubs. Made for good sleep.</p>

    <!-- WISHLIST DRAWER -->
    <transition name="fade">
      <div v-if="wishlistOpen" @click="wishlistOpen = false" class="fixed inset-0 bg-black/30 z-50"></div>
    </transition>
    <transition name="slide">
      <aside v-if="wishlistOpen" class="fixed top-0 right-0 h-full w-full sm:w-96 bg-paper z-50 shadow-2xl flex flex-col">
        <div class="flex items-center justify-between p-5 border-b border-line">
          <h3 class="font-display text-xl">Your wishlist</h3>
          <button @click="wishlistOpen = false" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <div class="flex-1 overflow-y-auto p-5 space-y-4">
          <p v-if="wishlist.length === 0" class="text-sm text-body">Nothing saved yet — tap the heart on a set you love.</p>
          <div v-for="item in wishlist" :key="item.id" class="flex gap-3 items-center">
            <div class="w-14 h-14 rounded-lg overflow-hidden shrink-0">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-ink">{{ item.name }}</p>
              <p class="text-xs text-body">{{ fmt(item.price) }}</p>
            </div>
            <button @click="addToCart(item)" class="text-xs bg-ink text-paper px-3 py-1.5 rounded-full">Add</button>
          </div>
        </div>
      </aside>
    </transition>

    <!-- CART DRAWER -->
    <transition name="fade">
      <div v-if="cartOpen" @click="cartOpen = false" class="fixed inset-0 bg-black/30 z-50"></div>
    </transition>
    <transition name="slide">
      <aside v-if="cartOpen" class="fixed top-0 right-0 h-full w-full sm:w-96 bg-paper z-50 shadow-2xl flex flex-col">
        <div class="flex items-center justify-between p-5 border-b border-line">
          <h3 class="font-display text-xl">Your bag</h3>
          <button @click="cartOpen = false" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-5 space-y-5">
          <p v-if="cart.length === 0" class="text-sm text-body">Your bag is empty. That's fixable.</p>
          <div v-for="item in cart" :key="item.id" class="flex gap-3">
            <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
              <div class="flex justify-between">
                <p class="text-sm font-medium text-ink">{{ item.name }}</p>
                <button @click="removeItem(item)" class="text-body/50 hover:text-ink text-xs">Remove</button>
              </div>
              <p class="text-xs text-body mt-0.5">{{ fmt(item.price) }}</p>
              <div class="flex items-center gap-3 mt-2">
                <button @click="changeQty(item, -1)" class="w-6 h-6 border border-line rounded-full text-sm">-</button>
                <span class="text-sm w-4 text-center">{{ item.qty }}</span>
                <button @click="changeQty(item, 1)" class="w-6 h-6 border border-line rounded-full text-sm">+</button>
              </div>
            </div>
          </div>
        </div>

                <div class="p-5 border-t border-line space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-body">Subtotal</span>
            <span class="font-display text-lg">{{ fmt(cartSubtotal) }}</span>
          </div>

          <!-- Order on WhatsApp -->
          <a
            :href="whatsappCartLink"
            target="_blank"
            rel="noopener"
            class="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full text-sm hover:bg-[#1ebe57] transition-colors"
            :class="{ 'opacity-40 pointer-events-none': cart.length === 0 }"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>

          <button 
            @click="checkout" 
            :disabled="cart.length === 0" 
            class="w-full bg-ink text-paper py-3 rounded-full text-sm disabled:opacity-40 hover:bg-sagedark transition-colors"
          >
            Checkout
          </button>
        </div>
      </aside>
    </transition>


        <!-- FLOATING WHATSAPP BUTTON -->
    <a
      href="https://wa.me/2348034339970"
      target="_blank"
      rel="noopener"
      class="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="text-sm font-medium hidden sm:inline">Get on WhatsApp</span>
    </a>

    <!-- TOAST -->
    <transition name="fade">
      <div v-if="toast" class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-ink text-paper text-sm px-5 py-3 rounded-full shadow-lg z-50 care-tag">
        {{ toast }}
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

const FEELS = [
  { 
    key: 'cool', 
    name: 'Crisp & cool', 
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
    desc: 'Percale weave with a light, hotel-crisp hand. Best for warm nights and hot sleepers.' 
  },
  { 
    key: 'smooth', 
    name: 'Silky & smooth', 
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&q=80',
    desc: 'Sateen weave with a subtle sheen and a smooth, cool touch against the skin.' 
  },
  { 
    key: 'warm', 
    name: 'Soft & warm', 
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80',
    desc: 'Brushed flannel that traps warmth. Made for harmattan nights and slow mornings.' 
  },
]

const PRODUCTS = [
  { 
    id: 1, 
    name: 'Sunday Linen Set', 
    mood: 'Crisp & airy', 
    material: 'French Linen', 
    spec: '320 GSM', 
    price: 42500, 
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    tag: 'Bestseller', 
    feel: 'cool' 
  },
  { 
    id: 2, 
    name: 'Moonlit Sateen', 
    mood: 'Silky & smooth', 
    material: 'Cotton Sateen', 
    spec: '400 TC', 
    price: 38500, 
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
    tag: 'New', 
    feel: 'smooth' 
  },
  { 
    id: 3, 
    name: 'Meadow Percale', 
    mood: 'Cool & light', 
    material: 'Cotton Percale', 
    spec: '200 TC', 
    price: 24500, 
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80',
    tag: null, 
    feel: 'cool' 
  },
  { 
    id: 4, 
    name: 'Golden Hour Flannel', 
    mood: 'Soft & warm', 
    material: 'Brushed Flannel', 
    spec: '170 GSM', 
    price: 29500, 
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80',
    tag: null, 
    feel: 'warm' 
  },
  { 
    id: 5, 
    name: 'Cloudrest Bamboo', 
    mood: 'Breathable & light', 
    material: 'Bamboo Viscose', 
    spec: '300 TC', 
    price: 36500, 
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
    tag: 'Bestseller', 
    feel: 'cool' 
  },
  { 
    id: 6, 
    name: 'Dusk Stripe Set', 
    mood: 'Crisp & structured', 
    material: 'Combed Cotton', 
    spec: '280 TC', 
    price: 27500, 
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80',
    tag: null, 
    feel: 'smooth' 
  },
]

const REVIEWS = [
  { name: 'Amaka O.', wash: 'Cold wash', quote: "Softer with every wash. My Sunday mornings feel like a small holiday now." },
  { name: 'Tunde A.', wash: 'Tumble dry low', quote: "The Moonlit Sateen sleeps cool even in Lagos heat. Genuinely surprised." },
  { name: 'Ifeoma K.', wash: 'Line dry', quote: "Ordered the flannel for my son's room. Thick, warm, and the stitching is neat." },
]

const GALLERY = [
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80',
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80',
  'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&q=80',
]

const activeFeel = ref(null)
const cart = reactive([])
const wishlist = reactive([])
const cartOpen = ref(false)
const wishlistOpen = ref(false)
const menuOpen = ref(false)
const toast = ref('')
let toastTimer = null

const filteredProducts = computed(() =>
  activeFeel.value ? PRODUCTS.filter(p => p.feel === activeFeel.value) : PRODUCTS
)

const whatsappCartLink = computed(() => {
  if (cart.length === 0) return 'https://wa.me/2348034339970'

  let message = 'Hello Love Bhedding Hubs 👋%0A%0AI want to order:%0A%0A'
  
  cart.forEach(item => {
    message += `• ${item.name} (x${item.qty}) - ${fmt(item.price)}%0A`
  })
  
  message += `%0A*Total: ${fmt(cartSubtotal.value)}*%0A%0APlease confirm availability. Thank you!`

  return `https://wa.me/2348034339970?text=${message}`
})

const cartCount = computed(() => cart.reduce((sum, i) => sum + i.qty, 0))
const cartSubtotal = computed(() => cart.reduce((sum, i) => sum + i.qty * i.price, 0))

function showToast(msg) {
  toast.value = msg
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toast.value = '' }, 2200)
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id)
  if (existing) existing.qty += 1
  else cart.push({ ...product, qty: 1 })
  cartOpen.value = true
  showToast(product.name + ' added to your bag')
}

function changeQty(item, delta) {
  item.qty += delta
  if (item.qty <= 0) {
    const idx = cart.indexOf(item)
    cart.splice(idx, 1)
  }
}

function removeItem(item) {
  const idx = cart.indexOf(item)
  cart.splice(idx, 1)
}

function isWishlisted(product) {
  return wishlist.some(i => i.id === product.id)
}

function toggleWishlist(product) {
  const idx = wishlist.findIndex(i => i.id === product.id)
  if (idx >= 0) {
    wishlist.splice(idx, 1)
    showToast(product.name + ' removed from wishlist')
  } else {
    wishlist.push({ ...product })
    showToast(product.name + ' saved to wishlist')
  }
}

function checkout() {
  showToast("This is a demo store — checkout isn't wired up, but your bag looks great")
}

function fmt(n) {
  return '₦' + n.toLocaleString('en-NG')
}

onMounted(() => {
  const els = document.querySelectorAll('[data-reveal]')
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible') })
  }, { threshold: 0.15 })
  els.forEach(el => obs.observe(el))
})
</script>

<style scoped>
* { -webkit-font-smoothing: antialiased; }

.stitch {
  border: 1.5px dashed #C9BB94;
}

.care-tag {
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-thumb { background: #C9BB94; border-radius: 8px; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.32s cubic-bezier(0.22,0.61,0.36,1), opacity 0.32s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); opacity: 0.6; }

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active, .fade-leave-active, .slide-enter-active, .slide-leave-active { transition: none !important; }
}

[data-reveal] { opacity: 0; transform: translateY(14px); transition: opacity 0.6s ease, transform 0.6s ease; }
[data-reveal].is-visible { opacity: 1; transform: translateY(0); }
</style>