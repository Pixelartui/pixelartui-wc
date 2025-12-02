import { LitElement } from 'lit';
import '../../Components/Container/pixel-container.js';
export declare class PixelBox extends LitElement {
    width: string;
    height: string;
    fullwidth: boolean;
    round: boolean;
    error: boolean;
    disabled: boolean;
    boxStyle: string;
    customColor: string;
    static styles: import("lit").CSSResult[];
    getBorderColor(): string;
    getCustomColors(): {
        customSecondaryColor: string;
        customTertiaryColor: string;
    };
    sideFirst(): import("lit-html").TemplateResult<1>;
    sideSecondLeft(): import("lit-html").TemplateResult<1>;
    sideSecondRight(): import("lit-html").TemplateResult<1>;
    leftSideWrapper(): import("lit-html").TemplateResult<1>;
    rightSideWrapper(): import("lit-html").TemplateResult<1>;
    sideRoundThird(): import("lit-html").TemplateResult<1>;
    sideInner(right?: boolean): import("lit-html").TemplateResult<1>;
    sideRoundSecond(right?: boolean): import("lit-html").TemplateResult<1>;
    sideRoundFirst(): import("lit-html").TemplateResult<1>;
    mainContent(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=pixel-box.d.ts.map