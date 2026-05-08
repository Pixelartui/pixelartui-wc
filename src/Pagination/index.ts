import {LitElement, html} from 'lit';
import {property, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledPagination} from './styles';
import {PaginationStyle} from './types';

import {theme} from '../Theme';

function getPageRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | 'ellipsis')[] {
  const totalNumbers = siblingCount * 2 + 5;

  if (totalNumbers >= totalPages) {
    return Array.from({length: totalPages}, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({length: leftItemCount}, (_, i) => i + 1);
    return [...leftRange, 'ellipsis', totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      {length: rightItemCount},
      (_, i) => totalPages - rightItemCount + i + 1
    );
    return [1, 'ellipsis', ...rightRange];
  }

  const middleRange = Array.from(
    {length: rightSiblingIndex - leftSiblingIndex + 1},
    (_, i) => leftSiblingIndex + i
  );
  return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages];
}

export class PixelPagination extends LitElement {
  @property({type: Number, attribute: 'total-pages'})
  totalPages = 1;

  @property({type: Number, attribute: 'default-page'})
  defaultPage = 1;

  @property({type: Number, attribute: 'sibling-count'})
  siblingCount = 1;

  @property({type: String, attribute: 'pagination-style'})
  paginationStyle: PaginationStyle = 'dark';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  @state()
  private currentPage = 1;

  private initialized = false;

  static override styles = [StyledPagination];

  override willUpdate() {
    if (!this.initialized) {
      this.currentPage = this.defaultPage;
      this.initialized = true;
    }
  }

  private handlePageChange(newPage: number) {
    if (newPage < 1 || newPage > this.totalPages) return;
    this.currentPage = newPage;
    this.dispatchEvent(
      new CustomEvent('page-change', {
        bubbles: true,
        composed: true,
        detail: {page: newPage},
      })
    );
  }

  override render() {
    const borderColor =
      this.paginationStyle === 'dark'
        ? theme.general.color.dark
        : theme.general.color.white;

    const containerStyles = styleMap({
      '--pagination-border-color': borderColor,
      '--pagination-bg': theme.general.color.white,
      '--pagination-font-color': theme.general.color.font,
      '--pagination-hover-bg': theme.general.color.light,
      '--pagination-active-bg':
        this.backgroundColor || theme.general.color.primary,
      '--pagination-active-color': theme.general.color.fontLight,
    });

    const pages = getPageRange(
      this.currentPage,
      this.totalPages,
      this.siblingCount
    );

    return html`
      <nav
        class="cp-pagination-container"
        style="${containerStyles}"
        aria-label="Pagination"
      >
        <button
          class="cp-pagination-btn"
          @click="${() => this.handlePageChange(this.currentPage - 1)}"
          ?disabled="${this.currentPage === 1}"
          aria-label="Previous page"
        >
          &lt;
        </button>
        ${pages.map((item, index) =>
          item === 'ellipsis'
            ? html`<span class="cp-pagination-ellipsis" key="e-${index}"
                >...</span
              >`
            : html`<button
                class="${classMap({
                  'cp-pagination-btn': true,
                  active: this.currentPage === item,
                })}"
                @click="${() => this.handlePageChange(item as number)}"
                aria-current="${this.currentPage === item ? 'page' : 'false'}"
                aria-label="Page ${item}"
              >
                ${item}
              </button>`
        )}
        <button
          class="cp-pagination-btn"
          @click="${() => this.handlePageChange(this.currentPage + 1)}"
          ?disabled="${this.currentPage === this.totalPages}"
          aria-label="Next page"
        >
          &gt;
        </button>
      </nav>
    `;
  }
}

customElements.define('pixel-pagination', PixelPagination);
