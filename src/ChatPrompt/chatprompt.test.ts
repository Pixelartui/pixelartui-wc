import {html, fixture, expect} from '@open-wc/testing';

import {PixelChatPrompt} from '.';
import '.';

describe('PixelChatPrompt', () => {
  it('should render textarea and send button', async () => {
    const el: PixelChatPrompt = await fixture(
      html`<pixel-chat-prompt input-name="test"></pixel-chat-prompt>`
    );
    const textarea = el.shadowRoot!.querySelector('.cp-chat-prompt-textarea');
    const sendBtn = el.shadowRoot!.querySelector('.cp-chat-prompt-send');
    expect(textarea).to.not.be.null;
    expect(sendBtn).to.not.be.null;
  });

  it('should render with placeholder', async () => {
    const el: PixelChatPrompt = await fixture(
      html`<pixel-chat-prompt
        input-name="test"
        placeholder="Write here..."
      ></pixel-chat-prompt>`
    );
    const textarea = el.shadowRoot!.querySelector(
      '.cp-chat-prompt-textarea'
    ) as HTMLTextAreaElement;
    expect(textarea.placeholder).to.equal('Write here...');
  });

  it('should dispatch chat-send event on send click', async () => {
    const el: PixelChatPrompt = await fixture(
      html`<pixel-chat-prompt input-name="test"></pixel-chat-prompt>`
    );
    let sentValue: string | null = null;
    el.addEventListener('chat-send', ((e: CustomEvent) => {
      sentValue = e.detail.value;
    }) as EventListener);

    const textarea = el.shadowRoot!.querySelector(
      '.cp-chat-prompt-textarea'
    ) as HTMLTextAreaElement;
    textarea.value = 'Hello world';
    textarea.dispatchEvent(new Event('input'));
    await el.updateComplete;

    const sendBtn = el.shadowRoot!.querySelector(
      '.cp-chat-prompt-send'
    ) as HTMLButtonElement;
    sendBtn.click();

    expect(sentValue).to.equal('Hello world');
  });

  it('should clear textarea after send', async () => {
    const el: PixelChatPrompt = await fixture(
      html`<pixel-chat-prompt input-name="test"></pixel-chat-prompt>`
    );

    const textarea = el.shadowRoot!.querySelector(
      '.cp-chat-prompt-textarea'
    ) as HTMLTextAreaElement;
    textarea.value = 'Hello';
    textarea.dispatchEvent(new Event('input'));
    await el.updateComplete;

    const sendBtn = el.shadowRoot!.querySelector(
      '.cp-chat-prompt-send'
    ) as HTMLButtonElement;
    sendBtn.click();
    await el.updateComplete;

    expect(textarea.value).to.equal('');
  });

  it('should disable send button when disabled', async () => {
    const el: PixelChatPrompt = await fixture(
      html`<pixel-chat-prompt
        input-name="test"
        disabled
      ></pixel-chat-prompt>`
    );
    const sendBtn = el.shadowRoot!.querySelector(
      '.cp-chat-prompt-send'
    ) as HTMLButtonElement;
    expect(sendBtn.disabled).to.be.true;
  });

  it('should not send empty message', async () => {
    const el: PixelChatPrompt = await fixture(
      html`<pixel-chat-prompt input-name="test"></pixel-chat-prompt>`
    );
    let sent = false;
    el.addEventListener('chat-send', () => {
      sent = true;
    });

    const sendBtn = el.shadowRoot!.querySelector(
      '.cp-chat-prompt-send'
    ) as HTMLButtonElement;
    sendBtn.click();
    expect(sent).to.be.false;
  });
});
