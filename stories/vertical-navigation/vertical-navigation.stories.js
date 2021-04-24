export default {
    title: 'Components/Vertical Navigation',
    parameters: {
        description: `
The vertical navigation area can be used to display navigation structures with up to two levels and contains links that change the content area.
        `,

        tags: ['f3', 'a11y', 'theme'],
        components: ['vertical-nav', 'button', 'icon', 'list', 'popover']
    }
};

export const cozy = () => `<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu">
            <li class="fd-list__navigation-item">
                <i class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item">
                <i class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`;

cozy.storyName = 'Default';

cozy.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: `
The default vertical navigation is comprised of several navigation list items.
        `
    }
};

export const condensed = () => `<div class="fd-vertical-nav fd-vertical-nav--condensed">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu">
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`;

condensed.storyName = 'Condensed';

condensed.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: `
The condensed vertical navigation.
        `
    }
};

export const text = () => `<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu">
            <li class="fd-list__navigation-item">
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <span class="fd-list__navigation-item-text">Calendar</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <span class="fd-list__navigation-item-text">Customers</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
            </li>
            <li class="fd-list__navigation-item">
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`;

text.storyName = 'Text Only';

text.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: `
A vertical navigation list does not need to have icons. However this is only available in expanded mode.
        `
    }
};

export const indication = () => `<div class="fd-vertical-nav">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu">
            <li class="fd-list__navigation-item">
                <i class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item is-expanded" onclick="toggleVerticalNavSubmenu(event)">
                <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <span class="fd-list__navigation-item-text">Calendar</span>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow is-expanded"></i>
                <ul class="fd-list">
                    <li class="fd-list__navigation-item fd-list__navigation-item--second fd-list__navigation-item--indicated">
                        <span class="fd-list__navigation-item-text">Second level item 1</span>
                        <span class="fd-list__navigation-item-indicator"></span>
                    </li>
                    <li class="fd-list__navigation-item fd-list__navigation-item--second">
                        <span class="fd-list__navigation-item-text">Second level item 2</span>
                    </li>
                </ul>
                <span class="fd-list__navigation-item-indicator"></span>
            </li>
        </ul>
    </nav>
</div>
<br/><br/>
<div class="fd-vertical-nav fd-vertical-nav--condensed">
    <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu">
        <ul class="fd-list" aria-label="Main Menu">
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--home"></i>
                <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item--condensed" onclick="toggleCondensedVerticalNavSubmenu(event, 'parent')">
                <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                <i class="fd-list__navigation-item-arrow sap-icon--navigation-down-arrow"></i>    
                <span class="fd-list__navigation-item-indicator"></span>
                <div class="fd-popover__body fd-popover__body--left fd-popover__body--no-arrow fd-list__navigation-item-popover--first" aria-hidden="false" id="popoverA1">
                    <ul class="fd-list">
                        <li class="fd-list__navigation-item--condensed" onclick="toggleCondensedVerticalNavSubmenu(event, 'child')">
                            <i class="fd-list__navigation-item-icon sap-icon--calendar"></i>
                            <span class="fd-list__navigation-item-text">Calendar</span>
                        </li>
                    </ul>
                </div>
                <div class="fd-popover__body fd-popover__body--left fd-popover__body--no-arrow fd-list__navigation-item-popover--second" aria-hidden="false" id="popoverA1">
                    <ul class="fd-list">
                        <li class="fd-list__navigation-item--condensed fd-list__navigation-item--second fd-list__navigation-item--indicated">
                            <span class="fd-list__navigation-item-text">Second level item 1</span>
                            <span class="fd-list__navigation-item-indicator"></span>
                        </li>
                        <li class="fd-list__navigation-item--condensed fd-list__navigation-item--second">
                            <span class="fd-list__navigation-item-text">Second level item 2</span>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--customer"></i>
                <span class="fd-list__navigation-item-text">Customers</span>
            </li>
            <li class="fd-list__navigation-item--condensed">
                <i class="fd-list__navigation-item-icon sap-icon--shipping-status"></i>
                <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
        </ul>
    </nav>
</div>
`;

indication.storyName = 'Navigation Indication';

indication.parameters = {
    docs: {
        iframeHeight: 700,
        storyDescription: `
The vertical navigation list can display navigation indication in several ways.
        `
    }
};