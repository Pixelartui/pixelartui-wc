import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {StyledAvatar} from './styles';
import {AvatarSize, AvatarStyle} from './types';

import {theme} from '../Theme';

export class PixelAvatar extends LitElement {
  @property({type: String})
  src = '';

  @property({type: String})
  alt = '';

  @property({type: String})
  initials = '';

  @property({type: String, attribute: 'avatar-size'})
  avatarSize: AvatarSize = 'medium';

  @property({type: String, attribute: 'avatar-style'})
  avatarStyle: AvatarStyle = 'dark';

  @property({type: String, attribute: 'background-color'})
  backgroundColor = '';

  static override styles = [StyledAvatar];

  override render() {
    const containerClasses = classMap({
      'cp-avatar-container': true,
      [this.avatarSize]: true,
    });

    const containerStyles = styleMap({
      '--avatar-border-color':
        this.avatarStyle === 'light'
          ? theme.general.color.white
          : theme.general.color.dark,
      '--avatar-bg':
        this.backgroundColor || theme.general.color.primary,
      '--avatar-text-color': theme.general.color.fontLight,
    });

    const ariaLabel = this.alt || this.initials || 'Avatar';

    const initialsClasses = classMap({
      'cp-avatar-initials': true,
      [this.avatarSize]: true,
    });

    return html`
      <div
        class="${containerClasses}"
        style="${containerStyles}"
        role="img"
        aria-label="${ariaLabel}"
      >
        ${this.src
          ? html`<img
              class="cp-avatar-image"
              src="${this.src}"
              alt="${this.alt}"
            />`
          : html`<span class="${initialsClasses}">
              ${this.initials || '?'}
            </span>`}
      </div>
    `;
  }
}

customElements.define('pixel-avatar', PixelAvatar);
