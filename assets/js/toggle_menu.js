document.addEventListener("DOMContentLoaded", () => {
    const $departmentToggles = document.querySelectorAll(".dropdown-toggle");
    const $menuRoot = document.querySelector("#menu_root");

    // Fecha o menu e remove active de todos os toggles
    function closeAll() {
        $menuRoot.classList.remove("active");
        $departmentToggles.forEach((t) => t.classList.remove("active"));
    }

    // Listener global para fechar ao clicar fora
    document.addEventListener("click", (e) => {
        if (
            !e.target.closest(".dropdown-toggle") &&
            !e.target.closest("#menu_root")
        ) {
            closeAll();
        }
    });

    $departmentToggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            // Fecha o anterior
            closeAll();

            // Ativa o novo
            toggle.classList.toggle("active");
            const department = toggle.getAttribute("data-department");
            $menuRoot.innerHTML =
                department === "Todas as Categorias"
                    ? megaMenuData
                    : SingleMenuData.replace(
                          '<h2 class="department-tittle">',
                          `<h2 class="department-tittle">${department}`
                      );
            $menuRoot.classList.toggle("active");

            // Pointer Events para fechar ao sair (mouse ou touch)
            $menuRoot.addEventListener(
                "pointerenter",
                () => {
                    $menuRoot.addEventListener(
                        "pointerleave",
                        () => {
                            closeAll();
                        },
                        { once: true }
                    );
                },
                { once: true }
            );
            // Se o botão for referente ao Todas as Categorias, abre o menu com todas
            if (department === "Todas as Categorias") {
                loadCategoriesData();
            }
            // Caso contrário, preenche o menu de acordo com a categoria em questão
            else {
                $menuRoot.innerHTML = SingleMenuData;
                // Simplificando uma requisição com apenas o título sendo dinâmico
                const $departmentTittle =
                    $menuRoot.querySelector(".department-tittle");
                $departmentTittle.innerHTML = department;
            }
        });
    });

    // Prepara e carrega o menu com todas as categorias
    function loadCategoriesData() {
        // Simulando dados de uma API/Banco de dados
        const categoriesData = {
            "Departamento": ["Categoria", "Categoria", "Categoria"],
            "Moda Feminina": ["Vestidos", "Blusas", "Saias"],
            "Moda Masculina": ["Camisetas", "Bermudas", "Tênis"],
            "Moda Infantil": ["Meninos", "Meninas", "Calçados"],
            "Cuidados Pessoais": ["Higiene", "Beleza", "Perfumes"],
            "Home Decor": ["Móveis", "Decoração", "Iluminação"],
            "Esporte e Lazer": [
                "Equipamentos",
                "Roupas Esportivas",
                "Calçados Esportivos",
            ],
            "Eletrônicos e Acessórios": [
                "Smartphones",
                "Tablets",
                "Fones de Ouvido",
            ],
            Ofertas: ["Promoções", "Descontos", "Pacotes Especiais"],
        };
        // Seleciona os itens de departamento e a coluna de categorias
        const departmentItems = document.querySelectorAll(".department-item");
        const categoriesColumns = document.querySelector(".categories-columns");

        // Exibe o conteúdo da primeira categoria como padrão
        if (departmentItems.length > 0) {
            const firstDepartment = departmentItems[0];
            firstDepartment.classList.add("active");
            // Seleciona o texto para saber quem é o primeiro
            const firstDepartmentName = firstDepartment
                .querySelector(".department-link")
                .textContent.trim();
            updateCategories(firstDepartmentName);
        }

        // Para cada opção do menu, adiciona dois listeners para mostrar o sub-menu
        departmentItems.forEach((item) => {
            item.setAttribute("tabindex", "0");
            const activateItem = function () {
                // Esconde o sub-menu ativo, se houver
                const currentActive = document.querySelector(
                    ".department-item.active"
                );
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                // Mostra o atual
                this.classList.add("active");

                const departmentName =
                    this.querySelector(".department-link").textContent.trim();

                updateCategories(departmentName);
            };

            item.addEventListener("mouseover", activateItem);
            item.addEventListener("focus", activateItem); // Para navegação acessível com Tab
        });

        // Função para atualizar as categorias
        function updateCategories(departmentName) {
            const categories = categoriesData[departmentName] || [];
            categoriesColumns.innerHTML = categories
                .map(
                    (category) => `
                <div class="category-column">
                  <h3 class="category-title">${category}</h3>
                  <ul class="category-list">
                    <li><a href="#">Subcategoria</a></li>
                    <li><a href="#">Subcategoria</a></li>
                    <li><a href="#">Subcategoria</a></li>
                    <li><a href="#">Subcategoria</a></li>
                    <li><a href="#">Subcategoria</a></li>
                    <li><a href="#">Subcategoria</a></li>
                    <li><a href="#">Subcategoria</a></li>
                  </ul>
                </div>
              `
                )
                .join("");
        }
    }
});

// HTML estático de Todas as Categorias
const megaMenuData = `<div id="mega_menu" class="mega-menu">
              <div class="mega-menu-left">
                  <div class="departments-column">
                    <ul>
                      <li class="department-item active">
                        <a href="#" class="department-link">Moda Feminina</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Moda Masculina</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Moda Infantil</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Cuidados Pessoais</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Home Decor</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Esporte e Lazer</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Eletrônicos e Acessórios</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Ofertas</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Departamento</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Departamento</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Departamento</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Departamento</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Departamento</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                      <li class="department-item">
                        <a href="#" class="department-link">Departamento</a>
                        <img src="assets/svg/header/arrow.svg" alt="">
                      </li>
                    </ul>
                  </div>

                  <div class="categories-columns">
                    <div class="category-column">
                      <h3 class="category-title">
                        <!-- adicionado via js -->
                      </h3>
                      <ul class="category-list">
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                      </ul>
                    </div>

                    <div class="category-column">
                      <h3 class="category-title">
                        <!-- adicionado via js -->
                      </h3>
                      <ul class="category-list">
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                      </ul>
                    </div>

                    <div class="category-column">
                      <h3 class="category-title"><!-- adicionado via js --></h3>
                      <ul class="category-list">
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                        <li>
                          <a href="#"><!-- adicionado via js --></a>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>

              <div class="mega-menu-right">
                <div class="promo-image hide-on-small">
                  <div class="promo-content">
                    <span>Confira os</span>
                    <span>Produtos</span>
                    <span>Que</span>
                    <span>acabaram</span>
                    <span>De chegar</span>
                    <a href="#" class="promo-button">VER TODOS</a>
                  </div>
                </div>
              </div>
            </div>`;

// HTML genérico e estático para categorias específicas
const SingleMenuData = `<div id="mega_menu" class="mega-menu">
        <div class="mega-menu-container">
            <div class="mega-menu-department-left">
                <h2 class="department-tittle">Departamento<h2>
                <div class="department-columns">
                  <div class="department-category-column">
                    <h3 class="department-category-tittle">
                      Categoria
                    </h3>
                    <ul class="department-category-list">
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                    </ul>
                  </div>
                  <div class="department-category-column">
                    <h3 class="department-category-tittle">
                      Categoria
                    </h3>
                    <ul class="department-category-list">
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                    </ul>
                  </div>
                  <div class="department-category-column">
                    <h3 class="department-category-tittle">
                      Categoria
                    </h3>
                    <ul class="department-category-list">
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                      <li>
                        <a href="#">Categoria</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
    
            <div class="mega-menu-right">
              <div class="promo-image">
                <div class="promo-content">
                  <span>Confira os</span>
                  <span>Produtos</span>
                  <span>Que</span>
                  <span>acabaram</span>
                  <span>De chegar</span>
                  <a href="#" class="promo-button">VER TODOS</a>
                </div>
              </div>
            </div>
        </div>
    </div>`;
