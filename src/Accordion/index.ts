import {LitElement, html} from 'lit';
import {property, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledAccordion} from './styles';
import {AccordionItem, AccordionStyle} from './types';

import {theme} from '../Theme';

export class PixelAccordion extends LitElement {
  @property({type: Array})
  items: AccordionItem[] = [];

  @property({type: Boolean, attribute: 'allow-multiple'})
  allowMultiple = false;

  @property({type: Array, attribute: 'default-open-indexes'})
  defaultOpenIndexes: number[] = [];

  @property({type: String, attribute: 'accordion-style'})
  accordionStyle: AccordionStyle = 'dark';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @state()
  private openIndexes: number[] = [];

  private initialized = false;

  static override styles = [StyledAccordion];

  override willUpdate() {
    if (!this.initialized && this.defaultOpenIndexes.length > 0) {
      this.openIndexes = [...this.defaultOpenIndexes];
      this.initialized = true;
    }
  }

  private toggleItem(index: number) {
    const item = this.items[index];
    if (!item || item.disabled) return;

    if (this.openIndexes.includes(index)) {
      this.openIndexes = this.openIndexes.filter((i) => i !== index);
    } else if (this.allowMultiple) {
      this.openIndexes = [...this.openIndexes, index];
    } else {
      this.openIndexes = [index];
    }

    this.dispatchEvent(
      new CustomEvent('accordion-change', {
        bubbles: true,
        composed: true,
        detail: {openIndexes: this.openIndexes},
      })
    );
  }

  override render() {
    const containerStyles = styleMap({
      '--accordion-border-color': theme.general.color.dark,
      '--accordion-bg':
        this.backgroundColor || theme.general.color.white,
      '--accordion-header-color': theme.general.color.font,
      '--accordion-disabled-color': theme.general.color.fontDisabled,
      '--accordion-panel-color': theme.general.color.font,
      '--accordion-panel-border': theme.general.color.disabled,
    });

    return html`
      <div class="cp-accordion-container" style="${containerStyles}">
        ${this.items.map((item, index) => {
          const isOpen = this.openIndexes.includes(index);

          const headerClasses = classMap({
            'cp-accordion-header': true,
            disabled: !!item.disabled,
          });

          const iconClasses = classMap({
            'cp-accordion-icon': true,
            open: isOpen,
          });

          const panelClasses = classMap({
            'cp-accordion-panel': true,
            open: isOpen,
          });

          return html`
            <div class="cp-accordion-item">
              <button
                class="${headerClasses}"
                @click="${() => this.toggleItem(index)}"
                aria-expanded="${isOpen}"
                aria-disabled="${!!item.disabled}"
                type="button"
              >
                ${item.title}
                <span class="${iconClasses}">&#9660;</span>
              </button>
              <div class="${panelClasses}" role="region">
                ${item.content}
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('pixel-accordion', PixelAccordion);
