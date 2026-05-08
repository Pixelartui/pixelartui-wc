import {html, fixture, expect} from '@open-wc/testing';

import {PixelAvatar} from '.';
import '.';

describe('PixelAvatar', () => {
  it('should render with default properties', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar></pixel-avatar>`
    );
    expect(el.avatarSize).to.equal('medium');
    expect(el.avatarStyle).to.equal('dark');
    expect(el.src).to.equal('');
    expect(el.initials).to.equal('');
  });

  it('should render with role=img', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar></pixel-avatar>`
    );
    const container = el.shadowRoot?.querySelector('[role="img"]');
    expect(container).to.not.be.null;
  });

  it('should render image when src is provided', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar
        src="avatar.png"
        alt="User avatar"
      ></pixel-avatar>`
    );
    const img = el.shadowRoot?.querySelector('.cp-avatar-image');
    expect(img).to.not.be.null;
    expect(img?.getAttribute('src')).to.equal('avatar.png');
    expect(img?.getAttribute('alt')).to.equal('User avatar');
  });

  it('should render initials when no src is provided', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar initials="AB"></pixel-avatar>`
    );
    const initials = el.shadowRoot?.querySelector('.cp-avatar-initials');
    expect(initials?.textContent?.trim()).to.equal('AB');
  });

  it('should render fallback when neither src nor initials provided', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar></pixel-avatar>`
    );
    const initials = el.shadowRoot?.querySelector('.cp-avatar-initials');
    expect(initials?.textContent?.trim()).to.equal('?');
  });

  it('should not render image when no src provided', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar initials="AB"></pixel-avatar>`
    );
    const img = el.shadowRoot?.querySelector('.cp-avatar-image');
    expect(img).to.be.null;
  });

  it('should not render initials when src is provided', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar
        src="avatar.png"
        initials="AB"
      ></pixel-avatar>`
    );
    const initials = el.shadowRoot?.querySelector('.cp-avatar-initials');
    expect(initials).to.be.null;
  });

  it('should use alt as aria-label when provided', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar alt="Profile picture"></pixel-avatar>`
    );
    const container = el.shadowRoot?.querySelector('[role="img"]');
    expect(container?.getAttribute('aria-label')).to.equal('Profile picture');
  });

  it('should use initials as aria-label when no alt provided', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar initials="JD"></pixel-avatar>`
    );
    const container = el.shadowRoot?.querySelector('[role="img"]');
    expect(container?.getAttribute('aria-label')).to.equal('JD');
  });

  it('should use default aria-label when no alt or initials', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar></pixel-avatar>`
    );
    const container = el.shadowRoot?.querySelector('[role="img"]');
    expect(container?.getAttribute('aria-label')).to.equal('Avatar');
  });

  it('should render with small size', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar avatar-size="small" initials="SM"></pixel-avatar>`
    );
    const container = el.shadowRoot?.querySelector('.cp-avatar-container');
    expect(container?.classList.contains('small')).to.equal(true);
  });

  it('should render with large size', async () => {
    const el: PixelAvatar = await fixture(
      html`<pixel-avatar avatar-size="large" initials="LG"></pixel-avatar>`
    );
    const container = el.shadowRoot?.querySelector('.cp-avatar-container');
    expect(container?.classList.contains('large')).to.equal(true);
  });
});
