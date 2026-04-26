document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if(mobileMenu.classList.contains('hidden')) {
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                mobileMenu.style.maxHeight = '0';
                mobileMenu.style.opacity = '0';
            } else {
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                mobileMenu.style.maxHeight = '500px';
                mobileMenu.style.opacity = '1';
            }
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });

    // Staggered stagger for grids
    document.querySelectorAll('.masonry-grid').forEach(grid => {
        const items = grid.querySelectorAll('.masonry-item');
        items.forEach((item, index) => {
            if(item.classList.contains('fade-in-up')) {
                item.style.transitionDelay = `${(index % 3) * 0.1}s`;
            }
        });
    });

    // Render Logic
    const { products, posts } = window.blogData || { products: [], posts: [] };
    const sanitizeUrl = (url, fallback) => {
        if (typeof url !== 'string') return fallback;
        const trimmed = url.trim();
        return trimmed.length > 0 ? trimmed : fallback;
    };

    window.createProductCard = (product) => {
        const internalLink = `article.html?slug=${encodeURIComponent(product.id || '')}`;
        const linkHref = product.isAffiliate
            ? sanitizeUrl(product.link, 'finds.html')
            : sanitizeUrl(internalLink, 'finds.html');
        const externalAttrs = product.isAffiliate ? `target="_blank" rel="nofollow sponsored noopener"` : '';
        const ctaHtml = product.isAffiliate 
            ? `<div class="mt-2 w-full py-2.5 bg-foreground text-background text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                 View on Amazon
               </div>`
            : `<span class="text-sm font-medium text-mutedFg hover:text-primary flex items-center gap-1 group/link mt-1 w-max">
                 View Details 
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover/link:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </span>`;

        return `
            <div class="group card-lift flex flex-col gap-3 fade-in-up masonry-item h-full">
                <a href="${linkHref}" ${externalAttrs} class="block relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted">
                    <img src="${product.image}" alt="${product.title}" loading="lazy" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    ${product.isAffiliate ? `<div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">Shop Look</div>` : ''}
                </a>
                <div class="flex flex-col gap-1 mt-1">
                    <span class="text-xs font-medium text-primary tracking-wider uppercase">${product.category}</span>
                    <div class="flex items-start justify-between gap-4">
                        <span class="transition-colors line-clamp-2 text-foreground font-medium group-hover:text-primary">${product.title}</span>
                        ${product.price ? `<span class="font-semibold text-foreground shrink-0">${product.price}</span>` : ''}
                    </div>
                    <a href="${linkHref}" ${externalAttrs} class="block border-none bg-transparent p-0 m-0 w-full text-left">
                       ${ctaHtml}
                    </a>
                </div>
            </div>
        `;
    };

    window.createPostCard = (post, aspectClass = "aspect-[3/4]") => {
        const postHref = sanitizeUrl(`article.html?slug=${encodeURIComponent(post.slug || '')}`, 'blog.html');
        return `
            <a href="${postHref}" class="relative group card-lift overflow-hidden rounded-[2rem] bg-muted w-full block ${aspectClass} fade-in-up masonry-item mb-6">
                <img src="${post.image}" alt="${post.title}" loading="lazy" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <span class="text-white/80 text-xs font-medium tracking-wider uppercase mb-3 bg-white/10 w-max px-3 py-1 rounded-full backdrop-blur-sm">${post.category}</span>
                    <h3 class="text-white font-serif text-xl md:text-2xl font-bold leading-tight group-hover:underline">${post.title}</h3>
                    <span class="mt-4 inline-flex items-center gap-2 w-max bg-white/90 text-foreground text-xs md:text-sm font-semibold px-4 py-2 rounded-full opacity-90 group-hover:opacity-100 transition-opacity">
                        View More
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                </div>
            </a>
        `;
    };

    // Populate Dynamic Grids if they exist
    const trendingGrid = document.getElementById('dynamic-trending-grid');
    if(trendingGrid) {
        trendingGrid.innerHTML = products.slice(0, 4).map(p => window.createProductCard(p)).join('');
    }

    const latestPostsGrid = document.getElementById('dynamic-latest-posts-grid');
    if(latestPostsGrid) {
        latestPostsGrid.innerHTML = posts.slice(0, 3).map(p => window.createPostCard(p, "aspect-square md:aspect-[3/4]")).join('');
    }

    const allFindsGrid = document.getElementById('dynamic-all-finds-grid');
    if(allFindsGrid) {
        allFindsGrid.innerHTML = products.map(p => window.createProductCard(p)).join('');
    }

    const blogGrid = document.getElementById('dynamic-blog-grid');
    if(blogGrid) {
        blogGrid.innerHTML = posts.map((post, i) => {
            const aspect = i % 3 === 0 ? "aspect-[3/4]" : i % 2 === 0 ? "aspect-square" : "aspect-[4/5]";
            return window.createPostCard(post, `${aspect} break-inside-avoid`);
        }).join('');
    }

    // Article Page Dynamic Hydration
    if (window.location.pathname.includes('article.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('slug');

        const currentPost = posts.find(p => p.slug === slug);
        
        if (!currentPost) {
            document.title = "Not Found - Soft Life Studio";
            const titleObj = document.getElementById('article-title');
            if (titleObj) titleObj.innerText = "Curated Look Not Found";
            const contentObj = document.getElementById('article-content');
            if (contentObj) contentObj.innerHTML = "<p>We couldn't find the exact page or products you were looking for. Please return to the homepage to explore more curations.</p>";
            
            const authorMeta = document.getElementById('article-author-name');
            if (authorMeta && authorMeta.closest('.border-y')) {
                authorMeta.closest('.border-y').style.display = 'none';
            }
            return;
        }

        if (currentPost) {
            // Scroll to top
            window.scrollTo(0, 0);

            // Set basic info
            document.title = `${currentPost.title} - Soft Life Studio`;
            const headerTitle = document.getElementById('article-meta-title');
            if(headerTitle) headerTitle.innerText = `${currentPost.title} - Soft Life Studio`;

            const heroImg = document.getElementById('article-hero-img');
            if(heroImg) heroImg.src = currentPost.image;

            const titleObj = document.getElementById('article-title');
            if(titleObj) titleObj.innerText = currentPost.title;

            const catObj = document.getElementById('article-category');
            if(catObj) catObj.innerText = currentPost.category;

            const dateObj = document.getElementById('article-date');
            if(dateObj) dateObj.innerText = currentPost.date;

            // Content
            const contentObj = document.getElementById('article-content');
            if (currentPost.content && currentPost.content.length > 0) {
                if (contentObj) {
                    let html = '';
                    currentPost.content.forEach((block, index) => {
                        if (block.startsWith('## ')) {
                            html += `<h3 class="font-serif text-2xl font-bold text-foreground mt-12 mb-6">${block.replace('## ', '')}</h3>`;
                        } else if (index === 0) {
                            html += `<p class="text-xl text-foreground font-medium leading-relaxed">${block}</p>`;
                        } else {
                            html += `<p>${block}</p>`;
                        }
                    });
                    contentObj.innerHTML = html;
                }
            } else {
                // UX Improvement for Shop The Look: remove excessive space
                if (contentObj) contentObj.style.display = 'none';
                const authorMeta = document.getElementById('article-author-name');
                if (authorMeta && authorMeta.closest('.border-y')) {
                    authorMeta.closest('.border-y').style.display = 'none';
                }
            }

            // Products
            if (currentPost.relatedProductIds && currentPost.relatedProductIds.length > 0) {
                const shopSection = document.getElementById('article-shop-section');
                const productsGrid = document.getElementById('article-related-products');
                if (shopSection && productsGrid) {
                    const itemsHtml = currentPost.relatedProductIds.map(id => {
                        const p = products.find(prod => prod.id === id);
                        if (!p || (!p.link && p.isAffiliate)) {
                            return `<div class="p-6 bg-muted/20 rounded-2xl flex flex-col items-center justify-center text-center border border-border/50 text-mutedFg aspect-[4/5] h-full gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                <span class="text-sm">Product currently unavailable</span>
                            </div>`;
                        }
                        return window.createProductCard(p);
                    }).join('');
                    
                    if (itemsHtml) {
                        shopSection.classList.remove('hidden');
                        productsGrid.innerHTML = itemsHtml;
                    }
                }
            }

            // Posts
            if (currentPost.relatedPostSlugs && currentPost.relatedPostSlugs.length > 0) {
                const postSection = document.getElementById('article-keep-reading-section');
                const relatedGrid = document.getElementById('article-related-posts');
                if (postSection && relatedGrid) {
                    // Get explicit related posts OR just top 2 that aren't this post
                    let matchedPosts = currentPost.relatedPostSlugs
                        .map(id => posts.find(p => p.slug === id))
                        .filter(p => p && p.slug !== currentPost.slug);

                    if (matchedPosts.length === 0) {
                        matchedPosts = posts.filter(p => p.slug !== currentPost.slug).slice(0, 2);
                    }

                    if (matchedPosts.length > 0) {
                        postSection.classList.remove('hidden');
                        relatedGrid.innerHTML = matchedPosts.map(p => `
                            <a href="${sanitizeUrl(`article.html?slug=${encodeURIComponent(p.slug || '')}`, 'blog.html')}" class="group card-lift flex flex-col gap-4">
                                <div class="relative overflow-hidden rounded-2xl aspect-[3/2] bg-muted">
                                    <img src="${p.image}" alt="${p.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div>
                                    <span class="text-xs font-medium text-primary tracking-wider uppercase mb-2 block">${p.category}</span>
                                    <h5 class="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">${p.title}</h5>
                                    <span class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                        View More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </span>
                                </div>
                            </a>
                        `).join('');
                    }
                }
            }
        }
    }
});
