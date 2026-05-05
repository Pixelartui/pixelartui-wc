import {LitElement, html} from 'lit';
import {property, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledTabs} from './styles';
import {TabItem, TabsStyle} from './types';

import {theme} from '../Theme';

export class PixelTabs extends LitElement {
  @property({type: Array})
  tabs: TabItem[] = [];

  @property({type: Number, attribute: 'default-active-index'})
  defaultActiveIndex = 0;

  @property({type: String, attribute: 'tabs-style'})
  tabsStyle: TabsStyle = 'dark';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @state()
  private activeIndex = 0;

  private initialized = false;

  static override styles = [StyledTabs];

  override willUpdate() {
    if (!this.initialized) {
      this.activeIndex = this.defaultActiveIndex;
      this.initialized = true;
    }
  }

  private handleTabClick(index: number) {
    if (this.tabs[index]?.disabled) return;
    this.activeIndex = index;
    this.dispatchEvent(
      new CustomEvent('tab-change', {
        bubbles: true,
        composed: true,
        detail: {index},
      })
    );
  }

  override render() {
    const containerStyles = styleMap({
      '--tabs-border-color': theme.general.color.dark,
      '--tabs-text-color': theme.general.color.font,
      '--tab-active-bg':
        this.backgroundColor || theme.general.color.white,
      '--tab-inactive-bg': theme.general.color.light,
      '--tab-disabled-bg': theme.general.color.disabled,
      '--tab-disabled-color': theme.general.color.fontDisabled,
    });

    return html`
      <div class="cp-tabs-container" style="${containerStyles}">
        <div class="cp-tabs-list" role="tablist">
          ${this.tabs.map((tab, index) => {
            const tabClasses = classMap({
              'cp-tab': true,
              active: this.activeIndex === index,
              disabled: !!tab.disabled,
            });

            return html`<button
              class="${tabClasses}"
              role="tab"
              aria-selected="${this.activeIndex === index}"
              ?disabled="${tab.disabled}"
              @click="${() => this.handleTabClick(index)}"
            >
              ${tab.label}
            </button>`;
          })}
        </div>
        <div class="cp-tab-panel" role="tabpanel">
          ${this.tabs[this.activeIndex]?.content || ''}
        </div>
      </div>
    `;
  }
}

customElements.define('pixel-tabs', PixelTabs);
