import data from './data.json';

export default {
    title: 'Components/Icon',
    parameters: {
        description: `Icons are used to provide visual clarity, save screen space, and help guide users as they navigate an application. They are often used as visual elements within other components, although they can be used independently, given that they can be read by screen readers or have a tooltip for accessibility purposes. See [Getting Started](../getting-started.html#project-configuration) for instructions on how to use the SAP icon font on your page.

##Usage
**Use the icon if:**

- You want to display an icon for illustrative purposes only, without interaction states, acting as a non-interactive icon/pictogram. 
- You intend to pair the icon with another method of communication i.e. with text or a tooltip.


Note: If an icon needs to be selected or have any interaction states, it is recommended to use the transparent button style. See **Button** for more details on how to implement it.
          `,
        tags: ['development'],
        components: ['button', 'button-split', 'icon', 'menu', 'popover', 'segmented-button', 'icon-message']
    }
};

export const sizes = () => `

    <span class="sap-icon sap-icon--cart"></span>
    <br />
    <span class="sap-icon sap-icon--cart" style="font-size:5rem"></span>
    <br />
    <span class="sap-icon sap-icon--cart" style="font-size:10rem"></span>
`;

sizes.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'Icons don’t have predefined sizes because they align with the font size value. They are vector graphics, meaning they can be easily resized without compromising their appearance. And because icons are essentially a font, there are unlimited sizes.'
    }
};

export const availableIcons = () => {
    const div = document.createElement('div');
    div.className = 'fddocs-container';
    div.innerHTML = data.icons.map((icon) => {
        return (
            '<div class="fddocs-container--icon">' +
                `<span class="sap-icon sap-icon--${icon}" style="font-size:3rem"></span>` +
                `<div>.sap-icon--${icon}</div>` +
            '</div><br />'
        );
    }).join('');
    return div.outerHTML;
};

availableIcons.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'There are several icons available. To display any one of these icons, add the <code>sap-icon--{icon-name}</code> modifier class identifying the icon style to the <code>sap-icon</code> class. For example, for a search icon, add <code>sap-icon sap-icon--search</code> with the desired font size value.'
    },
    skipRTLSnapshot: true
};


export const iconSemantics = () => `
<div>
    <i arial-label="information" class="fd-icon-message__icon"></i>
    <i arial-label="success" class="fd-icon-message__icon--success"></i>
    <i arial-label="error" class="fd-icon-message__icon--error"></i>
    <i arial-label="warning" class="fd-icon-message__icon--warning"></i>
    <i arial-label="question" class="fd-icon-message__icon--question"></i>
</div>
`;
iconSemantics.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display icons with semantic colors use the `fd-icon-message__icon`.For success color use the `--success` modifier. For error color use the `--error` modifier. For warning color use the `--warning` modifier. For question color use the `--question` modifier.'
    }
};

export const iconTextSemantics = () => `
<div>
<span class="fd-icon-message">Information</span>
<span class="fd-icon-message fd-icon-message--success">Success</span>
<span class="fd-icon-message fd-icon-message--error">Error</span>
<span class="fd-icon-message fd-icon-message--warning">Warning</span>
<span class="fd-icon-message fd-icon-message--question">Question</span>
</div>
`;
iconTextSemantics.parameters = {
    docs: {
        iframeHeight: 200,
        storyDescription: 'To display text associated with the given icon with semantic colors use the `fd-icon-message` class.For success color use the `--success` modifier. For error color use the `--error` modifier. For warning color use the `--warning` modifier. For question color use the `--question` modifier.'
    }
};
