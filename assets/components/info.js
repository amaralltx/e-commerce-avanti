//
const info_tpl = document.getElementById('info-section-template');

class InfoSection extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Injeta o CSS dentro do shadow por link
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'assets/css/components/info_section.css';
    shadow.appendChild(link);

    shadow.appendChild(info_tpl.content.cloneNode(true));
  }

  connectedCallback() {
    // insere os parâmetros no clone
    const imgEl   = this.shadowRoot.querySelector('img');
    const titleEl = this.shadowRoot.querySelector('h2');

    // Se não encontrar, deixa vazio
    imgEl.src   = this.getAttribute('img')   || '';
    imgEl.alt   = this.getAttribute('title') || '';
    titleEl.textContent = this.getAttribute('title') || '';

    // Não adicionei changeCallback pois o conteúdo não irá alterar em tempo de execução
  }

}

customElements.define('info-section', InfoSection);
