// Simulando uma requisição dos itens do carrossel
const sliderTittle = "Lançamentos";
const products = [
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 100,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 200,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 300,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 400,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 500,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 600,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 700,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 800,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 900,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 1000,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 1100,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 1200,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 1300,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 1400,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
    {
        img: "assets/img/slider-product.png",
        title: "Lorem Ipsum Vin Dolor Sit Amet Consectetuer Opt Adipiscing Elit",
        oldPrice: "R$ 1500,00",
        price: "R$ 79,90",
        discount: "20% OFF",
        details: "Ou em até <b>10x de R$ 7,90</b>",
    },
];

class Slider extends HTMLElement {
    connectedCallback() {
        try {
            this.initSwiper(products, sliderTittle);
        } catch (error) {
            console.error("Erro ao carregar slider:", error);
        }
    }

    initSwiper(products, sliderTittle) {
        // Estruturação do HTML do carrossel

        // Estrutura esperada:
        // <div slider-root
        //      <div slider-container
        //          <div slider-header
        //              <div slider-header-tittle
        //              <div slider-header-more
        //          <div swiper
        //              <div swiper-wrapper
        //          <div swiper-pagination
        //          <div swiper-button-prev
        //          <div swiper-button-next

        const root = document.createElement("div");
        root.className = "slider-root";
        const container = document.createElement("div");
        container.className = "slider-container";
        root.appendChild(container);

        // Cabeçalho
        const header = document.createElement("div");
        header.className = "slider-header";

        const headerTittle = document.createElement("h3");
        headerTittle.className = "slider-header-tittle";
        headerTittle.innerHTML = sliderTittle;

        const headerMore = document.createElement("a");
        headerMore.innerHTML = "Ver mais"
        headerMore.className = "slider-header-more";

        // Carrossel e seu wrapper, padrão da biblioteca
        const swiperEl = document.createElement("div");
        swiperEl.className = "swiper";
        const wrapper = document.createElement("div");
        wrapper.className = "swiper-wrapper";

        // Paginação de acordo com a biblioteca
        const pagination = document.createElement("div");
        pagination.className = "swiper-pagination";

        swiperEl.appendChild(wrapper);
        header.appendChild(headerTittle);
        header.appendChild(headerMore);
        container.appendChild(header);
        container.appendChild(swiperEl);
        container.appendChild(pagination);

        // Anterior
        const prevBtn = document.createElement("div");
        prevBtn.className = "swiper-button-prev hide-on-mobile";
        prevBtn.innerHTML = `<img src="assets/svg/main-content/slider-arrow-left.svg" alt="Anterior">`;
        // Posterior
        const nextBtn = document.createElement("div");
        nextBtn.className = "swiper-button-next hide-on-mobile";
        nextBtn.innerHTML = `<img src="assets/svg/main-content/slider-arrow-right.svg" alt="Próximo">`;

        // container.appendChild(navWrapper);
        container.append(prevBtn, nextBtn);

        // Preenche o slide com os dados de cada produto
        products.forEach((prod) => {
            const slide = document.createElement("div");
            slide.className = "swiper-slide";
            slide.innerHTML = `
        <span class="tag-new">NOVO</span>
        <img src="${prod.img}" alt="${prod.title}">
        <h3>${prod.title}</h3>
        <div class="slider-item-price">
          <span class="slider-old-price">${prod.oldPrice}</span>
          <span class="slider-price">${prod.price}</span>
          <span class="slider-discount">${prod.discount}</span>
          <span class="slider-price-details">${prod.details}</span>
        </div>
        <button class="slider-buy-btn">Comprar</button>
      `;
            wrapper.appendChild(slide);
        });

        // Adiciona o root ao elemento criado
        this.innerHTML = "";
        this.appendChild(root);

        // Inicialização da biblitoeca swiper
        new Swiper(swiperEl, {
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: container.querySelector(".swiper-pagination"),
                clickable: true,
            },
            navigation: {
                nextEl: nextBtn, // botão fora do overflow
                prevEl: prevBtn,
            },
            loopAddBlankSlides: false,
            autoplay: {
                delay: 3000,
              },
            breakpoints: {
                // Responsividade para cada tamanho de tela
                350: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10,
                },
                650: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                1100: {
                  spaceBetween: 16,
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                1400: {
                    spaceBetween: 16,
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                  },
            },
        });
    }
}

customElements.define("slider-products", Slider);
