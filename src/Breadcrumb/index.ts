import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledBreadcrumb} from './styles';
import {BreadcrumbItem, BreadcrumbStyle} from './types';

import {theme} from '../Theme';

export class PixelBreadcrumb extends LitElement {
  @property({type: Array})
  items: BreadcrumbItem[] = [];

  @property({type: String})
  separator = '>';

  @property({type: String, attribute: 'breadcrumb-style'})
  breadcrumbStyle: BreadcrumbStyle = 'dark';

  static override styles = [StyledBreadcrumb];

  private handleItemClick(index: number) {
    this.dispatchEvent(
      new CustomEvent('breadcrumb-click', {
        bubbles: true,
        composed: true,
        detail: {index, item: this.items[index]},
      })
    );
  }

  override render() {
    const isLight = this.breadcrumbStyle === 'light';
    const containerStyles = styleMap({
      '--breadcrumb-color': theme.general.color.primary,
      '--breadcrumb-text-color': isLight
        ? theme.general.color.fontLight
        : theme.general.color.font,
    });

    return html`
      <nav
        class="cp-breadcrumb-container"
        style="${containerStyles}"
        aria-label="Breadcrumb"
      >
        ${this.items.map((item, index) => {
          const isLast = index === this.items.length - 1;

          const itemContent = isLast
            ? html`<span class="cp-breadcrumb-item last" aria-current="page"
                >${item.label}</span
              >`
            : item.href
              ? html`<span class="cp-breadcrumb-item">
                  <a class="cp-breadcrumb-link" href="${item.href}"
                    >${item.label}</a
                  >
                </span>`
              : html`<span class="cp-breadcrumb-item">
                  <button
                    class="cp-breadcrumb-button"
                    type="button"
                    @click="${() => this.handleItemClick(index)}"
                  >
                    ${item.label}
                  </button>
                </span>`;

          const separatorContent = !isLast
            ? html`<span class="cp-breadcrumb-separator" aria-hidden="true"
                >${this.separator}</span
              >`
            : html``;

          return html`${itemContent}${separatorContent}`;
        })}
      </nav>
    `;
  }
}

customElements.define('pixel-breadcrumb', PixelBreadcrumb);
